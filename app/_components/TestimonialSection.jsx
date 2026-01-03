import Image from "next/image";
import { Star } from "lucide-react";
import Review from "../public/review_icon_teal.png";
import AccentLine from "./AccentLine";

export default function TestimonialSection() {
  return (
    <section className="mt-36">
      {/* Section title */}
      <div className="max-w-screen-lg mx-auto w-5/6 mb-16">
        <h2 className="text-3xl font-bold text-darkAccent text-left">
          What Our Clients say
        </h2>
        <AccentLine />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 max-w-screen-md mx-auto w-5/6 items-center">
        {/* Image */}
        <div className="rounded-xl overflow-hidden">
          <Image
            src={Review}
            alt="Client review illustration"
            placeholder="blur"
            className="object-cover"
          />
        </div>

        {/* Testimonial */}
        <div>
          <p className="text-lg md:text-xl text-darkAccent font-medium leading-relaxed">
            &quot; Lee was professional, prompt, took the time to explain what
            needed to be done and was competitively priced. Excellent service
            all round would highly recommend.&quot;.
          </p>

          {/* Stars + Name */}
          <div className="mt-8">
            <div className="flex gap-1 text-mediumAccent">
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
            </div>

            <p className="mt-2 font-semibold text-darkAccent">
              Sian Thompson, Homeowner
            </p>
          </div>
        </div>
      </div>

      {/* Soft social proof fallback */}
      <div className="text-center mt-16 text-sm text-darkAccent opacity-80 m-10">
        Most of our work comes from referrals and repeat clients.
      </div>
    </section>
  );
}
