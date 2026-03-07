"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {

const [showTop,setShowTop] = useState(false)

useEffect(()=>{

const handleScroll = ()=>{
setShowTop(window.scrollY > 400)
}

window.addEventListener("scroll",handleScroll)

return ()=>window.removeEventListener("scroll",handleScroll)

},[])

const scrollToTop = ()=>{
window.scrollTo({top:0,behavior:"smooth"})
}

return(

<div>

{/* ================= MOBILE VERSION ================= */}

<div className="md:hidden w-full overflow-hidden">

{/* HERO */}

<section className="relative text-center">

<img
src="/constructionimg2.png"
alt="construction"
className="w-full h-auto"
/>

<div className="absolute inset-0 bg-black/60"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center px-6">

<h1 className="text-3xl font-bold text-white">
Building Strong Foundations
</h1>

<p className="text-sm text-gray-200 mt-2">
High quality Trimix Flooring and RCC Road Construction Services.
</p>

<div className="flex gap-4 mt-5">

  <Link
    href="/contactus"
    className="bg-yellow-500 text-black px-3 py-3 rounded-lg hover:bg-yellow-400 transition"
  >
    Get Quote
  </Link>

  <Link
    href="/services"
    className="border border-white text-white px-3 py-3 rounded-lg hover:bg-white hover:text-black transition"
  >
    Our Services
  </Link>

</div>
</div>

</section>


{/* ABOUT */}

<section className="py-12 px-5">

<h2 className="text-2xl font-bold mb-4">
About Our Company
</h2>

<p className="text-gray-600 text-lg">
We specialize in high performance flooring and construction services
including Trimix flooring, RCC roads, laser finishing, epoxy coating
and VDF finishing solutions built to last.
</p>

<p className="text-base md:text-lg text-gray-600 mt-6">
Our mission is to deliver durable construction solutions with
precision engineering and modern technology.
</p>

<img
src="/constructionimg1.png"
className="mt-6 rounded-lg shadow"
/>

</section>
{/* REPUTATION */}

<section className="py-16 bg-gray-900 text-white">

<div className="px-5 text-center">

<h2 className="text-2xl font-bold text-yellow-500 mb-10">
We've Reputation For Excellence
</h2>

<div className="grid grid-cols-2 gap-4">

<ReputationCard icon="🏆" title="Reputation for Excellence"/>
<ReputationCard icon="🤝" title="We Build Partnerships"/>
<ReputationCard icon="🎯" title="Guided by Commitment"/>
<ReputationCard icon="👷" title="Professional Team"/>

</div>

</div>

</section>
{/* MOBILE SERVICES */}

<section className="py-20 bg-gray-100">

<div className="px-5">

<h2 className="text-3xl font-bold text-center mb-12">
Our Services
</h2>

<div className="grid grid-cols-1 gap-6">

<ServiceCard icon="🏗️" title="Trimix Flooring" desc="Industrial grade trimix flooring built for durability."/>

<ServiceCard icon="🛣️" title="RCC Roads" desc="Heavy duty RCC roads designed for long lasting usage."/>

<ServiceCard icon="✨" title="Laser Finishing" desc="Perfect level finishing using modern laser technology."/>

<ServiceCard icon="🪚" title="Groove Cutting" desc="Precision groove cutting for industrial flooring."/>

<ServiceCard icon="🧱" title="Epoxy Flooring" desc="Durable epoxy coatings for warehouses and factories."/>

<ServiceCard icon="🏢" title="VDF Flooring" desc="Vacuum dewatered flooring for maximum strength."/>

</div>

</div>

</section>


{/* WHY CHOOSE US */}

<section className="py-16 px-5 bg-white">

<h2 className="text-2xl font-bold text-center mb-10">
Why Choose Us
</h2>

<div className="grid grid-cols-2 gap-4">

<WhyCard icon="🏆" title="Expert Team" desc="Our experienced engineers deliver top quality construction."/>

<WhyCard icon="🛡️" title="Quality Materials" desc="We use only premium materials and modern technology."/>

<WhyCard icon="⏱️" title="On-Time Delivery" desc="We complete projects on time with perfect quality."/>

<WhyCard icon="🤝" title="Customer Focus" desc="We focus on customer satisfaction."/>

</div>

</section>
{/* CLIENTS */}

<section className="py-12 px-5">

<h2 className="text-2xl font-bold text-center mb-8">
Our Clients
</h2>

<div className="grid grid-cols-2 gap-4">

<ClientCard image="/happyclient1.png"/>
<ClientCard image="/happyclient2.png"/>
<ClientCard image="/happyclient3.png"/>
<ClientCard image="/happyclient4.png"/>

</div>

</section>
{/* CTA */}

<section className="py-24 bg-yellow-500">

<div className="max-w-7xl mx-auto px-6 text-center">

<h2 className="text-4xl font-bold text-black">
Ready To Start Your Project?
</h2>

<p className="mt-4 text-lg text-black">
Contact our expert team today for the best construction solutions.
</p>

<Link
href="/contactus"
className="inline-block mt-8 bg-black text-white px-10 py-4 rounded-lg hover:bg-gray-800 transition"
> 
Request Quote
</Link>

</div>

</section>
</div>



{/* ================= TABLET VERSION ================= */}

<div className="hidden md:block lg:hidden w-full overflow-hidden">

{/* HERO */}

<section className="relative text-center">

<img
src="/constructionimg2.png"
alt="construction"
className="w-full h-[60vh] object-cover"
/>

<div className="absolute inset-0 bg-black/60"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center px-6">

<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-white leading-tight">
Building Strong
<span className="block text-yellow-500">Foundations</span>
</h1>

<p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
We provide high quality construction solutions including Trimix Flooring,
RCC Roads, Laser Finishing and Epoxy Coatings.
</p>

<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

<Link
href="/contactus"
className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-lg transition"
> 
GetFree Quote
</Link>

<Link
href="/services"
className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition"
> 
OurServices
</Link>
</div>
</div>

</section>


{/* ABOUT */}

<section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">

<div>

<h2 className="text-3xl font-bold mb-4">
About Our Company
</h2>

<p className="text-gray-600 text-lg">
We specialize in high performance flooring and construction services
including Trimix flooring, RCC roads, laser finishing, epoxy coating
and VDF finishing solutions built to last.
</p>

<p className="text-base md:text-lg text-gray-600 mt-6">
Our mission is to deliver durable construction solutions with
precision engineering and modern technology.
</p>

</div>

<img
src="/constructionimg1.png"
className="rounded-xl shadow"
/>

</section>
{/* REPUTATION */}

<section className="py-16 bg-gray-900 text-white">

<div className="px-5 text-center">

<h2 className="text-2xl font-bold text-yellow-500 mb-10">
We've Reputation For Excellence
</h2>

<div className="grid grid-cols-2 gap-4">

<ReputationCard icon="🏆" title="Reputation for Excellence"/>
<ReputationCard icon="🤝" title="We Build Partnerships"/>
<ReputationCard icon="🎯" title="Guided by Commitment"/>
<ReputationCard icon="👷" title="Professional Team"/>

</div>

</div>

</section>
{/* SERVICES */}

<section className="py-20 md:py-24 bg-gray-100">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
Our Services
</h2>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

<ServiceCard icon="🏗️" title="Trimix Flooring" desc="Industrial grade trimix flooring built for durability."/>

<ServiceCard icon="🛣️" title="RCC Roads" desc="Heavy duty RCC roads designed for long lasting usage."/>

<ServiceCard icon="✨" title="Laser Finishing" desc="Perfect level finishing using modern laser technology."/>

<ServiceCard icon="🪚" title="Groove Cutting" desc="Precision groove cutting for industrial flooring."/>

<ServiceCard icon="🧱" title="Epoxy Flooring" desc="Durable epoxy coatings for warehouses and factories."/>

<ServiceCard icon="🏢" title="VDF Flooring" desc="Vacuum dewatered flooring for maximum strength."/>

</div>

</div>

</section>




{/* WHY CHOOSE US */}

<section className="py-16 px-5 bg-white">

<h2 className="text-2xl font-bold text-center mb-10">
Why Choose Us
</h2>

<div className="grid grid-cols-2 gap-4">

<WhyCard icon="🏆" title="Expert Team" desc="Our experienced engineers deliver top quality construction."/>

<WhyCard icon="🛡️" title="Quality Materials" desc="We use only premium materials and modern technology."/>

<WhyCard icon="⏱️" title="On-Time Delivery" desc="We complete projects on time with perfect quality."/>

<WhyCard icon="🤝" title="Customer Focus" desc="We focus on customer satisfaction."/>

</div>

</section>

{/* CLIENTS */}

<section className="py-16 px-6">

<h2 className="text-3xl font-bold text-center mb-10">
Our Clients
</h2>

<div className="grid grid-cols-4 gap-6">

<ClientCard image="/happyclient1.png"/>
<ClientCard image="/happyclient2.png"/>
<ClientCard image="/happyclient3.png"/>
<ClientCard image="/happyclient4.png"/>

</div>

</section>
{/* CTA */}

<section className="py-24 bg-yellow-500">

<div className="max-w-7xl mx-auto px-6 text-center">

<h2 className="text-4xl font-bold text-black">
Ready To Start Your Project?
</h2>

<p className="mt-4 text-lg text-black">
Contact our expert team today for the best construction solutions.
</p>

<Link
href="/contactus"
className="inline-block mt-8 bg-black text-white px-10 py-4 rounded-lg hover:bg-gray-800 transition"
> 
Request Quote
</Link>

</div>

</section>
</div>



{/* ================= DESKTOP VERSION ================= */}

<div className="hidden lg:block">

{/* HERO */}

<section
className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
style={{ backgroundImage:"url('/constructionimg2.png')" }}
>

<div className="absolute inset-0 bg-black/60"></div>

<div className="relative z-10 text-white max-w-4xl">

<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-white leading-tight">
Building Strong
<span className="block text-yellow-500">Foundations</span>
</h1>

<p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
We provide high quality construction solutions including Trimix Flooring,
RCC Roads, Laser Finishing and Epoxy Coatings.
</p>

<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

<Link
href="/contactus"
className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-lg transition"
> 
GetFree Quote
</Link>

<Link
href="/services"
className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition"
> 
OurServices
</Link>
</div>
</div>

</section>


{/* ABOUT */}

<section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-2 gap-14 items-center">

<div>

<h2 className="text-4xl font-bold mb-6">
About Our Company
</h2>

<p className="text-gray-600 text-lg">
We specialize in high performance flooring and construction services
including Trimix flooring, RCC roads, laser finishing, epoxy coating
and VDF finishing solutions built to last.
</p>

<p className="text-base md:text-lg text-gray-600 mt-6">
Our mission is to deliver durable construction solutions with
precision engineering and modern technology.
</p>
</div>

<img
src="/constructionimg1.png"
className="rounded-2xl shadow-2xl"
/>

</section>
{/* REPUTATION */}

<section className="py-16 bg-gray-900 text-white">

<div className="px-5 text-center">

<h2 className="text-2xl font-bold text-yellow-500 mb-10">
We've Reputation For Excellence
</h2>

<div className="grid grid-cols-2 gap-4">

<ReputationCard icon="🏆" title="Reputation for Excellence"/>
<ReputationCard icon="🤝" title="We Build Partnerships"/>
<ReputationCard icon="🎯" title="Guided by Commitment"/>
<ReputationCard icon="👷" title="Professional Team"/>

</div>

</div>

</section>
{/* SERVICES */}

<section className="py-20 md:py-24 bg-gray-100">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
Our Services
</h2>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

<ServiceCard icon="🏗️" title="Trimix Flooring" desc="Industrial grade trimix flooring built for durability."/>

<ServiceCard icon="🛣️" title="RCC Roads" desc="Heavy duty RCC roads designed for long lasting usage."/>

<ServiceCard icon="✨" title="Laser Finishing" desc="Perfect level finishing using modern laser technology."/>

<ServiceCard icon="🪚" title="Groove Cutting" desc="Precision groove cutting for industrial flooring."/>

<ServiceCard icon="🧱" title="Epoxy Flooring" desc="Durable epoxy coatings for warehouses and factories."/>

<ServiceCard icon="🏢" title="VDF Flooring" desc="Vacuum dewatered flooring for maximum strength."/>

</div>

</div>

</section>

{/* WHY CHOOSE US */}

<section className="py-16 px-5 bg-white">

<h2 className="text-2xl font-bold text-center mb-10">
Why Choose Us
</h2>

<div className="grid grid-cols-2 gap-4">

<WhyCard icon="🏆" title="Expert Team" desc="Our experienced engineers deliver top quality construction."/>

<WhyCard icon="🛡️" title="Quality Materials" desc="We use only premium materials and modern technology."/>

<WhyCard icon="⏱️" title="On-Time Delivery" desc="We complete projects on time with perfect quality."/>

<WhyCard icon="🤝" title="Customer Focus" desc="We focus on customer satisfaction."/>

</div>

</section>

{/* CLIENTS */}

<section className="py-20 px-6">

<h2 className="text-4xl font-bold text-center mb-14">
Trusted Clients
</h2>

<div className="max-w-6xl mx-auto grid grid-cols-6 gap-8">

<ClientCard image="/happyclient1.png"/>
<ClientCard image="/happyclient2.png"/>
<ClientCard image="/happyclient3.png"/>
<ClientCard image="/happyclient4.png"/>
<ClientCard image="/happyclient5.png"/>
<ClientCard image="/happyclient6.png"/>

</div>

</section>
{/* CTA */}

<section className="py-24 bg-yellow-500">

<div className="max-w-7xl mx-auto px-6 text-center">

<h2 className="text-4xl font-bold text-black">
Ready To Start Your Project?
</h2>

<p className="mt-4 text-lg text-black">
Contact our expert team today for the best construction solutions.
</p>

<Link
href="/contactus"
className="inline-block mt-8 bg-black text-white px-10 py-4 rounded-lg hover:bg-gray-800 transition"
> 
Request Quote
</Link>

</div>

</section>
</div>



{/* SCROLL BUTTON */}

{showTop &&(

<button
onClick={scrollToTop}
className="fixed bottom-6 right-6 bg-yellow-500 text-black w-12 h-12 rounded-full shadow-lg"
>
↑
</button>

)}

</div>

)

}



/* COMPONENTS */

function ServiceCard({icon,title,desc}:any){

return(

<div className="bg-white p-6 rounded-xl shadow text-center hover:shadow-xl transition duration-300">

<div className="text-4xl mb-3">
{icon}
</div>

<h3 className="font-semibold text-lg mb-2">
{title}
</h3>

<p className="text-sm text-gray-600">
{desc}
</p>

</div>

)

}


function ClientCard({image}:any){

return(

<div className="bg-white p-6 rounded-xl shadow flex items-center justify-center">

<img src={image} className="h-14 object-contain"/>

</div>

)

}
function ReputationCard({icon,title}:any){

return(

<div className="bg-gray-800 p-6 rounded-xl text-center hover:bg-yellow-500 hover:text-black transition">

<div className="text-3xl mb-2">
{icon}
</div>

<h3 className="text-sm font-semibold">
{title}
</h3>

</div>

)

}
function WhyCard({icon,title,desc}:any){

return(

<div className="bg-gray-50 p-5 rounded-xl shadow text-center">

<div className="text-3xl mb-2">
{icon}
</div>

<h3 className="font-semibold mb-2">
{title}
</h3>

<p className="text-sm text-gray-600">
{desc}
</p>

</div>

)

}
