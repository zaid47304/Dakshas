import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Admin = (props) => {
    const [credentials, setcredentials] = useState({ username: "", email: "", password: "", cpassword: "", mob: "" });
    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    const [hcredentials, sethcredentials] = useState({ username: "", email: "", password: "", cpassword: "", pincode: "", specialities: "", mbno: "" });
    const onChange2 = (e) => {
        sethcredentials({ ...hcredentials, [e.target.name]: e.target.value });
    };
    let history = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (credentials.password === credentials.cpassword) {
            var response = await fetch(`http://127.0.0.1:8000/healthcare/register_param/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: credentials.username, email: credentials.email, password: credentials.password , first_name: '', last_name:'', mobile: credentials.mob})
            });
            var json = await response.json();
            console.log('Hi')
            console.log(json)
            if (json.Success) {
                props.showAlert("Successfully registered ", "success")
                // save the auth-token and redirect
                // localStorage.setItem('token', json.authtoken)
                // redirect karne ke liye usehistory(jo aab useNavigate hogya hai) hook ka use karunga
                history("/login")
            }
            else {
                props.showAlert("Failed to signup", "danger");
            }
        }
        else {
            props.showAlert("passwords do not match", "danger")
        }

    }
    const handleSubmit2 = async (e) => {
        e.preventDefault();
        if (hcredentials.password === hcredentials.cpassword) {
            var response = await fetch(`http://127.0.0.1:8000/healthcare/register_hcsp/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: hcredentials.username,  password: hcredentials.password , email: hcredentials.email, first_name: '', last_name:'', mobile: hcredentials.mbno, pincode: hcredentials.pincode, specialization: hcredentials.specialities} )
            });
            console.log("Hi")
            var json = await response.json();
            console.log("Hi2")
            console.log(json.Success)
            if (json.Success) {
                props.showAlert("Successfully registered ", "success")
                // save the auth-token and redirect
                // localStorage.setItem('token', json.authtoken)
                // redirect karne ke liye usehistory(jo aab useNavigate hogya hai) hook ka use karunga
                history("/login")
            }
            else {
                props.showAlert("Failed to signup", "danger");
            }
        }
        else {
            props.showAlert("passwords do not match", "danger")
        }

    }
    return (
        <div className="container login-container" >
            <div className="row" style={{height:"75%"}}>
                <div className="col-md-6 login-form-1" >
                    <h3>Register a new Paramedic
                    </h3>
                    <img style={{height:"8rem"}} src='https://thumbs.dreamstime.com/b/picture-paramedic-picture-paramedic-front-ambulance-car-hospital-building-106169326.jpg' alt=''></img>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor='ex3'>Userame or Id</label>
                            <input type="text" id='username' name='username' className="form-control" placeholder="Your UserName *" value={credentials.username} onChange={onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor='ex3'>Email</label>
                            <input type="text" id='email1' name='email' className="form-control" placeholder="Your Email *" value={credentials.email} onChange={onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor='ex3'>Password</label>
                            <input type="password" id='password1' name='password' className="form-control" placeholder="Your Password *" value={credentials.password} onChange={onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor='ex3'>Confirm Password</label>
                            <input type="password" id='cpassword1' name='cpassword' className="form-control" value={credentials.cpassword} onChange={onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor='ex3'>Mobile Number</label>
                            <input type="text" id='mob1' name='mob' className="form-control" placeholder="Enter without 0 or country code *" value={credentials.mob} onChange={onChange} />
                        </div>
                        <div className="form-group">
                            <input type="submit" name='name' className="btnSubmit" value="Submit" />
                        </div>
                    </form>
                </div>
                <div className="col-md-6 login-form-2">
                    <h3>Register a new Healthcare</h3>
                    <img style={{height:"8rem"}} src='https://www.technewsworld.com/wp-content/uploads/sites/3/2022/02/medical-doctors.jpg'></img>
                    <form onSubmit={handleSubmit2}>
                        <div className="form-group">
                            <label htmlFor='ex3' className="ForgetPwd">Userame or Id</label>
                            <input type="text" id='username2' name='username' className="form-control" placeholder="Your UserName" value={hcredentials.username} onChange={onChange2} />
                        </div>
                        <div className="form-group">
                            <label htmlFor='ex3' className="ForgetPwd">Email</label>
                            <input type="text" id='email2' name='email' className="form-control" placeholder="Your Email" value={hcredentials.email} onChange={onChange2} />
                        </div>
                        <div className="form-group">
                            <label htmlFor='ex3' className="ForgetPwd">Password</label>
                            <input type="password" id='password2' name='password' className="form-control" placeholder="Your Password *" value={hcredentials.password} onChange={onChange2} />
                        </div>
                        <div className="form-group">
                            <label htmlFor='ex3' className="ForgetPwd">Confirm Password</label>
                            <input type="password" id='cpassword2' name='cpassword' className="form-control" value={hcredentials.cpassword} onChange={onChange2} />
                        </div>
                        <div className="form-group">
                            <label htmlFor='ex3' className="ForgetPwd">Specialities</label>
                            <input type="text" id='specialities' name='specialities'multiple size="5" className="form-control" value={hcredentials.specialities} onChange={onChange2} />
                                    </div>
                                    <div className="form-group">
                                        <label className="ForgetPwd" htmlFor='ex3'>PinCode</label>
                                        <input type="text" id='pincode2' name='pincode' className="form-control" value={hcredentials.pincode} onChange={onChange2} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor='ex3' className="ForgetPwd">Mobile Number</label>
                                        <input type="text" id='mbno' name='mbno' className="form-control" value={hcredentials.mbno} onChange={onChange2} />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btnSubmit" value="Submit" />
                                    </div>
                                </form>
                        </div>
                </div>
            </div>
            )
}

            export default Admin