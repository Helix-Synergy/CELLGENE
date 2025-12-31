import React from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  HeartPulse,
  SmilePlus,
  Dna,
  Video,
  Globe,
  Biohazard,
  Radiation,
  Star,
  User,
  BookOpen,
  Stethoscope,
  PackageSearch,
  Rocket,
} from "lucide-react";
import { banner_style } from "../Styles/styles";
import about1 from "../assets/Images1/about1.png"
const data = {
  event: {
    title: "About Us",
    date: "25th - 27th Nov 2025",
    organizer: "Helix Conferences",
    description: [
      <>
  
The World Cell & Gene Therapy Manufacturing Summit, organized by <Link to= "/cellgene-orators"  className="
             hover:text-accent hover:decoration-accent
             transition-colors duration-300">
Helix Conferences,</Link> is a distinguished international forum dedicated to advancing robust, scalable, and compliant manufacturing solutions for cell and gene therapies that improve patient access and global healthcare outcomes.
The conference is designed to enable high-level knowledge exchange, cross-sector collaboration, and evidence-based dialogue accelerating the translation of cell and gene therapies from clinical development to commercial manufacturing. Key focus areas include viral vector production, cell processing, scale-up and scale-out strategies, GMP compliance, quality control, automation,
<Link to="/about-cellgene"className="
             hover:text-accent hover:decoration-accent
             transition-colors duration-300">
               digital manufacturing,
 </Link> and supply-chain resilience.
Through keynote addresses, plenary sessions, expert-led panels, technical workshops, and industry case studies, participants gain strategic insights into emerging manufacturing technologies, regulatory expectations, operational excellence, and sustainable commercialization models.
 
      
      </>,
      <>
        {/* From cutting-edge AI to advanced robotics, from cybersecurity trends to sustainable engineering—we curate thought-provoking content and create immersive spaces where innovation thrives. Explore our sessions to engage with the future of technology, exchange ideas with global experts, and drive impactful solutions across industries.{" "} */}
        <Link
          to= "/cellgene-conference-tracks/"
          target="blank"
          rel="noopener noreferrer"
          className="text-accent font-bold"
        ></Link>{" "}
      </>,
    ],
  },

  join: [
    {
      text: "",
      // linkText: "Microbiome Science",
      // link: "/",
      suffix:
       "Join global leaders, innovators, and policymakers in shaping a scalable, reliable, and patient-centric cell and gene therapy manufacturing ecosystem..",
    },
  ],
 highlights :[
  {
    title: "Distinguished Keynote Speakers",
    description:
      "Engage with internationally recognized leaders shaping the future of cell and gene therapy manufacturing, regulation, and commercialization.",
  },
  {
    title: "Technical Workshops & Expert Sessions",
    description:
      "Participate in deep-dive sessions on viral vector manufacturing, cell processing, automation, analytical characterization, and GMP best practices.",
  },
  {
    title: "Innovation & Technology Exhibition",
    description:
      "Explore advanced manufacturing platforms, closed-system solutions, digital tools, and next-generation bioprocess technologies.",
  },
  {
    title: "Strategic Networking Opportunities",
    description:
      "Connect with global stakeholders across biopharma, CDMOs, academia, technology providers, and regulatory bodies.",
  },
  {
    title: "GMP & Regulatory Excellence Focus",
    description:
      "Gain insights into global regulatory frameworks, quality-by-design approaches, and compliance strategies for ATMP manufacturing.",
  },
  {
    title: "Manufacturing & Market Intelligence",
    description:
      "Discover the latest trends in scale-up, cost optimization, supply-chain strategies, and commercial readiness.",
    linkText: "View event schedule",
    link: "/cellgene-event-schedule",
  },
  {
    title: "Collaboration & Partnership Platforms",
    description:
      "Build strategic alliances to accelerate technology transfer, scale manufacturing, and expand global access.",
  },
  {
    title: "Professional Development & Accreditation",
    description:
      "Earn professional development recognition through certified training sessions and advanced technical workshops.",
  },
],






  dates: {
    eventDate: "25th-27th Nov 2025",
    venue: "Novotel Valencia, Spain",
    registrationDeadline: "1st Nov 2025",
  },
};

