import useTitle from "../../hooks/useTitle";


const MyToys = () => {
  useTitle('My Toys');
  
    return (
      <div className="hero bg-gray-900 text-white my-12 py-12 rounded-xl">
        <div className="hero-content flex flex-col gap-12 px-12">
          <div className="space-y-6 text-center">
            <h1 className="text-5xl font-bold">My Toys</h1>
            <p>
              My Toys page will be private routes: If a user logs in, they will
              see the My Toys page, which it will show all the toys information
              they have added from the Add A Toy page in a tabular form. Each
              row will have an update and delete button. Update Action, Delete
              Action
            </p>
          </div>
          <div>
            <h2>Gallery Tabs are here</h2>
          </div>
        </div>
      </div>
    );
};

export default MyToys;