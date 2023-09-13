import bg from "../assets/header-bg.jpg";

export default function Header() {
  return (
    <header
      className="w-full h-screen bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex justify-center items-center w-full h-full text-slate-100 bg-slate-800/80">
        <div className="flex flex-col gap-6 text-center">
          <h4 className="heading-title" data-aos="fade-up" data-aos-duration="3000">WELCOME TO THE Digital Agency</h4>
          <h1 className="text-5xl md:text-7xl font-bold" data-aos="fade-up" data-aos-duration="2000">
            We are Creative <br /> Digital Agency
          </h1>
          <p className="text-base md:text-lg" data-aos="fade-up" data-aos-duration="1000">
            Nam libero tempore cum soluta nobis est eligendi
            <br /> cumaue nihil imedit auomae nelaceat ossimus <br /> omnis
            voluetas raellendus.
          </p>
          <div className="flex justify-center items-center gap-6" data-aos="flip-up" data-aos-duration="3000">
            <button className="btn btn-active btn-primary">Contact Us</button>
            <button className="btn">Read More</button>
          </div>
        </div>
      </div>
    </header>
  );
}
