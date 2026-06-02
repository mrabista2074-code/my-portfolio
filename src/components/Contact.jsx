// src/components/Contact.jsx
// The contact form section (UI only - no backend needed)

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
      
      {/* Section label */}
      <p className="text-xs tracking-widest uppercase text-muted pb-4 border-b border-border mb-12">
        Get in Touch
      </p>

      <div className="max-w-lg">
        
        {/* Your email displayed prominently */}
        <p className="font-serif text-2xl text-gray-900 mb-10">
          aashishbista2001@gmail.com
        </p>

        {/* Contact form */}
        {/* Note: This is just the UI. To make it actually send emails,
            you can later use a free service like Formspree.io */}
        <form className="space-y-8">
          
          {/* Name field */}
          <div>
            <label className="block text-xs tracking-widest uppercase text-muted mb-2">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-transparent border-b border-border pb-2 text-gray-900 placeholder:text-gray-300 outline-none focus:border-gray-900 transition-colors"
            />
          </div>

          {/* Email field */}
          <div>
            <label className="block text-xs tracking-widest uppercase text-muted mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-transparent border-b border-border pb-2 text-gray-900 placeholder:text-gray-300 outline-none focus:border-gray-900 transition-colors"
            />
          </div>

          {/* Message field */}
          <div>
            <label className="block text-xs tracking-widest uppercase text-muted mb-2">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Tell me about your space, design goals, or project ideas..."
              className="w-full bg-transparent border-b border-border pb-2 text-gray-900 placeholder:text-gray-300 outline-none focus:border-gray-900 transition-colors resize-none"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-gray-900 text-cream text-xs tracking-widest uppercase px-10 py-3 hover:opacity-75 transition-opacity"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;