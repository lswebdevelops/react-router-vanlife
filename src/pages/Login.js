import React from "react"
import { useLoaderData, useNavigate, Form } from "react-router-dom"
import { loginUser } from "../api"

export async function action(obj) {
    console.log("action function");
    return null
}
export function loader({ request }) {
  return new URL(request.url).searchParams.get("message")
}

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)
    const message = useLoaderData()
    const navigate = useNavigate()

  

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h3 className="red">{message}</h3>}
            {error && <h3 className="red">{error.message}</h3>}

            <Form
              method="post"
              className="login-form">
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                    
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    
                />
                <button 
                    disabled={status === "submitting"}
                >
                    {status === "submitting" 
                        ? "Logging in..." 
                        : "Log in"
                    }
                </button>
            </Form>
        </div>
    )
}
