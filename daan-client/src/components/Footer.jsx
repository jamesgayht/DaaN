import { daan } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import styles from "../styles";

function Footer() {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      {/* LOGO & LINKS */}
      {/* <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}> */}
        {/* LOGO */}
        {/* <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={daan}
            alt="DaaN"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div> */}
        {/* END OF LOGO */}

        {/* LINKS */}
        {/* <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div className="" key={footerLink.key}>
              <h4 className="text-white font-poppins font-medium text-[18px] leading-[27px]">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins text-dimWhite font-normal text-[16px]leading-[24px] hover:text-secondary cursor-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0 "
                    } `}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
        {/* END OF LINKS */}
      {/* </div> */}
      {/* END OF LOGO & LINKS */} 

      {/* COPYRIGHT & SM */}
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          2023 DaaN. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((media, index) => (
            <img
              key={media.id}
              src={media.icon}
              alt={media.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== media.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          ))}
        </div>
      </div>
      {/* END OF COPYRIGHT & SM */}
    </section>
  );
}

export default Footer;
