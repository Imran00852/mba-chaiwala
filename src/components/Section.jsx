import { motion } from "framer-motion";
const Section = ({
  h3,
  text,
  hasBtn = true,
  btnTxt,
  imgSrc,
  imgSize = "70%",
  backgroundColor,
  h3Color,
  textColor,
  btnBg,
  btnColor,
}) => {
  const headingOptions = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    whileInView: {
      y: 1,
      opacity: 1,
    },
  };

  const textOptions = {
    ...headingOptions,
    transition: {
      delay: 0.3,
    },
  };

  const buttonOptions = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    whileInView: {
      y: 1,
      opacity: 1,
    },
    transition: {
      delay: 0.3,
      ease: "easeIn",
    },
  };

  const ImgOptions = {
    initial: {
      scale: 0.1,
      opacity: 0,
    },
    whileInView: {
      scale: 1,
      opacity: 1,
    },
    transition: {
      delay: 0.3,
    },
  };

  return (
    <section className="section" style={{ backgroundColor: backgroundColor }}>
      <div>
        <motion.h3
          style={{ color: h3Color }}
          data-cursorpointer={true}
          {...headingOptions}
        >
          {h3}
        </motion.h3>
        <motion.p
          style={{ color: textColor }}
          data-cursorpointer={true}
          {...textOptions}
        >
          {text}
        </motion.p>
        {hasBtn && (
          <motion.button
            style={{ backgroundColor: btnBg, color: btnColor }}
            data-cursorpointer={true}
            {...buttonOptions}
          >
            {btnTxt}
          </motion.button>
        )}

        <motion.div {...ImgOptions}>
          <img src={imgSrc} style={{ width: imgSize }} alt="img" />
        </motion.div>
      </div>
    </section>
  );
};

export default Section;
