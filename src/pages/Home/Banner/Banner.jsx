import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../assets/carousel/img1.jpg";
import img2 from "../../../assets/carousel/img2.jpg";
import img3 from "../../../assets/carousel/img3.jpg";
import img4 from "../../../assets/carousel/img4.jpg";
import img5 from "../../../assets/carousel/img5.jpg";
import img6 from "../../../assets/carousel/img6.jpg";

const Banner = () => {
  return (
    <div className="carousel carousel-center rounded-xl bg-gray-900 my-12 py-12">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        centerMode={true}
      >
        <div>
          <div className="carousel-item">
            <img src={img1} alt="Toy" />
          </div>
        </div>
        <div>
          <div className="carousel-item">
            <img src={img2} alt="Toy" />
          </div>
        </div>
        <div>
          <div className="carousel-item">
            <img src={img3} alt="Toy" />
          </div>
        </div>
        <div>
          <div className="carousel-item">
            <img src={img4} alt="Toy" />
          </div>
        </div>
        <div>
          <div className="carousel-item">
            <img src={img5} alt="Toy" />
          </div>
        </div>
        <div>
          <div className="carousel-item">
            <img src={img6} alt="Toy" />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
