import React,{ Fragment, useEffect,useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link,useHistory } from 'react-router-dom';
import {createUser} from "../features/Signup";

function Signup() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const saveDetails = () =>{
        if(name && email && password){
            history.push("/login")
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
                                    <h2 class="fw-bold mb-2 text-uppercase">Create an Acount</h2>

                                    <div class="form-outline form-white mb-4">
                                        <label class="form-label" for="typeEmailX">Username</label>
                                        <input 
                                            type="text" 
                                            value={name} 
                                            onChange={(e)=>setName(e.target.value)} 
                                            class="form-control form-control-lg" 
                                        />
                                    </div>

                                    <div class="form-outline form-white mb-4">
                                        <label class="form-label" for="typeEmailX">Email</label>
                                        <input 
                                            type="email" 
                                            value={email} 
                                            onChange={(e)=>setEmail(e.target.value)} 
                                            class="form-control form-control-lg" 
                                        />
                                    </div>

                                    <div class="form-outline form-white mb-3">
                                        <label class="form-label" for="typePasswordX">Password</label>
                                        <input 
                                            type="password" 
                                            value={password} 
                                            onChange={(e)=>setPassword(e.target.value)} 
                                            class="form-control form-control-lg" 
                                        />
                                    </div>

                                    <button 
                                        class="btn btn-outline-light btn-lg px-5" 
                                        type="submit" 
                                        onClick={() => {
                                            dispatch(createUser({name,email,password}));
                                            saveDetails()
                                        }} 
                                    >Register</button>
                                </div>
                                <div>
                                    <p class="">Have already an account?<Link to="/login" class=" fw-bold">Login here</Link><a href="#!" class=" fw-bold"></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signup
