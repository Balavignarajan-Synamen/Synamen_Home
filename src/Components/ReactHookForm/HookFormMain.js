import React from "react";
import { useForm } from "react-hook-form";
import "./HookFormMain.css";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const HookFormMain = () => {

  const schema = Yup.object().shape({
    firstName: Yup.string().required("first name is mandotary"),
    lastName: Yup.string().required("last name is mandotary"),
    email: Yup.string()
      .email("please enter valid email")
      .required("enter email"),
    age: Yup.number().typeError("Age is must be a Number").integer().positive().required(),
    password: Yup.string()
      .required()
      .min(4, "minimum 4 chars required")
      .max(15, "enter upto 15 chars only"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], 'password must match'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      HookFormMain
      <div className="Form2">
        <div className="title-form2">Signup</div>
        <div className="input-form2">
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <input {...register("firstName")} placeholder="First Name..." />
            {errors?.firstName && <p className="error">{errors.firstName.message}</p>}
            
            <input {...register("lastName")} placeholder="Last Name..." />
            {errors?.lastName && <p className="error">{errors.lastName.message}</p>}
            
            <input {...register("email")} placeholder="Email..." />
            {errors?.email && <p className="error">{errors.email.message}</p>}
            <input {...register("age")} placeholder="Age..." />
            {errors?.age && <p className="error">{errors.age.message}</p>}
            <input
              {...register("password")}
              type="password"
              placeholder="Password..."
            />
            {errors?.password && <p className="error">{errors.password.message}</p>}

            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirm Password..."
            />
            {errors?.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}

            <input type="submit" id="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default HookFormMain;
