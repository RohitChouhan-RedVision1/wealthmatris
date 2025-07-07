"use client"
import { useState } from "react";
import { MinusIcon, PlusIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

// FAQ Component
export function FAQ() {
 const faqs = [
    {
      question: "Why should I choose your firm to manage my investments?",
      answer:
        "We don’t just recommend products—we build portfolios aligned with your life goals. With a research-driven approach, personalized advice, and no direct fees, we ensure your wealth works harder for you.",
    },
    {
      question: "Is my money safe if I invest through your platform?",
      answer:
        "Absolutely. Your investments are held with SEBI-registered mutual funds, PMS, and AIF providers. We don’t handle your money directly—our role is to guide, not control.",
    },
    {
      question: "Do I have to pay anything to get started?",
      answer:
        "No. We don’t charge you any upfront or advisory fees. We’re compensated by AMCs via trail commissions, which means you get expert support at no extra cost.",
    },
    {
      question: "What kind of investors do you work with?",
      answer:
        "Whether you're just starting your investment journey or managing a multi-crore portfolio, we tailor our strategies to fit your goals, risk appetite, and time horizon.",
    },
    {
      question: "Will I get regular updates and personal support?",
      answer:
        "Yes! We provide timely portfolio reviews, performance insights, and are always a call away for questions or changes. You’ll never feel lost in the process.",
    },
    // {
    //   question: "I’ve already invested elsewhere. Can you still help?",
    //   answer:
    //     "Of course. We offer portfolio reviews and restructuring to eliminate overlaps, reduce costs, and improve returns—without disturbing what’s already working for you.",
    // },
    // {
    //   question: "Can I track everything online?",
    //   answer:
    //     "Yes, you’ll have secure access to a smart dashboard where you can track your investments, returns, and portfolio health anytime, anywhere.",
    // },
    // {
    //   question: "What returns can I expect?",
    //   answer:
    //     "Returns depend on your investment horizon and risk profile. We don’t promise fixed returns, but we focus on consistency, quality, and risk-managed growth—just like we do for ourselves.",
    // },
    // {
    //   question: "How do I start investing with your firm?",
    //   answer:
    //     "Getting started is simple. Book a free consultation, share your financial goals, and we’ll build a personalized investment plan—no obligations, no pressure.",
    // },
    // {
    //   question: "I'm an NRI. Can I invest through your firm?",
    //   answer:
    //     "Yes, absolutely! We work with several NRI clients across the globe. Whether you want to invest in mutual funds, PMS, or other instruments, we guide you through every step—right from documentation to repatriation options—ensuring full regulatory compliance.",
    // },
    // {
    //   question: "Will you help me with tax planning for my investments?",
    //   answer:
    //     "Definitely. Tax efficiency is a key part. We help you choose investments that align with your financial goals and optimize your tax outgo—whether it's using ELSS for Section 80C, understanding capital gains, or managing TDS for NRIs.",
    // },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-white main_section text-center items-center">
      <h2 className="topheading  text-[var(--rv-primary)] ">FAQ</h2>
      <h2 className="subheading  text-[var(--rv-primary)] mb-4">Frequently Asked Questions</h2>
      <div className="em_bar mx-auto">
            <div className="em_bar_bg" />
          </div>
      <div className="max-w-4xl mx-auto text-left flex flex-col lg:flex-row items-center gap-6 mt-10">
        {/* <Image src="/74f944349f.png" alt="FAQ" width={300} height={200} className="rounded-lg shadow-md" /> */}
        <div className="w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-2 border rounded-md overflow-hidden">
              <Button
                className="w-full flex justify-between text-left p-4 bg-white whitespace-normal"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-[16px] md:text-xl font-bold text-[var(--rv-primary)] line-clamp-3">{faq.question}</span>
                {openIndex === index ? <MinusIcon className="w-5 h-5 text-[var(--rv-primary)]" /> : <PlusIcon className="w-5 h-5 text-[var(--rv-primary)]" />}
              </Button>
              {openIndex === index && (
                <div className="p-4 bg-gray-50 border-t">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
