import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="border-color_light w-screen max-w-[400px] grid-cols-2 gap-5 rounded-xl border bg-white p-5 shadow-xl md:grid md:w-[700px] md:max-w-none lg:w-[800px]">
      <div className="bg-color_light hidden h-full items-center justify-center rounded-xl md:flex">
        <img src="login.png" alt="login" className="h-[450px]" />
      </div>

      <div className="p-4 text-center">
        <div className="flex flex-col items-center">
          <img
            src="user_icon.jpeg"
            alt="user_icon"
            className="w-[90px] sm:w-[110px]"
          />

          <h1 className="text-xl font-semibold sm:text-2xl"> Hello Again! </h1>
          <h2 className="text-sm text-slate-500"> Sign in to your Account </h2>
        </div>

        <LoginForm />

        <p className="mt-2 text-sm text-slate-500">
          Don't have an account yet?
          <button
            onClick={() => navigate("/register")}
            className="text-color_primary pl-2 underline"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
