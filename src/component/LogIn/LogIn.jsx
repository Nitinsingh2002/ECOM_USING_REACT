import { Divider } from "@mui/material"
import { useFormik } from "formik"
import * as yup from 'yup'




export default function Login() {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: yup.object({
            email: yup.string().email("Invalid email address").required("Email is required"),
            password: yup.string().required("Password is required")
        }),
        onSubmit: values => {
            alert(JSON.stringify(values))
        }

    })

    return (
        <>

            <form onSubmit={formik.handleSubmit} className="form_container">
                <h3 className="text-center">Busy Buy</h3>


                <div className="form-group mb-2">
                    <label htmlFor="email" className="mb-1 fw-bold">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={formik.handleChange} value={formik.values.email} />
                    {formik.errors.email && formik.touched.email && <div className="text-danger"> {formik.errors.email}</div>}
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="password" className="mb-1 fw-bold">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" onChange={formik.handleChange} value={formik.values.password} />
                    {formik.errors.password && formik.touched.password && <div className="text-danger"> {formik.errors.password}</div>}
                </div>


                <button type="submit" className="btn btn-primary mt-1" style={{ width: '100%' }}>Submit</button>

                <Divider className="mt-2 mb-1">or</Divider>

                <p className="text-center">Don't have account? Sign Up</p>
            </form>
        </>
    )
}