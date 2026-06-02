// src/components/Contact.jsx
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const handleInputChange = (field, val) => {
    setFormData(prev => ({ ...prev, [field]: val }));
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto border-t border-border-color/30 transition-colors duration-300">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-border-color/60 pb-8 mb-16">
        <div>
          <span className="text-xs tracking-[0.2em] uppercase text-accent-color font-medium mb-3 block">
            Collaborate
          </span>
          <h2 className="font-serif font-light text-4xl md:text-5xl text-text-primary">
            Start a Project
          </h2>
        </div>
      </div>

      {/* Two Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Direct coordinates and info */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full min-h-[300px]">
          <div>
            <h3 className="font-serif text-3xl font-light text-text-primary leading-snug mb-6">
              Let's create something beautiful together.
            </h3>
            <p className="text-text-secondary font-light text-sm leading-relaxed max-w-sm mb-10">
              Whether you're looking to design a residential home, wellness space, or hospitality concept, I'm always open to new collaborations.
            </p>
          </div>

          <div className="space-y-6">
            {/* Email Contact */}
            <div>
              <span className="text-[9px] uppercase tracking-widest text-text-secondary block mb-1">Direct Inquiries</span>
              <a 
                href="mailto:aashishbista2001@gmail.com" 
                className="font-serif text-xl text-text-primary hover:text-accent-color transition-colors duration-300"
              >
                aashishbista2001@gmail.com
              </a>
            </div>

            {/* Studio Coordinates */}
            <div>
              <span className="text-[9px] uppercase tracking-widest text-text-secondary block mb-1">Based In</span>
              <span className="font-serif text-base text-text-primary block font-medium">Jhamsikhel, Lalitpur</span>
              <span className="text-xs text-text-secondary block mt-0.5">Nepal</span>
            </div>

            {/* Social handles */}
            <div>
              <span className="text-[9px] uppercase tracking-widest text-text-secondary block mb-2">Connect</span>
              <div className="flex gap-6">
                <a href="https://www.linkedin.com/in/aashish-bista2001/" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors underline-hover">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact form box with status simulation */}
        <div className="lg:col-span-7 bg-bg-secondary/40 border border-border-color/40 p-8 md:p-10 relative">
          
          {submitted ? (
            // Success response box
            <div className="py-12 px-4 text-center animate-fade-in">
              <span className="font-serif text-6xl text-accent-color leading-none block mb-6">✓</span>
              <h4 className="font-serif text-3xl font-light text-text-primary mb-3">Message Received</h4>
              <p className="text-text-secondary font-light text-sm max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out. I've received your ideas and will contact you within 24 hours to schedule a consultation.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-xs tracking-widest uppercase text-accent-color hover:text-text-primary font-medium"
              >
                Send another message
              </button>
            </div>
          ) : (
            // The Form
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Name Field */}
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-text-secondary mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="e.g. Robin Shrestha"
                  className="w-full bg-transparent border-b border-border-color/85 pb-2 text-text-primary placeholder:text-text-secondary/40 outline-none focus:border-accent-color transition-colors"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-text-secondary mb-2 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="e.g. robin@gmail.com"
                  className="w-full bg-transparent border-b border-border-color/85 pb-2 text-text-primary placeholder:text-text-secondary/40 outline-none focus:border-accent-color transition-colors"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-text-secondary mb-2 font-medium">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell me about your space, layout goals, or concept ideas..."
                  className="w-full bg-transparent border-b border-border-color/85 pb-2 text-text-primary placeholder:text-text-secondary/40 outline-none focus:border-accent-color transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full md:w-auto bg-text-primary text-bg-primary text-xs tracking-widest uppercase px-10 py-4 hover:bg-accent-color transition-colors duration-500 rounded-none focus:outline-none"
              >
                Send Message
              </button>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}

export default Contact;