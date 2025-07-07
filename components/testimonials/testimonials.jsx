"use client";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

export default function Testimonials({ testimonials }) {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const sliderRef = useRef(null);
  const isStatic = testimonials.length <= 3;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-white">
      <div className="max-w-screen-xl main_section mx-auto relative">
        {/* Headings */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          custom={0}
          className="topheading text-[var(--rv-primary)] text-center"
        >
          TESTIMONIALS
        </motion.h2>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          custom={1}
          className="subheading text-[var(--rv-primary)] mb-4 text-center"
        >
          Clients Believe Us
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          custom={2}
          className="em_bar mx-auto"
        >
          <div className="em_bar_bg" />
        </motion.div>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          custom={3}
          className="text-lg text-black font-semibold mb-4 text-center"
        >
          Our clients share their journey of trust, growth, and financial clarity with us.
        </motion.p>

        {/* Testimonials */}
        <div className="relative">
          {!isStatic && (
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-[var(--rv-primary)] text-white p-3 rounded-full shadow-md"
            >
              ❮
            </button>
          )}

          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="p-6">
                <div className="bg-white h-[320px] rounded-lg p-6 shadow-md shadow-[#00000054] flex flex-col justify-between">
                  <div>
                    {testimonial?.content && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: testimonial.content,
                        }}
                        className="italic line-clamp-4 overflow-hidden mb-4"
                      />
                    )}
                    <button
                      className="text-sm font-semibold text-[var(--rv-primary)] underline"
                      onClick={() => setSelectedTestimonial(testimonial)}
                    >
                      Read More
                    </button>
                  </div>
                  <div className="mt-4">
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {!isStatic && (
            <button
              onClick={() => sliderRef.current.slickNext()}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-[var(--rv-primary)] text-white p-3 rounded-full shadow-md"
            >
              ❯
            </button>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedTestimonial && (
        <div className="fixed inset-0 bg-[var(--rv-primary)]/50 bg-opacity-10 flex items-center justify-center z-50">
          <div className="bg-white max-w-lg w-full p-6 rounded-lg shadow-lg relative">
            <button
              onClick={() => setSelectedTestimonial(null)}
              className="absolute top-2 right-4 text-2xl font-bold text-gray-600 hover:text-black"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold text-[var(--rv-primary)] mb-2">{selectedTestimonial.author}</h3>
            <p className="text-sm text-gray-500 mb-4">{selectedTestimonial.designation}</p>
            <div
              className="text-gray-800"
              dangerouslySetInnerHTML={{ __html: selectedTestimonial.content }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
