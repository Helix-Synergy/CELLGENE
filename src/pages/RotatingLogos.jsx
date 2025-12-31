import React, { useEffect, useState } from "react";
import { Sparkle } from "lucide-react";
import { Link } from "react-router-dom";
// Images for agri
import img1 from "../assets/tracks/img1.jpg";
import img2 from "../assets/tracks/img2.jpg"
import img3  from "../assets/tracks/img3.jpg";
import img4 from "../assets/tracks/img4.jpg";
import img5 from "../assets/tracks/img5.jpg";
import img6 from "../assets/tracks/img6.jpg"
import img7 from "../assets/tracks/img7.jpg";
import img8 from "../assets/tracks/img8.jpg"
import img9 from "../assets/tracks/img9.avif";
import img10 from "../assets/tracks/img10.jpeg"
import img11 from "../assets/tracks/img11.jpeg";
import img12 from "../assets/tracks/img12.webp"
import img13 from "../assets/tracks/img13.avif";
import img14 from "../assets/tracks/img14.jpg"
import img15 from "../assets/tracks/img15.jpg";
import img16 from "../assets/tracks/img16.jpg"
import img17 from "../assets/tracks/img17.jpg"
import img18 from "../assets/tracks/img18.jpg";
import img19 from "../assets/tracks/img19.jpg"
import img20 from "../assets/tracks/img20.jpg"

