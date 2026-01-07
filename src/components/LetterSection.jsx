import { memo } from "react";

const LetterSection = memo(function LetterSection() {
  return (
    <section className="section letter reveal" id="letter">
      <div className="container narrow">
        <p className="eyebrow">A Letter for You</p>
        <h2 className="section-title">To you, at twenty.</h2>
        <div className="letter-card">
          <p className="body">
            Dear <strong>Cayla Winri Azzahra</strong>,
          </p>

          <p className="body">
            Happy twentieth birthday. It feels strange writing this on a website,
            but perhaps this is the best way to say all the things that slip away
            in conversation.
          </p>

          <p className="body">
            Twenty years is not a small number. Behind it lies so much that others
            never see: exhaustion, quiet tears, fears, hopes, and all the versions
            of you that only you truly know. Today, I simply want to say: I'm proud
            of you, no matter how far you feel from where you want to be.
          </p>

          <p className="body">
            Thank you for being someone who makes my life slower and more meaningful.
            You're not always loud, but your presence is always felt. You're not always
            strong, but you always try. And to me, that's worth infinitely more than
            appearing fine all the time.
          </p>

          <p className="body">
            At twenty, I want you to have one thing: space. Space to fail, to rest,
            to try new things, to say "I'm scared" without feeling weak. You don't need
            to be the most perfect version of yourself today. You're enough being authentically you.
          </p>

          <p className="body">
            We don't know exactly what lies ahead—graduation, careers, new cities, new people.
            But amid all this uncertainty, I want you to know one thing that's certain:
            as long as I'm given the chance, I want to stay beside you. Not always with answers,
            but always with presence.
          </p>

          <p className="body">
            So, happy twentieth birthday. May you discover more versions of yourself that make
            you proud. May you be surrounded by people who love you in healthy, nourishing ways.
            May you always find reasons—however small—to be grateful and to keep going.
          </p>

          <p className="body">
            Among everyone who might wish you happy birthday today, I want you to remember:
            there's one person who is truly grateful you were born—not just today, but every single day.
          </p>

          <p className="body">
            I love you. Quietly, intentionally, and without reservation.
          </p>

          <p className="body signature">– nderrr</p>
        </div>
      </div>
    </section>
  );
});

export default LetterSection;
