import React from "react";

import { useForm } from "react-hook-form";

import "./style.css";
function Signup() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    // const onSubmit = (data) => {
    //     console.log(data);
    //     reset({
    //         firstName: "",
    //         lastName: "",
    //         password: "",
    //         email: "",
    //     });
    // };
    const onSubmit = async (data) => {
        try {
            const response = await fetch("http://localhost:5000/storedata", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log("Data successfully sent to the backend");
                // Optionally, reset the form after successful submission
                reset({
                    firstName: "",
                    lastName: "",
                    password: "",
                    email: "",
                });
            } else {
                console.error("Failed to send data to the backend");
            }
        } catch (error) {
            console.error("Error while sending data to the backend", error);
        }
    };
    return (
        <div className="container ">
            <h1>Add details</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-sm-12 ">
                        <label className="form-group" htmlFor="firstName ">
                            First Name:
                        </label>{" "}
                        <br />
                        <input
                            type="text"
                            id="firstName "
                            name="firstName"
                            className="form-control input"
                            {...register("firstName", {
                                required: "firstName is required",
                                minLength: {
                                    value: 3,
                                    message:
                                        "firstName should contain a minimum of 3 characters",
                                },
                            })}
                        />
                        <p className="error">{errors.firstName?.message}</p>
                    </div>

                    <div className="col-12 ">
                        <label className="form-group " htmlFor="lastName">
                            lastName
                        </label>
                        <br />
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="form-control input"
                            {...register("lastName", {
                                required: "lastName is required",
                            })}
                        />
                        <p className="error">{errors.lastName?.message}</p>
                    </div>
                    <div className="col-12 ">
                        <label className="form-group" htmlFor="email">
                            Email
                        </label>
                        <br />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control input"
                            {...register("email", {
                                required: "email is required",
                            })}
                        />
                        <p className="error">{errors.password?.message}</p>
                    </div>
                    <div className="col-12 ">
                        <label className="form-group" htmlFor="password">
                            password
                        </label>
                        <br />
                        <input
                            type="text"
                            id="password"
                            name="password"
                            className="form-control input"
                            {...register("password", {
                                required: "password is required",
                            })}
                        />
                        <p className="error">{errors.password?.message}</p>
                    </div>

                    <div className="button">
                        <button className="btn btn-primary" type="submit">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Signup;
