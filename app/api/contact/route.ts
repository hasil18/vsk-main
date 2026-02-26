import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 👇 Logo path from public folder
    const logoPath = path.join(process.cwd(), "public", "vsklogo.png");

    // ==========================
    // 1️⃣ Email to Company
    // ==========================
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Message",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b><br/> ${message}</p>
      `,
    });

    // ==========================
    // 2️⃣ Auto Reply to User (With Logo)
    // ==========================
    await transporter.sendMail({
      from: `"VSK Construction" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank You for Contacting VSK Construction",
      attachments: [
        {
          filename: "vsklogo.png",
          path: logoPath,
          cid: "companylogo", // 👈 IMPORTANT
        },
      ],
      html: `
        <div style="font-family: Arial, sans-serif; background:#f4f6f9; padding:40px;">
          
          <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 5px 15px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <div style="background:#111827; padding:20px; text-align:center;">
              <img src="cid:companylogo" 
                   alt="VSK Construction Logo" 
                   style="max-width:160px;" />
            </div>

            <!-- Body -->
            <div style="padding:30px;">
              <h2 style="color:#2563eb;">Hello ${name},</h2>

              <p style="color:#444; font-size:15px;">
                Thank you for contacting <strong>VSK Construction</strong>.
                We have received your message.
                Our team will contact you shortly.
              </p>

              <div style="background:#f3f4f6; padding:15px; border-radius:8px; margin:20px 0;">
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Your Message:</strong><br/> ${message}</p>
              </div>

              <!-- WhatsApp Button -->
              <div style="text-align:center; margin:30px 0;">
                <a href="https://wa.me/919979206812"
                   style="background:#16a34a; color:#ffffff; padding:12px 25px; 
                   text-decoration:none; border-radius:6px; font-weight:bold; display:inline-block;">
                  💬 Chat With Us on WhatsApp
                </a>
              </div>

              <p style="color:#555; font-size:14px;">
                Best Regards,<br/>
                <strong>VSK Construction Team</strong>
              </p>
            </div>

            <!-- Footer -->
            <div style="background:#111827; color:#ffffff; text-align:center; padding:15px; font-size:13px;">
              © 2026 VSK Construction | Gujarat, India  
            </div>

          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ success: false });
  }
}