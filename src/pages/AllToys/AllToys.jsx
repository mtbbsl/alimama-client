import useTitle from "../../hooks/useTitle";


const AllToys = () => {
  useTitle("All Toys");
    return (
      <div className="hero bg-gray-900 text-white my-12 py-12 rounded-xl">
        <div className="hero-content flex flex-col gap-12 px-12">
          <div className="space-y-6 text-center">
            <h1 className="text-5xl font-bold">All Toys</h1>
            <p>
              All Toys page where you will see the toys all the users have added
              in the tabular form. Each row of the All Toys table/list will have
              the following information: Seller, Toy Name, Sub-Category, Price,
              Quantity, View Details Button. Show 20 results by default by using
              limit. Implement a search system on this page, based on the Toy
              name. Without logging in, if a user clicks on the View Details
              button, they will be redirected to the Login Page. Make sure to
              take the user to the Details Page after the user successfully logs
              in.
            </p>
          </div>
          <div>
            <h2>All Toys Table here</h2>
          </div>
        </div>
      </div>
    );
};

export default AllToys;