import sharadimage from './sharadimage.jpeg'

export default function Home() {
  return (
    <>
      <div className="home-main">
        <div className="home-color-1"></div>
        <div className="home-color-2">
          <div className="home-main-empty">
            <div className="home-empty-1"></div>
            <div className="home-empty-2"></div>
          </div>
          <div className="home-page">
            <div className="home-detail">

            <label className="home-heading-1">hello, my name is</label>
            <label className="home-heading-2">SHARAD</label>
            <label className="home-heading-3">
              As a MERN stack developer, I craft web applications with
              precision, weaving MongoDB, Express, React, and Node into seamless
              experiences.
            </label>
            <div className="home-all-btn">
              <button className="home-btn-1">Hire Me</button>
              <button className="home-btn-2">See My PRoject</button>
            </div>
            </div>
            <div className="home-image">
                <img src={sharadimage} alt='error'/>
            </div>
          </div>
        </div>
        <div className="home-color-3"></div>
      </div>
    </>
  );
}
