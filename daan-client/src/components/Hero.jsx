import styles from "../styles";
import { handpick } from "../assets";
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
            Hand-
            <br className="sm:block-hidden" /> picked
            <br className="sm:block-hidden" />{" "}
            <span className="text-gradient">Solutions</span>
          </h1>

          {/* GET STARTED ICON */}
          <div className="ss:flex hidden md:mr-16 mr-0">
            <GetStarted />
          </div>
          {/* END OF GET STARTED ICON */}
        </div>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          {" "}
          Without
          <br className="sm:block-hidden" /> The Hassle.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Based in Singapore, we are a digital consultancy specialising in web
          and software development, systems integration, data analytics and
          reporting.
        </p>
      </div>
      {/* END OF HERO TITLE */}

      {/* HERO IMAGE */}
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-0 relative`}
      >
        {/* <img
          src={handpick}
          alt="handpick"
          className="w-[100%] h-[100%] relative z-[1]"
        /> */}

        <div className={`screen ss:my-[3rem]`}>
          <div className={`screen-image bg-[url('src/assets/mbs.jpg')]`}>
          </div>
          <div className="screen-overlay"></div>
          <div className="screen-content">
          </div>
        </div>

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
