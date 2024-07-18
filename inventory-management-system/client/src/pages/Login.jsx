import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import TokenDecoder from "../services/TokenDecoder";
import axios from "axios";


function Login() {
    const [values, setValues] = useState({
        username: '',
        password: '',
    })
	const [isMasterAdmin, setIsMasterAdmin] = useState(false);

	useEffect(() => {
		const checkAdminStatus = async () => {
			const status = await TokenDecoder.isMasterAdmin();
			setIsMasterAdmin(status);
		};
		checkAdminStatus();
	}, []);

    axios.defaults.withCredentials = true;

	const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8001/login', values)
        .then(res => {
            if(res.data.Status === "Success") {
				if(isMasterAdmin) {
					navigate('/ViewAll')
				} else {
					navigate('/ViewItems') // change to dashboard when completed
				}
                
            } else {
                alert("Error");
            }
        })
        .then(err => console.log(err));
    }


	return (
		<div className="d-flex justify-content-center align-items-center bg-primary vh-100">
			<div className="bg-white p-3 rounded w-25">
				<h2>Login</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="username">
							<strong>Username</strong>
						</label>
						<input
							type="text"
							placeholder="Enter Username"
							name="username"
							className="form-control rounded-0"
                            autoComplete="off"
                            onChange={e => setValues({...values, username: e.target.value})}
						/>
					</div>
                    <div className="mb-3">
						<label htmlFor="password">
							<strong>Pasword</strong>
						</label>
						<input
							type="password"
							placeholder="Enter Password"
							name="password"
							className="form-control rounded-0"
                            autoComplete="off"
                            onChange={e => setValues({...values, password: e.target.value})}
						/>
					</div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
