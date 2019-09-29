import {Link, useLocation} from "wouter";
import React, {useState} from 'react'
import {login, useUser} from "../store/user";
import {setToken} from "../store/api";

export default function Login() {
	const {setUser} = useUser()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState(null)
	const [, setLocation] = useLocation();
    const handleSubmitForm = (e) => {
        e.preventDefault()
        login({email, password}).then((res: any) => {
			console.log(res)
            if (res.user) {
				setUser(res.user)
                setToken(res.user.token)
				setLocation('/')
			} else if (res.errors) {
				setErrors(res.errors)
			}
        })
    }
    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">

                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Sign In</h1>
                        <p className="text-xs-center">
                            <Link to="register">
                                Need an account?
                            </Link>
                        </p>

                        {errors && <ListErrors errors={errors}/>}

                        <form onSubmit={handleSubmitForm}>
                            <fieldset>

                                <fieldset className="form-group">
                                    <input
                                        className="form-control form-control-lg"
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </fieldset>

                                <fieldset className="form-group">
                                    <input
                                        className="form-control form-control-lg"
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                    />
                                </fieldset>

                                <button
                                    className="btn btn-lg btn-primary pull-xs-right"
                                    type="submit"
                                    // disabled={inProgress}
                                >
                                    Sign in
                                </button>

                            </fieldset>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}


const ListErrors = ({errors}) => {
    return (
        <ul className="error-messages">
            {
                Object.keys(errors).map(key => {
                    return (
                        <li key={key}>
                            {key} {errors[key]}
                        </li>
                    );
                })
            }
        </ul>
    );
}
