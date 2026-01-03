import AccentLine from "./AccentLine";

export default function ProblemSection() {
  return (
    <section className="mt-20 md:mt-36">
      <div className="max-w-screen-md mx-auto w-5/6 text-left">
        <h2 className="text-3xl font-bold text-darkAccent">
          Starting a Rewire Can Feel Overwhelming
        </h2>
        <AccentLine />

        <p className="mt-12 text-md text-darkAccent">
          A rewire isn’t just another job — The choices made during a rewire
          shape how safely and comfortably your home works long into the future.
        </p>

        <p className="mt-6 text-md text-darkAccent">
          Most homeowners only do this once. It can be hard to know what
          actually needs upgrading, how disruptive the work will be, or whether
          the finished result will still make sense years down the line.
        </p>

        <p className="mt-6 text-md text-darkAccent">
          You’re not just choosing someone to replace cables — you’re trusting
          them with the infrastructure your home will rely on every day.
        </p>
      </div>
    </section>
  );
}
