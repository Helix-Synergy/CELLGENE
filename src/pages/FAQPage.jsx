import React, { useState } from "react";

const faqLinks = {
  tracks: "/cellgene-conference-tracks/",
  abstractSubmission: "/abstract-submission",
  schedule:"/cellgene-event-schedule",
  email: "mailto:hello@helixconferences.com",

};

export const faqData = [
  {
    question: "What is CELLGENE-2026?",
    answer:
      "CELLGENE-2026, officially titled the “Cell & Gene Therapy Manufacturing Summit”, is a premier international conference organized by Helix Conferences. The summit brings together global leaders in cell and gene therapy, biomanufacturing experts, researchers, technology providers, and regulatory professionals to advance scalable, compliant, and next-generation manufacturing solutions.",
  },
  {
    question: "When and where will CELLGENE-2026 take place?",
    answer:
      "CELLGENE-2026 will be held on October 22–23, 2026, in Singapore.",
  },
  {
    question: "What are the key highlights of CELLGENE-2026?",
    answer:
      "Keynote presentations by global cell and gene therapy leaders, advanced manufacturing workshops, regulatory and quality sessions, viral vector and cell processing tracks, technology showcases, panel discussions, and high-impact networking opportunities.",
  },
  {
    question: "What topics and tracks are covered at CELLGENE-2026?",
    answer: (
      <>
        Explore the complete list of summit tracks here:{" "}
        <a
          href={faqLinks.tracks}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          CELLGENE-2026 Tracks
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I present my research or explore sponsorship opportunities?",
    answer: (
      <>
        To present your research, showcase manufacturing technologies, or
        discuss sponsorship opportunities, please contact us at{" "}
        <a href={faqLinks.email} className="text-blue-600 underline">
          hello@helixconferences.com
        </a>
        .
      </>
    ),
  },
  {
    question: "How can I submit an abstract or proposal?",
    answer: (
      <>
        Abstract and presentation submissions can be made{" "}
        <a
          href={faqLinks.abstractSubmission}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "How will I receive my invoice?",
    answer:
      "Invoices will be sent to the registered email address after successful registration.",
  },
  {
    question: "What materials will participants receive?",
    answer:
      "Registered participants will receive a digital summit kit including the agenda, speaker profiles, session details, and exhibitor information.",
  },
  {
    question: "What is the duration of presentation slots?",
    answer:
      "Standard presentation slots are typically 15–20 minutes, including Q&A. Final presentation guidelines will be shared upon acceptance.",
  },
  {
    question: "Who should attend CELLGENE-2026?",
    answer:
      "Cell and gene therapy researchers, biomanufacturing professionals, process engineers, quality and regulatory experts, biotech and pharma leaders, CDMOs, technology providers, investors, startups, and academicians.",
  },
  {
    question: "How many participants are expected?",
    answer:
      "CELLGENE-2026 is expected to host 150+ international participants, including speakers, delegates, exhibitors, and sponsors.",
  },
  {
    question: "Can I submit multiple abstracts?",
    answer:
      "Yes, multiple abstract submissions are allowed if each submission represents a distinct topic or manufacturing solution.",
  },
  {
    question: "Are keynote and featured speaker slots available?",
    answer:
      "Yes, a limited number of keynote and featured speaker slots are available. Applicants may indicate their preference during submission.",
  },
  {
    question: "What is expected from speakers and exhibitors?",
    answer:
      "Speakers and exhibitors are expected to deliver technically robust, industry-relevant, and innovation-driven content while actively engaging with attendees.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "Yes, registration fees apply for attendees, speakers, and exhibitors. Pricing details are available under the “Buy A Ticket” section.",
  },
  {
    question: "How can I view the summit schedule?",
    answer: (
      <>
        The detailed schedule will be released soon. You can view it{" "}
        <a
          href={faqLinks.schedule}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          here
        </a>
        .
      </>
    ),
  },
  {
    question: "Can I view the agenda and speaker list before the event?",
    answer:
      "Yes, the complete agenda, confirmed speakers, and exhibitors will be announced ahead of the summit.",
  },
  {
    question: "Is early registration available?",
    answer:
      "Yes, early registration is available and recommended, as participation slots may be limited.",
  },
  {
    question: "How can I get assistance with travel or accommodation?",
    answer: (
      <>
        For travel and accommodation support, please contact{" "}
        <a href={faqLinks.email} className="text-blue-600 underline">
          hello@helixconferences.com
        </a>
        .
      </>
    ),
  },
];





const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-300 mb-4">
          <button
            className="w-full text-left py-4 px-2 font-medium text-lg flex justify-between items-center"
            onClick={() => toggle(index)}
          >
            {item.question}
            <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-700">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