export const tracks = [
  {
    image: img1,
    title: "Tumor Immunology",
    description: (
      <>
 {" "}
        <Link
          to= "/cellgene-orators"
          className="
             hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
    Tumor Immunology 
        </Link>  explores the complex interactions between cancer cells and the immune system. It focuses on immune evasion mechanisms, tumor microenvironment dynamics, biomarkers, and immunotherapeutic strategies such as checkpoint inhibitors and CAR-T cells, enabling the development of targeted and durable cancer treatments.
   
      </>
    ),
  },

  {
    image: img2,
    title: "AI in Manufacturing",
    description: (
      <>
{" "}
        <Link
          to="/cellgene-event-schedule"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   AI in Manufacturing 
        </Link>{" "}leverages machine learning, automation, and data analytics to optimize production efficiency, quality control, and predictive maintenance. In life sciences manufacturing, AI enables real-time process monitoring, yield improvement, risk reduction, and intelligent decision-making, accelerating scalable and cost-effective therapeutic production.
      </>
    ),
  },

  {
    image: img3,
    title: "Pharmacovigilance",
    description: (
      <>
{" "}
        <Link
          to="/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Pharmacovigilance
        </Link>  focuses on the detection, assessment, and prevention of adverse drug reactions throughout a product’s lifecycle. It integrates real-world evidence, post-marketing surveillance, AI-driven safety analytics, and regulatory compliance to ensure patient safety, risk management, and benefit-risk optimization of therapies.
      </>
    ),
  },

  {
    image: img4,
    title: "Biotechnology",
    description: (
      <>
{" "}
        <Link
          to= "/event_partners" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        > 
        Biotechnology
        </Link>{" "} applies biological systems, organisms, and molecular processes to develop innovative healthcare, agricultural, and industrial solutions. It underpins advances in biologics, gene therapies, diagnostics, vaccines, and bio-manufacturing, enabling precision medicine, sustainable production, and next-generation therapeutic development.

      </>
    ),
  },

  {
    image: img5 ,
    title: "Stem Cell",
    description: (
      <>
{" "}
        <Link
          to="/contact"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Stem Cell 
        </Link>{" "} science investigates pluripotent and multipotent cells capable of self-renewal and differentiation. It plays a critical role in regenerative medicine, disease modeling, and drug discovery, offering transformative potential for tissue repair, cell replacement therapies, and personalized treatment strategies.
   
      </>
    ),
  },

  {
    image: img6,
    title: "Advanced Therapies",
    description: (
      <>

        <Link
          to= "/" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Advanced Therapies
        </Link>{" "}  include cell therapies, gene therapies, and tissue-engineered products designed to treat complex and previously incurable diseases. These therapies require innovative manufacturing, regulatory frameworks, and delivery systems to ensure safety, scalability, and global patient access.
     
      </>
    ),
  },

  {
    image: img7,
    title: "Tissue Engineering",
    description: (
      <>
{" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
    Tissue Engineering
        </Link>{" "} combines biology, engineering, and material science to create functional tissues for repair or replacement. It enables the development of scaffolds, biomaterials, and cell-based constructs that support regenerative medicine, organ repair, and advanced therapeutic applications.
      </>
    ),
  },

  {
    image:  img8,
    title: "Bioprocessing",
    description: (
      <>
  {" "}
        <Link
          to="/" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Bioprocessing
        </Link>{" "}  encompasses the design, optimization, and control of biological manufacturing processes. It supports the production of biologics, vaccines, and cell therapies through upstream and downstream operations, automation, and GMP compliance, ensuring product quality, consistency, and scalable manufacturing.
      
      </>
    ),
  },

  {
    image: img9,
    title: "Vector Manufacturing",
    description: (
      <>
{" "}
        <Link
          to="/about-cellgene"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Vector Manufacturing  
        </Link>{" "} focuses on the production of viral and non-viral vectors used in gene and cell therapies. It addresses challenges in scalability, purity, yield, and regulatory compliance, enabling reliable delivery of genetic material for therapeutic and clinical applications.

      </>
    ),
  },

  {
    image: img10,
    title: "Microbial Infections",
    description: (
      <>
{" "}
        <Link
          to= "/cellgene-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Microbial Infections
        </Link>{" "}  research examines bacterial, viral, fungal, and parasitic pathogens affecting human health. It supports the development of diagnostics, vaccines, antimicrobials, and resistance mitigation strategies, strengthening global preparedness against emerging and drug-resistant infectious diseases.
      </>
    ),
  },

  {
    image: img11,
    title: "Drug Discovery",
    description: (
      <>
     {" "}
        <Link
          to="/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Drug Discovery
        </Link>  integrates biology, chemistry, AI, and translational science to identify and develop novel therapeutic candidates. It involves target identification, lead optimization, preclinical validation, and predictive modeling, accelerating innovation while reducing cost, risk, and development timelines.
      </>

    ),
  },

  {
    image: img12,
    title: "Metabolic Disorders",
    description: (
      <>
 {" "}
        <Link
          to="/" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Metabolic Disorders
        </Link>{" "}  research focuses on diseases such as diabetes, obesity, and lipid abnormalities. It explores genetic, molecular, and lifestyle factors influencing metabolism, enabling the development of targeted therapies, biomarkers, and preventive strategies for chronic metabolic conditions.
      
      </>
    ),
  },

  {
    image: img13,
    title: "New Frontier of Cell Therapy",
    description: (
      <>
The {" "}
        <Link
          to="/cellgene-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
      New Frontier of Cell Therapy
        </Link> explores next-generation platforms including allogeneic cells, gene-edited products, and off-the-shelf therapies. Advances in engineering, manufacturing, and delivery are expanding therapeutic indications while improving safety, accessibility, and commercial viability.

        
      </>
    ),
  },

  {
    image:img14,
    title: "Clinical Pharmacology",
    description: (
      <>
 {" "}
        <Link
          to="/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
 Clinical Pharmacology 
        </Link> studies how drugs interact with the human body, focusing on pharmacokinetics, pharmacodynamics, dose optimization, and safety. It bridges laboratory research and clinical practice, supporting rational drug development, personalized medicine, and regulatory decision-making.
        
      </>
    ),
  },

  {
    image: img15,
    title: "Molecular Biology",
    description: (
      <>
      {" "}
        <Link
          to=  "/about-cellgene" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
  Molecular Biology  
        </Link> investigates the structure and function of DNA, RNA, and proteins that govern cellular processes. It provides foundational insights for biotechnology, genomics, diagnostics, and therapeutic development, enabling precision interventions at the molecular and genetic levels.
      </>
    ),
  },

  {
    image: img16,
    title: "Regenerative Medicine",
    description: (
      <>
{" "}
        <Link
          to=  "/cellgene-orators" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
    Regenerative Medicine
        </Link>  aims to restore or replace damaged tissues and organs using cells, genes, and biomaterials. It integrates stem cells, tissue engineering, and gene therapy to develop curative treatments for degenerative diseases, injuries, and age-related conditions
</>
    ),
  },

  {
    image:img17,
    title: "Genome Stability & DNA",
    description: (
      <>
 {" "}
        <Link
          to="/contact"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Genome Stability & DNA 
        </Link>  research examines mechanisms that preserve genetic integrity, including DNA repair and replication fidelity. Understanding genome stability is critical for preventing cancer, genetic disorders, and therapy-related risks in gene editing and advanced therapeutic development.
      </>
    ),
  },
// Ethical

  {
    image: img18,
    title: "Regenerative Science",
    description: (
      <>
   {" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Regenerative Science
        </Link> focuses on understanding biological repair, renewal, and regeneration processes. It drives innovation in cell-based therapies, biomaterials, and developmental biology, supporting long-term solutions for tissue repair, organ regeneration, and chronic disease management.

      </>
    ),
  },
  // Microbiome Engineering
  
  {
    image: img19,
    title: "RNA Therapeutics",
    description: (
      <>
 {" "}
        <Link
          to="/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
RNA Therapeutics
        </Link>  leverage mRNA, siRNA, and antisense technologies to regulate gene expression. This rapidly evolving field enables precise, scalable, and adaptable treatments for genetic diseases, cancer, and infectious diseases, transforming the future of personalized and responsive medicine.
      </>
    ),
  },
  {
    image:img20,
    title: "3D Genomics",
    description: (
      <>
{" "}
        <Link
          to="/about-cellgene"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
          3D Genomics
</Link>{" "}  explores the three-dimensional organization of the genome to understand how chromatin structure influences gene regulation and cellular function. By mapping spatial DNA interactions, this field enables deeper insights into disease mechanisms, gene expression control, and therapeutic target discovery, advancing precision medicine and next-generation genomic research.
       
      </>
    ),
  },
];

const StaticTracks = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <style>{`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 0px rgba(44, 211, 35, 0.2);
          }
          50% {
            box-shadow: 0 0 18px 6px rgb(122,179,38);
          }
        }

        .animate-pulseShadow {
          animation: pulseShadow 3s ease-in-out infinite;
        }

        .transition-custom {
          transition: all 0.8s ease-in-out;
        }
      `}</style> */}

      <div className="relative mt-14">
        {/* Fixed Top-Right Button */}
        <div className="fixed top-[22%] right-[1%] z-50 transition-custom">
          <a
            href="/abstract-submission"
            aria-label="Submit abstract"
            className="bg-one rounded-full text-white text-sm font-medium px-3 py-3 select-none transition-transform hover:scale-110 animate-pulseShadow"
          >
            Submit Abstract
          </a>
        </div>

        {/* Track Content */}
        <div className="container mx-auto px-4 py-10 space-y-20 flex flex-col items-center">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="relative w-[80%] flex flex-col md:flex-row items-stretch md:space-x-6"
            >
              <div className="flex-shrink-0 bg-white border shadow-xl rounded-2xl p-2 w-full md:w-1/3">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white border shadow-xl rounded-2xl p-6 w-full md:w-2/3 mt-12 md:mt-0 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-1 text-one flex items-center gap-2">
                  <Sparkle className="fill-one" />
                  {track.title}
                </h2>
                <h3 className="text-xl text-gray-600 font-semibold mb-3">
                  {track.subtitle}
                </h3>
                <p className="text-md text-gray-800 leading-relaxed">
                  {track.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StaticTracks;
