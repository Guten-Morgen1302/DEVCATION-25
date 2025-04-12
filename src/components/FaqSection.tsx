'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FaQuestionCircle } from 'react-icons/fa';

const faqs = [
  {
    question: 'Who can contribute?',
    answer: 'Devcation is open to anyone with an interest in technology, innovation, and problem-solving. Participants can include students, developers, designers, entrepreneurs, and professionals from various backgrounds.'
  },
  {
    question: 'Where can we reach out in case of queries?',
    answer: 'You can reach out to us on our Discord Server with any queries. Kindly use the doubt channel for the same!'
  },
  {
    question: 'Do I need to have coding experience to participate?',
    answer: 'While coding experience is beneficial, it\'s not always necessary to participate in a hackathon. Many hackathons welcome participants with diverse skill sets, including design, business development, marketing, and project management. If you\'re a beginner you can also look at our mini events.'
  },
  {
    question: 'What happens after the hackathon ends?',
    answer: 'After the hackathon concludes, top 10 teams will be invited to present their projects to judges and fellow participants during the final pitching round at IGDTUW. Winners will be announced, and prizes awarded based on the judging criteria. Date for this is 15th April, 2025.'
  },
  {
    question: 'How can I stay updated on hackathon announcements and events?',
    answer: 'Stay informed about Devcation\'25 by joining our Discord Server. Know more about upcoming hackathons and events by GDG IGDTUW by joining our GDG Chapter.'
  },
];

// Custom styled accordion component
function CyberpunkAccordionItem({
  faq,
  index
}: {
  faq: { question: string; answer: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <AccordionItem
        value={`item-${index}`}
        className="border border-gray-800 mb-4 rounded-lg overflow-hidden group backdrop-blur-gradient"
      >
        <AccordionTrigger className="px-6 py-4 text-white hover:text-neon-cyan hover:no-underline data-[state=open]:text-neon-cyan font-orbitron font-medium text-left flex gap-4 items-center group">
          <span className="flex-1 text-left">
            {faq.question}
          </span>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-neon-cyan/20 opacity-0 group-hover:opacity-100 data-[state=open]:opacity-100 blur-md transition-opacity"></div>
            <FaQuestionCircle className="text-gray-400 group-hover:text-neon-cyan data-[state=open]:text-neon-cyan transition-colors" />
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-4 text-gray-400 data-[state=open]:animate-accordion-down relative overflow-hidden">
          {/* Animated side line when open */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent"></div>
          <p className="pl-4">{faq.answer}</p>
        </AccordionContent>
      </AccordionItem>
    </motion.div>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgc3Ryb2tlPSIjMjIyIiBzdHJva2Utd2lkdGg9IjAuMjUiIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-10 z-0"></div>

      {/* Glowing spots */}
      <div className="absolute top-1/3 -left-20 w-40 h-40 rounded-full bg-neon-purple/10 filter blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-40 h-40 rounded-full bg-neon-cyan/10 filter blur-3xl"></div>

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-orbitron font-bold mb-4">
            <span className="text-neon-purple neon-text-pink">Frequently Asked Questions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Get answers to common questions about Devcation'25
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <CyberpunkAccordionItem key={index} faq={faq} index={index} />
            ))}
          </Accordion>

          {/* Additional help options */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-gray-400 mb-4">Still have questions?</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="https://discord.gg/eG4YP3gA48"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-black/40 border border-neon-cyan text-neon-cyan rounded-md backdrop-blur-sm hover:bg-neon-cyan/10 transition-colors"
                whileHover={{ y: -5 }}
              >
                Join Discord
              </motion.a>
              <motion.a
                href="https://chat.whatsapp.com/KIlPsKeZZdo7KhKtilL8AT"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-black/40 border border-neon-purple text-neon-purple rounded-md backdrop-blur-sm hover:bg-neon-purple/10 transition-colors"
                whileHover={{ y: -5 }}
              >
                Join WhatsApp
              </motion.a>
              <motion.a
                href="https://gdsc.community.dev/indira-gandhi-delhi-technical-university-for-women-delhi/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-black/40 border border-neon-pink text-neon-pink rounded-md backdrop-blur-sm hover:bg-neon-pink/10 transition-colors"
                whileHover={{ y: -5 }}
              >
                Join GDG Chapter
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
