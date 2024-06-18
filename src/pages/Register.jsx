import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="w-screen max-w-[400px] grid-cols-2 gap-5 rounded-xl bg-white p-5 shadow-xl md:grid md:w-[700px] md:max-w-none lg:w-[800px]">
      <div className="px-4 py-2 text-center">
        <RegisterForm />

        <p className="mt-2 text-sm text-slate-500">
          Alredy have an account?
          <button
            onClick={() => navigate("/login")}
            className="text-color_primary pl-2 underline"
          >
            Login
          </button>
        </p>
      </div>

      <div className="bg-color_light hidden h-full items-center justify-center rounded-xl md:flex">
        <img src="signup.png" alt="signup" className="h-[450px]" />
      </div>
    </div>
  );
}

export default Register;
