import React from 'react'

import './LoginPage.css';
import { useForm } from '../../hooks';

const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
};
const signUpFormFields = {
    signUpName: '',
    signUpEmail: '',
    signUpPassword: '',
    signUpConfirmPassword: ''
};

export const LoginPage = () => {

    const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm(loginFormFields);
    const { signUpName, signUpEmail, signUpPassword, signUpConfirmPassword, onInputChange: onRegisterInputChange,  } = useForm(signUpFormFields);

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Login</h3>
                    <form>
                        <div className="form-group mb-2">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                name="loginEmail"
                                value={ loginEmail }
                                onChange={ onLoginInputChange }
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="loginPassword"
                                value={ loginPassword }
                                onChange={ onLoginInputChange }
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Sign In</h3>
                    <form>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="signUpName"
                                value={signUpName}
                                onChange={onRegisterInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name="signUpEmail"
                                value={signUpEmail}
                                onChange={onRegisterInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password" 
                                name="signUpPassword"
                                value={signUpPassword}
                                onChange={onRegisterInputChange}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm Password" 
                                name="signUpConfirmPassword"
                                value={signUpConfirmPassword}
                                onChange={onRegisterInputChange}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Create Account" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}