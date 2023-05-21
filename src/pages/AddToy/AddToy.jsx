import { useContext } from "react";
import useTitle from "../../hooks/useTitle";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddToy = () => {
  useTitle("Add A Toy");
  const { user } = useContext(AuthContext);
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    fetch("https://alimama-server.vercel.app/addToy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Toy added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };


  return (
    <div className="hero bg-gray-900 text-white my-12 py-12 rounded-xl">
      <div className="hero-content flex flex-col gap-12 px-12">
        <div className="space-y-6 text-center">
          <h1 className="text-5xl font-bold">Add A Toy</h1>
          <p>Add A Toy private route page to MongoDB database:</p>
        </div>
        {/* hero form here */}
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Picture URL</span>
                    </label>
                    <input
                      {...register("img")}
                      type="text"
                      name="img"
                      placeholder="Picture URL"
                      defaultValue="https://m.media-amazon.com/images/I/71jrSZJjiHL._AC_SL1500_.jpg"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Toy Name</span>
                    </label>
                    <input
                      {...register("title")}
                      type="text"
                      name="title"
                      placeholder="Toy Name"
                      defaultValue="Micro Police SUV"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Seller Name</span>
                    </label>
                    <input
                      value={user?.displayName}
                      {...register("seller")}
                      type="text"
                      name="seller"
                      placeholder="Seller Name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Seller Email</span>
                    </label>
                    <input
                      value={user?.email}
                      {...register("email")}
                      type="text"
                      name="email"
                      placeholder="Seller Email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Toy Category</span>
                    </label>
                    <select
                      {...register("category")}
                      className="select select-bordered label-text"
                    >
                      <option value="Police Vehicle" className="label-text">
                        Police Vehicle
                      </option>
                      <option value="Sports Car" className="label-text">
                        Sports Car
                      </option>
                      <option value="Toy Truck" className="label-text">
                        Toy Truck
                      </option>
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Price</span>
                    </label>
                    <input
                      {...register("price")}
                      type="text"
                      name="price"
                      placeholder="Price"
                      defaultValue="20"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Rating</span>
                    </label>
                    <input
                      {...register("rating")}
                      type="text"
                      name="rating"
                      placeholder="Rating"
                      defaultValue="4.2"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Available Quantity</span>
                    </label>
                    <input
                      {...register("quantity")}
                      type="text"
                      name="quantity"
                      placeholder="Quantity"
                      defaultValue="100"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Description</span>
                    </label>
                    <input
                      {...register("description")}
                      type="textarea"
                      name="description"
                      placeholder="Description"
                      defaultValue="Driven by Battery – Micro Police SUV – Toy Car with Lights and Sound – Rescue Cars and Toys for Kids Aged 3 and Up, WH1127Z, Blue,red"
                      className="textarea textarea-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Product Link</span>
                    </label>
                    <input
                      {...register("hyperlink")}
                      type="textarea"
                      name="hyperlink"
                      placeholder="Product Link"
                      defaultValue="https://www.amazon.com/Driven-Battat-Police-Lights-Rescue/dp/B0881GYNC9/"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <input
                      type="submit"
                      value="Add This Toy"
                      className="btn btn-warning"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
