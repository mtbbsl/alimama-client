import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  const [galleries, setGalleries] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  console.log(selectedCategory);

  useEffect(() => {
    fetch("https://alimama-server.vercel.app/gallery")
      .then((res) => res.json())
      .then((data) => setGalleries(data));
  }, []);

  const handleTabSelect = (index) => {
    setSelectedCategory(index);
  };

  return (
    <div className="bg-gray-900 text-white my-12 py-12 rounded-xl">
      <div className="space-y-6 text-center pb-12">
        <div data-aos="fade-down">
          <h1 className="text-5xl font-bold">Shop by Gallery</h1>
        </div>
        <p>
          Please try to shop your desired toy car by browsing this categorized
          gallery.
        </p>
      </div>
      {/* Rest of the code */}
      <div className="px-12">
        <Tabs onSelect={handleTabSelect}>
          <TabList>
            <Tab>Police Vehicle</Tab>
            <Tab>Sports Car</Tab>
            <Tab>Toy Truck</Tab>
          </TabList>

          <TabPanel>
            <div className="flex flex-wrap">
              {galleries.map((gallery) => {
                if (gallery.category === "Police Vehicle") {
                  return (
                    <div
                      key={gallery._id}
                      className="card card-compact w-64 bg-base-100 shadow-xl m-6"
                    >
                      <figure>
                        <img
                          src={gallery.img}
                          className="object-cover w-64 h-48"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{gallery.title}</h2>
                        <p>Price: ${gallery.price}</p>
                        <p>Rating: {gallery.rating}</p>
                      </div>
                      <div className="card-actions justify-end mr-4 mb-4">
                        <Link
                          to={`/toyDetail/${gallery._id}`}
                          className="btn btn-warning btn-sm"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-wrap">
              {galleries.map((gallery) => {
                if (gallery.category === "Sports Car") {
                  return (
                    <div
                      key={gallery._id}
                      className="card card-compact w-64 bg-base-100 shadow-xl m-6"
                    >
                      <figure>
                        <img
                          src={gallery.img}
                          className="object-cover w-64 h-48"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{gallery.title}</h2>
                        <p>Price: ${gallery.price}</p>
                        <p>Rating: {gallery.rating}</p>
                      </div>
                      <div className="card-actions justify-end mr-4 mb-4">
                        <Link
                          to={`/toyDetail/${gallery._id}`}
                          className="btn btn-warning btn-sm"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-wrap">
              {galleries.map((gallery) => {
                if (gallery.category === "Toy Truck") {
                  return (
                    <div
                      key={gallery._id}
                      className="card card-compact w-64 bg-base-100 shadow-xl m-6"
                    >
                      <figure>
                        <img
                          src={gallery.img}
                          className="object-cover w-64 h-48"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{gallery.title}</h2>
                        <p>Price: ${gallery.price}</p>
                        <p>Rating: {gallery.rating}</p>
                      </div>
                      <div className="card-actions justify-end mr-4 mb-4">
                        <Link
                          to={`/toyDetail/${gallery._id}`}
                          className="btn btn-warning btn-sm"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
