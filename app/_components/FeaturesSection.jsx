import { Check } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="mt-36">
      <div className="max-w-screen-lg mx-auto w-5/6">
        {/* Heading */}
        <div className="text-center max-w-screen-md mx-auto">
          <h2 className="text-3xl font-bold text-darkAccent">
            What’s Included in a Bluephase Rewire
          </h2>
          <p className="mt-4 text-md text-darkAccent">
            Everything is planned, installed, tested, and signed off properly —
            with no shortcuts.
          </p>
        </div>

        {/* Feature Table */}
        <div className="mt-16 border border-gray-200 rounded-xl overflow-hidden">
          {/* Row */}
          <div className="flex items-start gap-4 p-6 border-b border-gray-200">
            <Check className="text-mediumAccent mt-1" />
            <p className="text-lg text-darkAccent">
              Detailed circuit planning tailored to how you use your home
            </p>
          </div>

          <div className="flex items-start gap-4 p-6 border-b border-gray-200">
            <Check className="text-mediumAccent mt-1" />
            <p className="text-lg text-darkAccent">
              High-quality wiring, accessories, and protective devices
            </p>
          </div>

          <div className="flex items-start gap-4 p-6 border-b border-gray-200">
            <Check className="text-mediumAccent mt-1" />
            <p className="text-lg text-darkAccent">
              Modern power, lighting, and data infrastructure throughout
            </p>
          </div>

          <div className="flex items-start gap-4 p-6 border-b border-gray-200">
            <Check className="text-mediumAccent mt-1" />
            <p className="text-lg text-darkAccent">
              Fully tested installation in accordance with BS:7671
            </p>
          </div>

          <div className="flex items-start gap-4 p-6">
            <Check className="text-mediumAccent mt-1" />
            <p className="text-lg text-darkAccent">
              Certification and documentation provided on completion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
