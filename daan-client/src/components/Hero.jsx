import styles from "../styles";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

function Hero() {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >


        {/* HERO TITLE */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            All Your <br className="sm:block-hidden" />{" "}
            <span className="text-gradient">Solutions</span>
          </h1>

          {/* GET STARTED ICON */}
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
          {/* END OF GET STARTED ICON */}
        </div>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          {" "}
          Without The Hassle.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet,
          quam non condimentum volutpat, velit nisl tristique neque, vitae
          efficitur risus felis a justo. Suspendisse potenti. Nulla facilisi.
        </p>
      </div>
      {/* END OF HERO TITLE */}

      {/* HERO IMAGE */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt="solutions"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* GRADIENT EFFECT */}
        <div className="absolute pink__gradient z-0 w-[40%] h-[35%] top-0" />
        <div className="absolute white__gradient z-1 w-[80%] h-[80%] bottom-40 rounded-full" />
        <div className="absolute blue__gradient z-0 w-[50%] h-[50%] right-20 bottom-20" />
        {/* END OF GRADIENT EFFECT */}
      </div>
      {/* END OF HERO IMAGE */}

      {/* GETTING STARTED BUTTON FOR SMALL DEVICES */}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
      {/* END OF GETTING STARTED BUTTON FOR SMALL DEVICES */}
    </section>
  );
}

export default Hero;
