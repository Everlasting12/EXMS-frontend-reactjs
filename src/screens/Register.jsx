import React from "react";

//svgs
import LoginImage from "../assets/login-image-blue.svg";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerAction } from "../redux/actions/registerAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const EnumRole = {
  Admin: "admin",
  "Primary User": "primary user",
  Member: "member",
};

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("Please enter your firstname")
    .min(5)
    .max(50),
  lastName: yup.string().required("Please enter your lastname").min(2).max(50),
  email: yup.string().required("Please enter your Email id"),
  phone: yup.string().required("Please enter your Phone Number").min(7).max(10),
  userName: yup.string().required("Please enter your Username").min(5).max(100),
  password: yup
    .string()
    .min(5)
    .max(1024)
    .required("Please enter your Password"),

  role: yup
    .mixed()
    .oneOf(Object.values(Object.values(EnumRole)))
    .required(),
});

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function submitSignUp(data) {
    dispatch(registerAction(data));
    navigate("/login");
  }

  const isAdmin = "l";
  return (
    <div className="h-screen w-full flex justify-around items-center bg-slate-200">
      <div className="text-center hidden lg:block">
        <img src={LoginImage} alt="login_image" width={400} />
        <h4 className="mt-4 text-xl font-semibold">
          Let us help you, <br /> Manage your{" "}
          <span className="font-bold text-sky-600">Expense</span>
        </h4>
      </div>
      <div className="h-[544px] mt-[-40px] bg-white w-[90%] sm:w-[60%] md:w-[50%] lg:w-[30%] px-5 py-1 shadow-md rounded-md">
        <form
          onSubmit={handleSubmit(submitSignUp)}
          className="text-sm flex flex-col justify-between"
        >
          <div>
            <h2 className="text-center text-xl mt-2">Register</h2>
            <hr className="my-2 border-2 border-sky-500 rounded-md" />

            <div className="flex">
              <div className="mr-[2px]">
                <label htmlFor="firstname">
                  Firstname
                  <input
                    type="text"
                    id="firstname"
                    {...register("firstName")}
                    className="outline-none w-full py-2 px-3 rounded border-2 focus:border-2 focus:border-sky-500"
                  />
                </label>
                <p className="text-red-400 text-sm">
                  {errors.firstName?.message}
                </p>
              </div>
              <div className="ml-[2px]">
                <label htmlFor="lastName">
                  Lastname
                  <input
                    type="text"
                    id="lastName"
                    {...register("lastName")}
                    className="outline-none w-full py-2 px-3 rounded border-2 focus:border-2 focus:border-sky-500"
                  />
                </label>
                <p className="text-red-400 text-sm">
                  {errors.lastName?.message}
                </p>
              </div>
            </div>
            <div className="">
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className="outline-none w-full py-2 px-3 rounded border-2 focus:border-2 focus:border-sky-500"
                />
              </label>
              <p className="text-red-400 text-sm">{errors.email?.message}</p>
            </div>
            <div className="">
              <label htmlFor="phone">
                Phone Number
                <input
                  type="text"
                  id="phone"
                  {...register("phone")}
                  className="outline-none w-full py-2 px-3 rounded border-2 focus:border-2 focus:border-sky-500"
                />
              </label>
              <p className="text-red-400 text-sm">{errors.phone?.message}</p>
            </div>
            <div className="">
              <label htmlFor="userName">
                Username
                <input
                  type="userName"
                  id="userName"
                  {...register("userName")}
                  className="outline-none w-full py-2 px-3 rounded border-2 focus:border-2 focus:border-sky-500"
                />
              </label>
              <p className="text-red-400 text-sm">{errors.userName?.message}</p>
            </div>
            <div className="">
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  id="password"
                  {...register("password")}
                  className="outline-none w-full py-2 px-3 rounded border-2 focus:border-2 focus:border-sky-500"
                />
              </label>
              <p className="text-red-400 text-sm">{errors.password?.message}</p>
            </div>
            <div className="">
              <label htmlFor="role">Role</label>
              <select
                name="role"
                id="role"
                {...register("role")}
                className="outline-none w-full py-2 px-3 rounded border-2 focus:border-2 focus:border-sky-500"
              >
                <option value="">select role</option>

                {isAdmin === "admin" ? (
                  <option value="admin">admin</option>
                ) : (
                  ""
                )}
                {["primary user", "member"].map((role) => {
                  return (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  );
                })}
              </select>
              <p className="text-red-400 text-sm">{errors.password?.message}</p>
            </div>
          </div>
          <div className="mt-3 flex">
            <button
              type=""
              className=" mr-1 px-4 py-3 flex-1 bg-sky-600 text-white rounded hover:bg-sky-700"
            >
              Create Account
            </button>
            <button
              className=" ml-1 px-4 py-3 flex-1 shadow text-black rounded hover:bg-sky-600 hover:text-white"
              type="reset"
              onClick={reset}
            >
              Reset
            </button>
          </div>
        </form>
        <div className="text-end text-sm mt-1">
          <a href="#" className="px-2 py-1 text-sky-500 rounded">
            forget password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
