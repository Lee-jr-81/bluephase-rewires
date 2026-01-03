import Button from "./Button";

export default function CTASection() {
  return (
    <section className="bg-realdarkAccent py-20 mt-36">
      <div className="flex gap-6 flex-col md:flex-row items-center justify-between max-w-screen-lg mx-auto w-5/6 text-white">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <Button
          name="Call To Book Your Visit"
          bg="bg-mediumAccent"
          textColour="text-white"
          href="tel:+447XXXXXXXXX"
        />
      </div>
    </section>
  );
}
