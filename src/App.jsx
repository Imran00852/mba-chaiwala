import IntroVideo from "./components/IntroVideo";
import Section from "./components/Section";
import Misc from "./components/Misc";
import "./styles/App.scss";
import "./styles/intro.scss";
import "./styles/section.scss";
import "./styles/footer.scss";
import "./styles/misc.scss";
import "./styles/mediaQuery.scss";

import freshTopicImg from "./assets/academy.png";
import freshTopic2Img from "./assets/story.png";
import tedtalksimg from "./assets/in-the-news.gif";
import franchiseImg from "./assets/franchise.gif";
import mapImg from "./assets/locations.png";
import coursesImg from "./assets/image2.png";
import albumImg from "./assets/mba-cares.gif";
import baratImg from "./assets/image1.png";
import chaiwalaImg from "./assets/image3.png";

import data from "./data/data.json";
import Footer from "./components/Footer";
import { useEffect } from "react";

// $yellow: "#fff100";
// $pink: "#ed1e79";
// $red: "#d20120";
// $white: "#fff";
// $brown:"#6d3dof";

const yellow = "#fff100",
  pink = "#ed1e79",
  red = "#d20120",
  white = "#fff",
  brown = "#6d3d0f";

const {
  freshTopic,
  freshTopic2,
  tedTalks,
  franchise,
  map,
  courses,
  album,
  barat,
  chaiwala,
} = data;

const App = () => {
  const dotCursor = (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.top = `${e.pageY - 14}px`;
    cursor.style.left = `${e.pageX - 14}px`;

    const element = e.target;
    if (element.getAttribute("data-cursorpointer")) {
      cursor.classList.add("cursorHover");
    }else if(element.getAttribute("data-cursorpointermini")){
      cursor.classList.add("cursorHoverMini");
    }else{
      cursor.classList.remove("cursorHover");
      cursor.classList.remove("cursorHoverMini");
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", dotCursor);
    return () => {
      window.removeEventListener("mousemove", dotCursor);
    };
  }, []);
  return (
    <>
      <IntroVideo />

      {/* FreshTopic */}
      <Section
        h3={freshTopic.heading}
        text={freshTopic.text}
        btnTxt={freshTopic.btn}
        imgSrc={freshTopicImg}
        backgroundColor={pink}
        h3Color={yellow}
        textColor={yellow}
        btnBg={yellow}
        btnColor={pink}
      />

      {/* FreshTopic 2 */}
      <Section
        h3={freshTopic2.heading}
        text={freshTopic2.text}
        btnTxt={freshTopic2.btn}
        imgSrc={freshTopic2Img}
        backgroundColor={pink}
        h3Color={yellow}
        textColor={yellow}
        btnBg={yellow}
        btnColor={pink}
      />

      {/* Ted talks */}
      <Section
        h3={tedTalks.heading}
        text={tedTalks.text}
        btnTxt={tedTalks.btn}
        imgSrc={tedtalksimg}
        backgroundColor={yellow}
        h3Color={pink}
        textColor={pink}
        btnBg={pink}
        btnColor={yellow}
      />

      {/* Franchise */}
      <Section
        h3={franchise.heading}
        text={franchise.text}
        btnTxt={franchise.btn}
        imgSrc={franchiseImg}
        backgroundColor={white}
        h3Color={pink}
        textColor={brown}
        btnBg={brown}
        btnColor={yellow}
      />

      {/* map */}
      <Section
        h3={map.heading}
        text={map.text}
        imgSrc={mapImg}
        backgroundColor={pink}
        h3Color={yellow}
        textColor={yellow}
        hasBtn={false}
        btnBg={brown}
        btnColor={yellow}
      />

      {/* courses */}
      <Section
        h3={courses.heading}
        text={courses.text}
        btnTxt={courses.btn}
        imgSrc={coursesImg}
        imgSize={"30%"}
        backgroundColor={yellow}
        h3Color={pink}
        textColor={pink}
        btnBg={pink}
        btnColor={yellow}
      />

      {/* album */}
      <Section
        h3={album.heading}
        text={album.text}
        btnTxt={album.btn}
        imgSrc={albumImg}
        backgroundColor={white}
        h3Color={pink}
        textColor={brown}
        btnBg={brown}
        btnColor={yellow}
      />

      {/* barat */}
      <Section
        h3={barat.heading}
        text={barat.text}
        btnTxt={barat.btn}
        imgSrc={baratImg}
        backgroundColor={pink}
        h3Color={yellow}
        textColor={yellow}
        btnBg={yellow}
        btnColor={pink}
      />

      {/* chaiwala */}
      <Section
        h3={chaiwala.heading}
        text={chaiwala.text}
        btnTxt={chaiwala.btn}
        imgSrc={chaiwalaImg}
        backgroundColor={white}
        h3Color={pink}
        textColor={brown}
        btnBg={brown}
        btnColor={yellow}
      />

      <Footer />
      <Misc />
    </>
  );
};

export default App;
