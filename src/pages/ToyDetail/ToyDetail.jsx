

const ToyDetail = () => {
    return (
      <div className="hero bg-gray-900 text-white my-12 py-12 rounded-xl">
        <div className="hero-content flex flex-col gap-12 px-12">
          <div className="space-y-6 text-center">
            <h1 className="text-5xl font-bold">Single Toy Detail</h1>
            <p>
              After clicking on the View Details button, he/ she will be
              redirected to the Toys Details route ( /toy/:id ) containing the
              information ( picture, toy name, seller name, seller email, price,
              rating, available quantity, and detail description) (optional) If
              possible, display the view details in a modal.
            </p>
          </div>
          <div>
            <h2>Gallery Tabs are here</h2>
          </div>
        </div>
      </div>
    );
};

export default ToyDetail;