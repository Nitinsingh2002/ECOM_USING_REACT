import { useFormik } from "formik";
import * as yup from 'yup'
import Divider from '@mui/material/Divider';
import "./signUp.css";

export default function SignUp() {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: yup.object({
            name: yup.string().required("Name is required").min(4, "Name is too short").max(20, "Name is too long"),
            email: yup.string().email("Invalid email address").required("Email is required"),
            password: yup.string().required("Password is required").matches(/(?=.*[A-Z])\w{4,15}/, "Password must be 4 to 15 characters and contain at least one uppercase letter"),
            confirmPassword: yup.string().required("Confirm password is required").oneOf([yup.ref('password')], "Passwords must match")
        }),
        onSubmit: values => {
            alert(JSON.stringify(values));
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit} className="form_container">
                <h3 className="text-center">Busy Buy</h3>
                <div className="form-group mb-2">
                    <label htmlFor="name" className="mb-1 fw-bold">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" onChange={formik.handleChange} value={formik.values.name} />
                    {formik.errors.name && formik.touched.name && <div className="text-danger">{formik.errors.name}</div>}
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="email" className="mb-1 fw-bold">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={formik.handleChange} value={formik.values.email} />
                    {formik.errors.email &&  formik.touched.email && <div className="text-danger"> {formik.errors.email}</div>}
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="password" className="mb-1 fw-bold">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" onChange={formik.handleChange} value={formik.values.password} />
                    {formik.errors.password &&  formik.touched.password && <div className="text-danger"> {formik.errors.password}</div>}
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="confirmPassword" className="mb-1 fw-bold">Confirm password</label>
                    <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" onChange={formik.handleChange} value={formik.values.confirmPassword} />
                    {formik.errors.confirmPassword && formik.touched.confirmPassword &&  <div className="text-danger"> {formik.errors.confirmPassword}</div>}
                </div>

                <button type="submit" className="btn btn-primary mt-1" style={{ width: '100%' }}>Submit</button>

                <Divider className="mt-2 mb-1">or</Divider>

                <p className="text-center">Already have an account? Sign in</p>
            </form>
        </>
    );
}
