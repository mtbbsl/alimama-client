import { useLoaderData } from "react-router-dom";


const ToyDetail = () => {

  const toys = useLoaderData();
  const {title, img, price, rating, category, quantity, description, hyperlink} = toys;

    return (
      <div className="hero bg-gray-900 text-white my-12 py-12 rounded-xl">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row gap-12">
            <img src={img} className="max-w-md rounded-lg shadow-2xl" />
            <div className="space-y-2">
              <h1 className="text-3xl font-bold mb-6">Detail of {title}</h1>
              <p>Seller Name:</p>
              <p>Seller Email:</p>
              <p>Price: ${price}</p>
              <p>Rating: {rating}</p>
              <p>Category: {category}</p>
              <p>Available Quantity: {quantity}</p>
              <p>Detail Description: {description}</p>
              <p>Amazon Link: {hyperlink}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ToyDetail;