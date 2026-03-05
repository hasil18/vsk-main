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


{/* HERO SECTION */}

<section className="relative min-h-screen flex items-center justify-center bg-[url('/constructionimg2.png')] bg-cover bg-center">

<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>

<div className="relative z-10 text-center px-6 max-w-5xl">

<h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight">
Building Strong
<span className="block text-yellow-500">Foundations</span>
</h1>

<p className="mt-6 text-lg md:text-2xl text-gray-200">
We provide high quality construction solutions including Trimix Flooring,
RCC Roads, Laser Finishing and Epoxy Coatings.
</p>

<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

<Link
href="/contactus"
className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-lg transition"
>
Get Free Quote
</Link>

<Link
href="/services"
className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition"
>
Our Services
</Link>

</div>

</div>

</section>



{/* ABOUT SECTION */}

<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div>

<h2 className="text-4xl md:text-5xl font-bold mb-6">
About Our Company
</h2>

<p className="text-lg text-gray-600 leading-relaxed">
We specialize in high performance flooring and construction services
including Trimix flooring, RCC roads, laser finishing, epoxy coating
and VDF finishing solutions built to last.
</p>

<p className="text-lg text-gray-600 mt-6">
Our mission is to deliver durable construction solutions with
precision engineering and modern technology.
</p>

<div className="grid grid-cols-2 gap-8 mt-10">

<div>
<h3 className="text-4xl font-bold text-yellow-500">10+</h3>
<p className="text-gray-600">Years Experience</p>
</div>

<div>
<h3 className="text-4xl font-bold text-yellow-500">500+</h3>
<p className="text-gray-600">Projects Completed</p>
</div>

</div>

</div>

<div>

<img
src="/constructionimg1.png"
alt="construction"
className="rounded-xl shadow-2xl w-full hover:scale-105 transition duration-500"
/>

</div>

</div>

</section>



{/* REPUTATION */}

<section className="py-20 bg-gray-900 text-white">

<div className="max-w-7xl mx-auto px-6 text-center">

<h2 className="text-4xl font-bold text-yellow-500 mb-16">
We've Reputation For Excellence
</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

<ReputationCard icon="🏆" title="Reputation for Excellence"/>
<ReputationCard icon="🤝" title="We Build Partnerships"/>
<ReputationCard icon="🎯" title="Guided by Commitment"/>
<ReputationCard icon="👷" title="Professional Team"/>

</div>

</div>

</section>



{/* SERVICES */}

<section className="py-24 bg-gray-100">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
Our Services
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

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

<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
Why Choose Us
</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

<WhyCard icon="🏆" title="Expert Team" desc="Our experienced engineers deliver top quality construction."/>

<WhyCard icon="🛡️" title="Quality Materials" desc="We use only premium materials and modern technology."/>

<WhyCard icon="⏱️" title="On-Time Delivery" desc="We complete projects on time with perfect quality."/>

<WhyCard icon="🤝" title="Customer Focus" desc="We focus on customer satisfaction and long-term relationships."/>

</div>

</div>

</section>



{/* CLIENTS */}

<section className="py-24 bg-gray-50">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center mb-16">
Trusted By Leading Companies
</h2>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">

<ClientCard image="/happyclient1.png"/>
<ClientCard image="/happyclient2.png"/>
<ClientCard image="/happyclient3.png"/>
<ClientCard image="/happyclient4.png"/>
<ClientCard image="/happyclient5.png"/>
<ClientCard image="/happyclient6.png"/>

</div>

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
className="inline-block mt-8 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition"
>
Request Quote
</Link>

</div>

</section>



{/* SCROLL BUTTON */}

{showTop &&(

<button
onClick={scrollToTop}
className="fixed bottom-6 right-6 bg-yellow-500 hover:bg-yellow-400 text-black w-12 h-12 rounded-full shadow-xl"
>
↑
</button>

)}

</div>

)

}



/* COMPONENTS */

function ReputationCard({icon,title}:any){

return(

<div className="bg-gray-800 p-8 rounded-xl hover:bg-yellow-500 hover:text-black transition text-center">

<div className="text-4xl mb-4">{icon}</div>

<h3 className="font-semibold">{title}</h3>

</div>

)

}


function ServiceCard({icon,title,desc}:any){

return(

<div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition text-center">

<div className="text-5xl text-yellow-500 mb-4">{icon}</div>

<h3 className="text-xl font-bold mb-3">{title}</h3>

<p className="text-gray-600">{desc}</p>

</div>

)

}


function WhyCard({icon,title,desc}:any){

return(

<div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition">

<div className="text-5xl text-yellow-500 mb-4">{icon}</div>

<h3 className="font-bold mb-3">{title}</h3>

<p className="text-gray-600">{desc}</p>

</div>

)

}


function ClientCard({image}:any){

return(

<div className="bg-white p-6 rounded-xl shadow flex items-center justify-center hover:shadow-xl transition">

<img src={image} className="h-16 md:h-20 object-contain"/>

</div>

)

}