import { Link } from "react-router-dom";
import login from "../../assets/others/Signup.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useTitle from "../../hooks/useTitle";

const SignUp = () => {
  useTitle('Sign Up');

    const { createUser, updateUserData } = useContext(AuthContext);
    
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSignUp = (event) => {
      event.preventDefault();
      setSuccess('');
      setError('');
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const photo = form.photo.value;
      const password = form.password.value;
      console.log(name, email, password, photo);

      // validate
      if(password.length < 6){
        setError('Password at least 6 characters.');
        return;
      }

      createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);

            updateUserData(name, photo)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })

            form.reset();
            setError('');
            setSuccess('User created successfully');
        })
        .catch(error => {
            console.error(error.message);
            setError(error.message);
        })
    };

  return (
    <div className="hero bg-gray-900 text-white my-12 py-12 rounded-xl">
      <div className="hero-content flex-col lg:flex-row gap-12 px-12">
        <div className="w-full">
          <img src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign Up Please</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn btn-outline btn-warning"
                />
              </div>
            </form>
            <p className="text-red-500 text-center px-4">{error}</p>
            <p className="text-green-500 text-center px-4">{success}</p>
            <p className="my-4 text-center">
              Already have an account?{" "}
              <Link className="text-warning font-bold" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
