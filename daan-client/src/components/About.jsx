import { feedback } from "../constants";
import styles from "../styles";
import FeedbackCard from "./FeedbackCard";

function About() {
  return (
    <section
      id="about"
      className={`${styles.flexCenter} ${styles.paddingY} flex-col relative z-[0]`}
    >
      {/* GRADIENT */}
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>
      {/* END OF GRADIENT */}

      {/* TESTIMONIAL BODY */}
      <div className="w-full flex justify-between item-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>
          What our founders <br className="sm:block hidden" /> seek to achieve
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            aliquet, quam non condimentum volutpat, velit nisl tristique neque,
            vitae efficitur risus felis a justo. Suspendisse potenti. Nulla
            facilisi.
          </p>
        </div>
      </div>
      {/* END OF TESTIMONIAL BODY */}

      {/* TESTIMONIAL CARDS */}
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((fbCard) => (
          <FeedbackCard key={fbCard.id} {...fbCard} />
        ))}
      </div>
      {/* END OF TESTIMONIAL CARDS */}
    </section>
  );
}

export default About;
