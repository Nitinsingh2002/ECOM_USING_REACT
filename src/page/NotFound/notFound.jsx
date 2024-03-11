import { Link } from "react-router-dom"



export const NotFound = () => {
    return (
        <>
            <div   className="text-center mt-5">
                <h2>Page not Found</h2>

                <p>
                    <Link to="/">
                        Back to home
                    </Link>
                </p>
            </div>
        </>
    )
}