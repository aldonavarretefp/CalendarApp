import React, { useEffect } from 'react'

import './LoginPage.css';
import { useAuthStore, useForm } from '../../hooks';
import Swal from 'sweetalert2';

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
    const { startLogin, startRegister, errorMessage } = useAuthStore();

    const handleLogin = (e) => {
        e.preventDefault();
        startLogin({ email: loginEmail, password: loginPassword });
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if (signUpPassword !== signUpConfirmPassword) {
            return Swal.fire('Error', 'Las contraseñas deben coincidir.', 'error');
        }
        startRegister({ name: signUpName, email: signUpEmail, password: signUpPassword });
    }

    useEffect(() => {
        if (errorMessage !== undefined) {
            Swal.fire('Error', errorMessage, 'error');
        }
    }, [errorMessage]);



    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Login</h3>
                    <form onSubmit={ handleLogin }>
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
                    <form onSubmit={handleRegister}>
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
                                value="Create Account" 
                            />
                                
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}