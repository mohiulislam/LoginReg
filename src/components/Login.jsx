import { useFormik } from "formik";
import Joi from "joi";
import MainLayout from "./Layouts.jsx/MainLayout";

const validationSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(8).required(),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const { error } = validationSchema.validate(values, {
        abortEarly: false,
      });
      if (error) {
        return error.details.reduce(
          (errors, { message, path }) => ({
            ...errors,
            [path[0]]: message,
          }),
          {}
        );
      }
      return {};
    },
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
  });

  return (
    <MainLayout>
      <div className="mt-60 flex items-center justify-center">
        <form onSubmit={formik.handleSubmit} className="w-3/5 ">
          <div className="mb-4">
            <label htmlFor="email" className="block text-white mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="w-full px-3 py-2 rounded-md  focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-slate-900 outline-none"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 mt-1">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="password" className="block mb-2 text-white">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="w-full px-3 py-2  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-slate-900 "
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 mt-1">{formik.errors.password}</div>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full px-4 py-2 bg-cyan-400 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            {formik.isSubmitting ? "Login..." : "Login"}
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default Login;
