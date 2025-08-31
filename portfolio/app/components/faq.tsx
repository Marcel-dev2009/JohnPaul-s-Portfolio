"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is Thinker’s base studio about ?",
    answer:
      "Thinkers Film Studio is a dynamic film production company and online platform dedicated to creating and sharing high-quality, educational, and inspirational content for diverse audiences, with a focus on family-friendly and children’s content. Our mission is to educate, inspire, and promote positive values through engaging storytelling.",
  },
  {
    question: "What services do Thinker’s base studio offer ?",
    answer:
      "A media company focusing on kids’ educational and entertaining content, family films, educational series, inspirational stories, distribution on digital platforms, workshops, collaborations, and animation.",
  },
  {
    question: "Do Thinker’s base studio collaborate",
    answer:
      "Thinker’s base studio DO COLLABORATE WITH OTHER FILM PRODUCTION STUDIOS",
  },
  {
    question: "What are their potential collaborative projects",
    answer: `1. Family-Friendly Films: JP Films and Thinkers Base could co-produce films suitable for all ages. 
2. Educational Content: Collaborating on documentaries or series promoting cultural understanding. 
3. Youth Development Programs: Joint initiatives for training young filmmakers.`,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0f172a] text-white px-6 py-16 m-6 rounded-lg border dark:border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Everything You Need to Know
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left text-lg font-medium hover:bg-[#334155] transition"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-blue-400" />
                ) : (
                  <Plus className="w-5 h-5 text-blue-400" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-4 text-gray-300 text-base leading-relaxed"
                  >
                    {faq.answer.split("\n").map((line, i) => (
                      <p key={i} className="mb-2">
                        {line}
                      </p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
