import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import vehicle1 from '../../../assets/features/vehicle1.jpg';
import vehicle2 from '../../../assets/features/vehicle2.jpg';
import vehicle3 from '../../../assets/features/vehicle3.jpg';
import vehicle4 from '../../../assets/features/vehicle4.jpg';

AOS.init();

const Features = () => {
    return (
      <div className="hero bg-gray-900 text-white my-12 py-12 rounded-xl">
        <div className="hero-content flex-col lg:flex-row gap-12 px-12">
          <div className="grid grid-cols-2 gap-6">
            <div data-aos="fade-down-right">
              <img src={vehicle1} className="rounded-lg shadow-2xl" />
            </div>
            <div data-aos="fade-down-left">
              <img src={vehicle2} className="rounded-lg shadow-2xl" />
            </div>
            <div data-aos="fade-up-right">
              <img src={vehicle3} className="rounded-lg shadow-2xl" />
            </div>
            <div data-aos="fade-up-left">
              <img src={vehicle4} className="rounded-lg shadow-2xl" />
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-5xl font-bold">Featured Vehicle Toys</h1>
            <ul className="space-y-6">
              <li>
                <span className="font-bold text-warning">
                  Realistic Design:
                </span>{" "}
                Toy cars often mimic the appearance of real vehicles, with
                details like sleek bodywork, working doors, and
                authentic-looking wheels.
              </li>
              <li>
                <span className="font-bold text-warning">
                  Durable Construction:
                </span>{" "}
                Toy cars are typically made from durable materials like plastic
                or die-cast metal to withstand rough play and ensure longevity.
              </li>
              <li>
                <span className="font-bold text-warning">
                  Variety of Models:
                </span>{" "}
                Toy cars come in a wide range of models, including sports cars,
                trucks, SUVs, classic cars, and more, offering choices for
                different interests and preferences.
              </li>
            </ul>
            <Link to="/more">
              <button className="btn btn-outline btn-warning mt-6">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Features;