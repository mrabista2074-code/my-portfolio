// src/components/CVSlide.jsx
// Slide 2: Curriculum Vitae — photo+bio on left, details on right

import SlideHeader from "./SlideHeader";

function CVSlide({ isActive, hasBeenActive }) {
  return (
    <div className="slide bg-bg-primary">
      <SlideHeader
        left="Curriculum Vitae"
        center=""
        right="2026"
      />

      <div className="slide-content">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 px-4 sm:px-10 lg:px-16 py-4 sm:py-6 overflow-y-auto hide-scrollbar">

          {/* LEFT COLUMN: Photo + Bio */}
          <div className={`flex flex-col gap-4 sm:gap-6 ${hasBeenActive ? "animate-slide-left" : "opacity-0"}`}>
            {/* Profile Photo */}
            <div className="w-28 sm:w-40 lg:w-48 aspect-[3/4] overflow-hidden bg-bg-secondary border border-border-color/30">
              <img
                src="/images/profile2.jpg"
                alt="Aashish Bista portrait"
                className="w-full h-full object-cover object-[15%_center] scale-[1.4] origin-[15%_center]"
                loading="lazy"
              />
            </div>

            {/* Name */}
            <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-medium text-text-primary leading-tight">
              Aashish Bista
            </h2>

            {/* Objective */}
            <div>
              <h3 className="font-serif text-base sm:text-lg font-semibold text-text-primary mb-2">Objective</h3>
              <div className="space-y-4 text-xs sm:text-sm text-text-secondary font-light leading-relaxed max-w-md">
                <p>
                  A creative and detail-oriented interior designer with a Bachelor's degree in Interior Design, dedicated to translating conceptual knowledge into practical, elegant solutions. Skilled in AutoCAD, SketchUp, V-Ray, Enscape, and Blender, with a passion for creating functional and aesthetically pleasing spaces that tell a unique story. Committed to continuous innovation and delivering high-quality, deeply personal design environments.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact, Experience, Skills, Education */}
          <div className={`flex flex-col gap-5 sm:gap-7 ${hasBeenActive ? "animate-slide-right animation-delay-200" : "opacity-0"}`}>

            {/* Contact */}
            <div>
              <h3 className="font-serif text-base sm:text-lg font-semibold text-text-primary mb-2">Contact</h3>
              <div className="space-y-0.5 text-xs sm:text-sm text-text-secondary font-light">
                <p>Kalopul, Kathmandu, Nepal</p>
                <p>aashishbista2001@gmail.com</p>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="font-serif text-base sm:text-lg font-semibold text-text-primary mb-2">Experience</h3>
              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-text-secondary font-light">
                <div>
                  <p className="font-medium text-text-primary">Junior Designer</p>
                  <p>NEST FURNITURE | Industrial Estate, Lalitpur</p>
                  <p className="text-xs italic">December, 2024 – ongoing</p>
                </div>
                <div>
                  <p className="font-medium text-text-primary">Site Supervisor and Head Designer</p>
                  <p>Yes Nepal Interior | Jadibuti, Kathmandu</p>
                  <p className="text-xs italic">July, 2024 – November, 2024</p>
                </div>
                <div>
                  <p className="font-medium text-text-primary">Site Supervisor</p>
                  <p>Max Worth Innovation Nepal | Baneshwor, Kathmandu</p>
                  <p className="text-xs italic">January, 2021 – July, 2021</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="font-serif text-base sm:text-lg font-semibold text-text-primary mb-2">Technical Skills</h3>
              <ul className="space-y-1 text-xs sm:text-sm text-text-secondary font-light list-disc list-inside">
                <li>AutoCAD, Sketchup, V-ray, Enscape, Blender</li>
                <li>Microsoft Office Suite (Word, Excel, PowerPoint)</li>
                <li>Space Planning and Layout Design</li>
                <li>Material Selection and Specification</li>
              </ul>
            </div>

            {/* Education */}
            <div>
              <h3 className="font-serif text-base sm:text-lg font-semibold text-text-primary mb-2">Education</h3>
              <div className="text-xs sm:text-sm text-text-secondary font-light space-y-1">
                <p className="font-medium text-text-primary">Bachelor in Interior Design</p>
                <p>Kantipur International College, Buddhanagar</p>
                <p>Purbanchal University</p>
                <p className="text-xs italic">2020 – 2026</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default CVSlide;
