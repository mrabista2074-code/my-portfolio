// src/components/Testimonials.jsx
import { useState, useEffect } from "react";

function Testimonials() {
  const reviews = [
    {
      quote: "Aashish designed a home that feels like a deep breath. His careful curation of oak joinery, linen drapery, and natural light has brought a sense of absolute calm we didn't know our daily life was missing.",
      author: "Prerna Shrestha",
      project: "The Birchwood Residence",
    },
    {
      quote: "Working with Aashish was a masterclass in design discipline. Studio Noor is not just visually stunning—it engages the senses and completely relaxes our clients the minute they step through the door.",
      author: "Noor Wellness Team",
      project: "Studio Noor Project",
    },
    {
      quote: "Aashish brought local Nepali craftsmanship into a contemporary wabi-sabi setting in a way that feels organic and authentic. Our customers constantly remark on the slow warmth of the cafe.",
      author: "Maadhyam Collective",
      project: "Maadhyam Café",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto-play the testimonial slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto border-t border-border-color/30 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Quote Icon */}
        <span className="font-serif text-8xl text-accent-color/20 leading-none select-none block mb-6">
          “
        </span>

        {/* Dynamic Quote Text */}
        <div className="min-h-[180px] flex items-center justify-center">
          <blockquote className="font-serif italic font-light text-2xl md:text-3xl text-text-primary leading-relaxed transition-opacity duration-500 ease-in-out">
            {reviews[activeIndex].quote}
          </blockquote>
        </div>

        {/* Author Details */}
        <div className="mt-8 transition-opacity duration-500">
          <cite className="not-italic font-serif text-lg text-text-primary block font-medium">
            {reviews[activeIndex].author}
          </cite>
          <span className="text-xs uppercase tracking-[0.2em] text-accent-color mt-1 block">
            {reviews[activeIndex].project}
          </span>
        </div>

        {/* Slider Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="p-3 border border-border-color/40 text-text-secondary hover:text-text-primary hover:border-text-primary transition-all duration-300 rounded-full focus:outline-none"
            aria-label="Previous review"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="flex gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-[4px] rounded-full transition-all duration-500 focus:outline-none ${
                  activeIndex === idx ? "w-8 bg-accent-color" : "w-2 bg-border-color"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="p-3 border border-border-color/40 text-text-secondary hover:text-text-primary hover:border-text-primary transition-all duration-300 rounded-full focus:outline-none"
            aria-label="Next review"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
