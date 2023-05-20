import engg1 from '../../../assets/engineers/engg1.jpg';
import engg2 from '../../../assets/engineers/engg2.jpg';
import engg3 from '../../../assets/engineers/engg3.jpg';

const Team = () => {
    return (
      <div className="hero bg-gray-900 text-white my-12 py-12 rounded-xl">
        <div className="hero-content flex flex-col gap-12 px-12">
          <div className="space-y-6 text-center">
            <div data-aos="fade-down">
              <h1 className="text-5xl font-bold">Meet Our Engineers</h1>
            </div>
            <p>
              Meet our engineers, a dedicated group of professionals passionate
              about delivering exceptional results. With diverse expertise and a
              collaborative approach, we work together to tackle challenges,
              innovate solutions, and exceed expectations. We are committed to
              success and strive for excellence in everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card Engineer-1 */}
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={engg1} alt="Engg1" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Engg. Rohan</h2>
                <p>Sports car expert</p>
                <div className="card-actions justify-start">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-white hover:text-yellow-400 transition-colors duration-300"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-yellow-400 transition-colors duration-300"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-yellow-400 transition-colors duration-300"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Card Engineer-2 */}
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={engg2} alt="Engg2" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Engg. Sarah</h2>
                <p>Regular car expert</p>
                <div className="card-actions justify-start">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-white hover:text-yellow-400 transition-colors duration-300"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-yellow-400 transition-colors duration-300"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-yellow-400 transition-colors duration-300"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Card Engineer-3 */}
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={engg3} alt="Engg3" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Engg. Ashik</h2>
                <p>Mini truck expert</p>
                <div className="card-actions justify-start">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-white hover:text-yellow-400 transition-colors duration-300"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-yellow-400 transition-colors duration-300"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-yellow-400 transition-colors duration-300"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Team;