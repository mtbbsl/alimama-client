import { useContext, useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  const url = `https://alimama-server.vercel.app/myToys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, []);

  return (
    <div className="hero bg-gray-900 text-white my-12 py-12 rounded-xl">
      <div className="hero-content flex flex-col gap-12 px-12">
        <div className="space-y-6 text-center">
          <h1 className="text-5xl font-bold">My Toys: {myToys.length} </h1>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table table-compact w-full">
              <thead>
                <tr>
                  <th>Del</th>
                  <th>Toy Name</th>
                  {/* <th>Image URL</th> */}
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  {/* <th>Description</th> */}
                </tr>
              </thead>
              <tbody>
                {
                  myToys.map(myToy => (<MyToysRow
                    key={myToy._id} myToy={myToy}
                  ></MyToysRow>))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