const AboutPublicHealth = () => {
  return (
    <div className="w-full 2xl:max-w-[1280px] mx-auto justify-center items-center text-center">
      <div
        className={`${banner_style} w-full mx-auto about-banner`}
        style={{
          backgroundImage:
            `url(${about1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-slate-100 text-3xl sm:text-5xl md:text-6xl font-bold px-4 z-10">
          {data.event.title}
        </h1>
      </div>

      <h1 className="text-4xl mt-2 font-bold text-one">
Fostering Innovation Manufacturing the Future of Advanced Therapies
      </h1>
      <p className="text-center text-gray-600 text-3xl mb-6">
        <strong>
          22<sup></sup> - 23<sup></sup> Oct 2026
        </strong>
      </p>

      {data.event.description.map((desc, idx) => (
        <p
          key={idx}
          className="mb-6 text-lg leading-relaxed text-center w-full min-w-5xl px:2 md:px-12 lg:px-24"
        >
          {desc}
        </p>
      ))}

      {/* Join Section */}
      <section className="mb-10 text-center w-full min-w-4xl px-2 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-one mb-4 w-full">
          Join the Global Community at on CELLGENE-2026
        </h2>
        {data.join.map((para, idx) => (
          <p
            key={idx}
            className="mb-6 text-lg leading-relaxed text-center w-full min-w-5xl px:2 md:px-12 lg:px-24"
          >
            {para.text} <Link to={para.link}>{para.linkText}</Link>
            {para.suffix}
          </p>
        ))}
      </section>

      {/* Themes Section */}
      <section className="mb-16 text-center w-full px-12">
        <h2 className="text-4xl my-8 font-bold text-one">Who Can Attend...</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow px-4 py-6 flex flex-col items-center hover:shadow-lg transition">
            <User className="h-10 w-10 text-one mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
  Cell & Gene Therapy Scientists and Researchers
            </h3>
          </div>
          <div className="bg-white rounded-xl shadow px-4 py-6 flex flex-col items-center hover:shadow-lg transition">
            <BookOpen className="h-10 w-10 text-one mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
 Biopharma Manufacturing and Process Development Leaders
            </h3>
          </div>
          <div className="bg-white rounded-xl shadow px-4 py-6 flex flex-col items-center hover:shadow-lg transition">
            <Rocket className="h-10 w-10 text-one mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
CDMOs and Technology Solution Providers
            </h3>
          </div>
          <div className="bg-white rounded-xl shadow px-4 py-6 flex flex-col items-center hover:shadow-lg transition">
            <PackageSearch className="h-10 w-10 text-one mb-3" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
Quality, Regulatory, and Compliance Professionals
            </h3>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="mb-16 text-center w-full px-12">
        <h2 className="text-4xl font-bold text-one mb-8">Event Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full items-start">
          {data.highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 text-md text-gray-800 text-left flex items-start shadow-sm "
            >
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-3 mt-1" />
              <div className="flex flex-wrap items-start">
                <h3 className="font-semibold whitespace-nowrap mr-1">
                  {highlight.title} –
                </h3>
                <p className="text-md text-gray-600 flex-1">
                  {highlight.link ? (
                    <>
                      {highlight.description}{" "}
                      <Link to={highlight.link} className>
                        {highlight.linkText}
                      </Link>
                    </>
                  ) : (
                    highlight.description
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dates Section */}
      {/* <section className="mb-16 text-center w-full md:px-12 px-4">
        <h2 className="text-4xl font-bold text-one mb-8">
          Important Dates
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full text-sm">
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Calendar className="w-6 h-6 text-one mb-2" />
            <strong>Event Date</strong>
            <p>{data.dates.eventDate}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Globe className="w-6 h-6 text-one mb-2" />
            <strong>Proposed Venue</strong>
            <p>{data.dates.venue}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <BadgeCheck className="w-6 h-6 text-one mb-2" />
            <strong>Registration Deadline</strong>
            <p>{data.dates.registrationDeadline}</p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutPublicHealth;
