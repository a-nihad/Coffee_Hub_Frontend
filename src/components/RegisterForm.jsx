import { Form, Formik } from "formik";
import BeatLoader from "react-spinners/BeatLoader";

import Button from "./Button";
import InputForm from "./InputForm";
import { useAuth } from "../services/useAuth";
import { signupValidation } from "../utils/Validations";

function RegisterForm() {
  const { isLoading, register } = useAuth();

  const initialValues = {
    userName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    avatar: "",
  };

  const submitForm = async (values) => {
    await register(values);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <img
          src="user_icon.jpeg"
          alt="user_icon"
          className="w-[90px] sm:w-[110px]"
        />
        <h1 className="text-xl font-semibold sm:text-2xl">
          Create an account!
        </h1>
        <h2 className="text-sm text-slate-500">
          Create an Account to access datas
        </h2>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={signupValidation}
        onSubmit={submitForm}
      >
        <Form className="mt-5 grid gap-2">
          <InputForm label="User Name" type="text" name="userName" />
          <InputForm label="Email" type="mail" name="email" />
          <InputForm label="Password" type="password" name="password" />
          <InputForm
            label="Confirm Password"
            type="password"
            name="passwordConfirm"
          />

          <Button
            type="submit"
            variation="secondary"
            className="mt-2 rounded-md py-2"
          >
            {isLoading ? (
              <BeatLoader color="#ffffff" loading={true} size={10} />
            ) : (
              "Sign Up"
            )}
          </Button>
        </Form>
      </Formik>
    </>
  );
}

export default RegisterForm;
