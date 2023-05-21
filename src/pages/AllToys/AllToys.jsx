import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import AllToysTable from "./AllToysTable";

const AllToys = () => {
  useTitle("All Toys");
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://alimama-server.vercel.app/allToys")
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, []);

  return (
    <div className="hero bg-gray-900 text-white my-12 py-12 rounded-xl">
      <div className="hero-content flex flex-col gap-12 px-12">
        <div className="space-y-6 text-center">
          <h1 className="text-5xl font-bold">All Toys</h1>
          <p>
            All Toys page where you will see the toys all the users have added
            in the tabular form.
          </p>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Seller Name</th>
                <th>Toy Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Show Detail</th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy) => (
                <AllToysTable key={toy._id} toy={toy}></AllToysTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
