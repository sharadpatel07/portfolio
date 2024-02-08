import sharadimage from "./sharadimage.jpeg";

export default function AboutME() {
  return (
    <>
      <div className="about-main">
        <div className="about-color-1"></div>
        <div className="about-color-2">
          <div className="about-main-empty">
            <div className="about-empty-1"></div>
            <div className="about-empty-2"></div>
          </div>
          <div className="about-page">
            <div className="about-detail">
              <label className="about-heading-1">hello, my name is</label>
              <label className="about-heading-2">SHARAD PATEL</label>
              <label className="about-heading-3">
              My name is Sharad, and I’m an 18-year-old.I thrive on creating seamless web experiences using the MERN stack, which includes MongoDB, Express.js, React, and Node.js. Whether it’s crafting dynamic user interfaces or handling server-side logic, I’m passionate about building robust and efficient applications.
              </label>
            </div>
            <div className="about-image">
              <img src={sharadimage} alt="error" />
            </div>
          </div>
        </div>
        <div className="about-color-3"></div>
      </div>
    </>
  );
}
