import React, { useEffect } from "react";
import heroImage from "@/assets/hero-travel.jpg";
import { useNavigate } from "react-router-dom";
import ScrollButtons from "@/components/ScrollButtons";
const sections = [
  {
    title: "Our Vision",
    content:
      "At Global Journey, our ambition is to be a leading DMC in Europe, renowned for delivering world-class service, unmatched destination expertise and innovative travel solutions. We are driven by pioneering technology and shaped by a dedicated team, all committed to creating exceptional experiences for your clients, industry partners and stakeholders.",
  },
  {
    title: "Who We Are",
    content:
      "Guided by the belief that every journey creates a lifelong memory. We are passionate about curating unforgettable travel moments across Europe and beyond. Our team’s deep local knowledge, operational excellence and personalized touch allow us to design journeys that meet the unique needs of each traveller and partner.",
  },
  {
    title: "Our Expertise",
    content:
      "Our portfolio covers a comprehensive spectrum of travel management services, including leisure group tours, MICE Programmes, Special Interest Journeys, Educational Tours and Accessible Travel. From curated packages and exclusive experiences to accommodation, transportation, attractions and  meals, we deliver every element our clients need from a dedicated DMC partner.",
  },
  {
    title: "Curated Experiences",
    content:
      "We take pride in hand-picking and negotiating the most outstanding travel products hotels, villas, experiences, restaurants and attractions along with memories ensuring every offering meets rigorous standards of quality and value.",
  },
  {
    title: "Our Team",
    content:
      "At the heart of Global Journey is our dynamic, multilingual team. Our onground staff and guides speak a variety of European and Indian languages to ensure clear communication and local insight. We also operate an in-house logistics and transport unit, managing a diverse fleet and supplier network.",
  },
  {
    title: "Service Excellence",
    content:
      "Customer satisfaction is our top priority. Our dedicated Quality Assurance team monitors each stage of the travel experience pre-tour, on-tour and post-tour responding to feedback and resolving issues quickly to ensure top-tier service.",
  },
  {
    title: "Culinary, Culture & Connections",
    content:
      "We connect travellers to vibrant local cuisines and authentic dining experiences. Our restaurant partnerships and curated food journeys highlight the flavours that define each destination.",
  },
  {
    title: "Embracing Innovation",
    content:
      "We invest in emerging technologies and smart travel management tools to deliver streamlined, efficient experiences. Our digital platforms offer flexible integration and real-time solutions for modern travel demands.",
  },
];

const learnMoreAboutUs = () => {
  const navigate = useNavigate();
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (   
    
    <div className="bg-background text-foreground">
      
      {/* Hero Section */}
      <div
  className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
  style={{
    backgroundImage: `url(${heroImage})`,
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Back Button Positioned Top-Left */}
  <button
    onClick={() => navigate("/")}
    className="absolute top-4 left-4 z-20 px-4 py-2 text-white bg-gradient-sunset hover:bg-gradient-sunset transition rounded-md"
  >
    ← Back to Home
  </button>

  <h1 className=" textOrange relative z-10 text-white text-4xl md:text-5xl font-bold text-center px-4">
    About Us
  </h1>
</div>
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl text-orange-500 font-semibold text-center mb-12">
          Global Journey – Your DMC Partner in Europe
        </h2>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-orange-500 ">
                {section.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <p className="text-lg text-center mt-16 text-muted-foreground max-w-3xl mx-auto">
          At Global Journey, we unite expertise, passion and technology to deliver the very best of Europe to our clients-one remarkable journey at a time.
        </p>
      </div>
         <ScrollButtons/>
    </div>
    
  );
};

export default learnMoreAboutUs;
