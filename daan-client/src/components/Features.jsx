import { features } from "../constants";
import styles, { layout } from "../styles";
import Button from "./Button";
import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section id="features" className={layout.section}>
      {/* GRADIENT */}
      {/* <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full white__gradient" /> */}
      {/* END OF GRADIENT */}

      {/* FEATURES OFFERING */}
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Are your existing <br className="sm:block hidden" />
          systems too rigid?
        </h2>
        <p className={`${styles.paragraph} font-poppins max-w-[470px] mt-5`}>
          We are able to provide that flexibility specific to your
          requirements. Drop us a note and we will get in touch ASAP!
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
