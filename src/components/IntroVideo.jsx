import vid from "../assets/vid.mp4";

const IntroVideo = () => {
  return (
    <div className="intro">
      <video src={vid} muted autoPlay loop controlList="nodownload"></video>
      <div></div>
    </div>
  );
};

export default IntroVideo;
