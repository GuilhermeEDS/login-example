import { useEffect, useState } from "react";
import logo from "../B2Bit Logo.png";
import { Formik, Form, Field } from "formik";
import { LoginApi } from "../services/Api";
import { useNavigate } from "react-router-dom";

export interface FormValues {
  email: string;
  password: string;
}

export interface FormValuesError {
  email: string;
  password: string;
}

const validate = (values: FormValues) => {
  const errors: FormValuesError = {
    email: "",
    password: "",
  };

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};

const Login = () => {
  const navigate = useNavigate();

  const initialValues: FormValues = { email: "", password: "" };
  const [errors, setErrors] = useState<FormValues>({ email: "", password: "" });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/profile");
    }
  }, [navigate]);

  return (
    <div className="bg-white md:bg-lightgray">
      <div className="h-screen flex flex-col items-center justify-center">
        <div
          className="
          bg-white w-full max-w-full 
            md:rounded-2xl md:max-w-sm md:shadow-all
          "
        >
          <img
            src={logo}
            alt="logo"
            className="w-full max-w-full mt-8 pt-5 px-10"
          />
          <div className="w-full max-w-full">
            <Formik
              initialValues={initialValues}
              onSubmit={async (
                values: FormValues,
                actions: { setSubmitting: (arg0: boolean) => void }
              ) => {
                actions.setSubmitting(false);
                const val = validate(values);
                if (val.email === "" && val.password === "") {
                  await LoginApi(values.email, values.password);
                  navigate("/profile");
                } else {
                  setErrors(val);
                }
              }}
            >
              <Form className=" px-8 pt-10 pb-12 flex flex-col">
                <label className="font-semibold text-lg" htmlFor="email">
                  Email
                </label>
                <p className="text-sm text-red">{errors.email}</p>
                <Field
                  className="input"
                  id="email"
                  name="email"
                  placeholder="@gmail.com"
                  type="email"
                />

                <label
                  className="font-semibold text-lg mt-3"
                  htmlFor="password"
                >
                  Password
                </label>
                <p className="text-sm text-red">{errors.password}</p>
                <Field
                  className="input"
                  id="password"
                  name="password"
                  placeholder="***************"
                  type="password"
                />

                <button className="primary-btn mt-6 " type="submit">
                  Sign in
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
