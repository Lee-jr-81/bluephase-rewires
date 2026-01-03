import Image from "next/image";
import Button from "./Button";
import FrontRoom from "../public/frontroom2.png";

export default function HeroSection() {
  return (
    <section className="min-h-[85vh] pt-24 md:pt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto w-11/12 gap-20 items-center">
        {/* Copy */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-darkAccent leading-tight">
            A Stress-Free House Rewire,
            <span className="text-mediumAccent"> By Rewire Specialists</span>
          </h1>

          <p className="text-lg md:text-xl mt-6 text-darkAccent max-w-xl">
            We plan and deliver full house rewires across the West Midlands with
            minimal disruption and a result you can rely on for decades.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md">
            <Button
              name="Give Us a Call"
              bg="bg-mediumAccent"
              textColour="text-white"
              href="tel:+447580030305"
            />

            <Button
              name="WhatsApp Us"
              bg="bg-transparent"
              textColour="text-mediumAccent"
              border="border-2 border-[currentColor]"
              href="https://wa.me/447XXXXXXXXX"
            />
          </div>

          {/* Authority-based proof */}
          <div className="hidden md:flex md:flex-wrap md:gap-6 text-sm font-semibold mt-12 text-darkAccent">
            <span>✔ 24+ Years Experience</span>
            <span>✔ West Midlands Based</span>
            <span>✔ Rewire Specialists</span>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-[300px] md:h-[500px] lg:h-[500px] rounded-xl overflow-hidden">
          <Image
            src={FrontRoom}
            alt="modern home interior"
            fill
            placeholder="blur"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
