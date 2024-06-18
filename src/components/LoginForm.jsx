import { Formik, Form } from "formik";
import BeatLoader from "react-spinners/BeatLoader";

import { loginValidation } from "../utils/Validations";
import { useAuth } from "../services/useAuth";
import InputForm from "./InputForm";
import Button from "./Button";

function LoginForm() {
  const { isLoading, login } = useAuth();

  const initialValues = {
    email: "",
    password: "",
  };

  const submitForm = async (values) => {
    await login(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidation}
      onSubmit={submitForm}
    >
      <Form className="mt-5 grid gap-2">
        <InputForm label="Email" type="email" name="email" />
        <InputForm label="Password" type="password" name="password" />

        <Button
          type="submit"
          variation="secondary"
          className="mt-3 rounded-md py-2"
        >
          {isLoading ? (
            <BeatLoader color="#ffffff" loading={true} size={10} />
          ) : (
            "Login"
          )}
        </Button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
