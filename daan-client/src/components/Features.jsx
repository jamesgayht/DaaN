import { features } from "../constants";
import styles, { layout } from "../styles";
import Button from "./Button";
import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section id="features" className={layout.section}>
      {/* GRADIENT */}
      <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full white__gradient" />
      {/* END OF GRADIENT */}

      {/* FEATURES OFFERING */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          About four or five words, <br className="sm:block hidden" />
          another four or five words.
        </h2>
        <p className={`${styles.paragraph} font-poppins max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet,
          quam non condimentum volutpat, velit nisl tristique neque, vitae
          efficitur risus felis a justo. Suspendisse potenti. Nulla facilisi.
        </p>
        <Button styles={`mt-10`} />
      </div>
      {/* END OF FEATURES OFFERING */}

      {/* FEATURE TAG */}
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
      {/* END OF FEATURE TAG */}
    </section>
  );
}

export default Features;
