import Image from "next/image";
import Room from "@/app/public/frontroom.png";
import Avatar from "@/app/public/avatar_purple.png";

import CTASection from "@/app/_components/CTASection";
import AccentLine from "@/app/_components/AccentLine";

export default function AboutPage() {
  return (
    <main>
      {/* Intro */}
      <section className="pt-32 pb-24">
        <div className="max-w-screen-md mx-auto w-5/6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-mediumAccent">
            About Bluephase Rewires
          </h1>

          <p className="mt-6 text-lg md:text-xl text-darkAccent">
            Bluephase Rewires was created to offer a more considered approach to
            domestic electrical work — one that puts planning, communication,
            and long-term reliability first.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-screen-lg mx-auto w-5/6 items-start">
          {/* Image */}
          <div className="max-w-md">
            {/* Main image */}
            <div className="aspect-square rounded-xl overflow-hidden">
              <Image
                src={Room}
                alt="Lee carrying out electrical work"
                placeholder="blur"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Owner attribution */}
            <div className="flex items-center gap-4 mt-10">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={Avatar} // your headshot image
                  alt="Lee, Owner of Bluephase Rewires"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="leading-tight">
                <p className="text-lg font-semibold text-darkAccent">Lee</p>
                <p className="text-md text-darkAccent">
                  Owner, Bluephase Rewires
                </p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-mediumAccent">
              Built on Experience, Not Shortcuts
            </h2>
            <AccentLine />

            <p className="text-md text-darkAccent">
              &quot;After years working in and around people’s homes, I started
              to notice the same frustrations coming up time and time again.
              Homeowners weren’t necessarily unhappy with the end result — they
              were frustrated by the process.
            </p>

            <p className="text-md text-darkAccent">
              Rushed decisions, unclear communication, and work that felt like
              it had been done <em>to</em> their home rather than <em>for</em>{" "}
              them never sat right with me. A rewire is disruptive, there’s no
              getting around that — but it doesn’t need to feel chaotic or
              careless.
            </p>

            <p className="text-md text-darkAccent">
              Bluephase Rewires was built to do things in a more considered way.
              I take the time to plan properly, explain what’s happening, and
              make decisions based on how a home is actually lived in, not just
              what looks good on paper.
            </p>

            <p className="text-md text-darkAccent">
              The goal is simple: to make an important but disruptive project
              feel clear, controlled, and as stress-free as possible — while
              leaving people confident in the choices they’ve made long after
              the work is finished&quot;.
            </p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-screen-md mx-auto w-5/6 space-y-8">
          <h2 className="text-3xl font-bold text-mediumAccent">How We Work</h2>
          <AccentLine />

          <p className="text-md text-darkAccent">
            A house rewire isn’t just about replacing old cables. It’s about
            thinking carefully about how a home is used day to day, and making
            choices that will still make sense years down the line.
          </p>

          <div className="space-y-5 text-md text-darkAccent">
            <p>
              Before any work starts, we take the time to understand your home,
              your layout, and how you actually live in the space. That early
              planning makes everything that follows smoother and more
              predictable.
            </p>

            <p>
              Throughout the job, communication stays clear and straightforward.
              You’ll know what’s happening, what to expect next, and where
              things stand at all times — no surprises or guesswork.
            </p>

            <p>
              Once the work is complete, everything is fully tested, certified,
              and signed off properly. The aim is to leave you with a system
              that feels reliable, well thought through, and ready for everyday
              use.
            </p>
          </div>
        </div>
      </section>

      {/* Area */}
      <section className="py-24">
        <div className="max-w-screen-md mx-auto w-5/6 text-center space-y-6">
          <h2 className="text-3xl font-bold text-mediumAccent">
            Areas We Cover
          </h2>

          <p className="text- text-darkAccent">
            We’re based in the West Midlands and regularly carry out house
            rewires in Halesowen, Stourbridge, Kidderminster, and surrounding
            areas.
          </p>
        </div>
      </section>

      {/* Soft CTA */}
      <CTASection />
    </main>
  );
}
