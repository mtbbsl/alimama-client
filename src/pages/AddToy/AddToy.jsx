import useTitle from "../../hooks/useTitle";


const AddToy = () => {
  useTitle('Add A Toy');
  
    return (
      <div className="hero bg-gray-900 text-white my-12 py-12 rounded-xl">
        <div className="hero-content flex flex-col gap-12 px-12">
          <div className="space-y-6 text-center">
            <h1 className="text-5xl font-bold">Add A Toy</h1>
            <p>
              Add A Toy page will be a private route: Create an Add A Toy page
              where there will be a form having the following fields: - Picture
              URL of the toy, - Name, - seller name (if available from the
              logged in user) - seller email (info from the logged in user) -
              Sub-category ( For example: if the website is based on Educational
              and learning toys, the sub-categories can be Math Toys, Language
              Toys, and Science Toys.) - Price, - Rating, - Available quantity -
              Detail description
            </p>
          </div>
          <div>
            <h2>Gallery Tabs are here</h2>
          </div>
        </div>
      </div>
    );
};

export default AddToy;