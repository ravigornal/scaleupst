import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Routes, Switch, Route, Link,useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Signin() {
    const history = useHistory();

    const userData = useSelector((state) => state)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () =>{
        if(userData.user.email == email && userData.user.password == password){
            history.push("/home");
            window.localStorage.setItem("isAuthenticated",true);
        }
    }

    return (
        <section class="vh-100 gradient-custom">
            <div class="container py-2 h-100">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card bg-dark text-white" style={{borderRadius: "1rem"}}>
                            <div class="card-body p-5 text-center">
                                <div class="mb-md-2 mt-md-4 pb-1">
                                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p class="text-white-50 mb-5">Please enter your email and password!</p>
                                    <div class="form-outline form-white mb-4">
                                        <label class="form-label" for="typeEmailX">Email</label>
                                        <input 
                                            type="email" 
                                            class="form-control form-control-lg" 
                                            value={email} 
                                            onChange={(e)=>setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div class="form-outline form-white mb-3">
                                        <label class="form-label" for="typePasswordX" >Password</label>
                                        <input 
                                            type="password" 
                                            class="form-control form-control-lg" 
                                            value={password} 
                                            onChange={(e)=>setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <p class="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                                    </div>
                                    <button 
                                        class="btn btn-outline-light btn-lg px-5" 
                                        type="submit" 
                                        onClick={login}
                                    >Login</button>
                                </div>
                                <div>
                                    <p class="">Don't have an account? <Link to="/signup" class=" fw-bold">Sign Up</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signin
