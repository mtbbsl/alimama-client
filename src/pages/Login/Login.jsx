import { Link } from "react-router-dom";
import login from "../../assets/others/Login.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="hero bg-gray-900 text-white my-12 py-12 rounded-xl">
      <div className="hero-content flex-col lg:flex-row gap-12 px-12">
        <div className="w-full">
          <img src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login Please</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <p onClick={() => setShow(!show)}>
                  <small>
                    {show ? (
                      <span>Hide Password</span>
                    ) : (
                      <span>Show Password</span>
                    )}
                  </small>
                </p>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-outline btn-warning"
                />
              </div>
            </form>
            <p className="text-red-300 text-center px-4">{error}</p>
            <p className="my-4 text-center">
              Haven&apos;t an account yet?{" "}
              <Link className="text-warning font-bold" to="/signup">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
