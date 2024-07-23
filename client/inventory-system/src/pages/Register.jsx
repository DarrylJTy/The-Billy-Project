import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Register() {
    const [values, setValues] = useState({
        admin_id: '',
        username: '',
        password: '',
        role: '',
        branch_id: ''
    })

    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8001/register', values)
        .then(res => {
            if(res.data.Status === "Success") {
                navigate('/login');
            } else {
                alert("Error");
            }
        })
        .then(err => console.log(err));
    }

	return (
		<div className="d-flex justify-content-center align-items-center bg-primary vh-100">
			<div className="bg-white p-3 rounded w-25">
				<h2>Register</h2>
				<form onSubmit={handleSubmit}>
                <div className="mb-3">
						<label htmlFor="admin_id">
							<strong>Admin ID</strong>
						</label>
						<input
							type="text"
							placeholder="Enter Admin ID"
							name="admin_id"
							className="form-control rounded-0"
                            autoComplete="off"
                            onChange={e => setValues({...values, admin_id: e.target.value})}
						/>
					</div>
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
                    <div className="form-group mb-2">
                    <label htmlFor="role">
                        <strong>Role</strong>
                    </label>
                    <select
                        name="role"
                        className="form-control rounded-0"
                        onChange={e => setValues({...values, role: e.target.value})}
                    >
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="branch_user">Branch User</option>
                    </select>
                    </div>
                    <div className="mb-3">
						<label htmlFor="branch_id">
							<strong>Branch ID</strong>
						</label>
						<input
							type="text"
							placeholder="Enter Branch ID"
							name="branch_id"
							className="form-control rounded-0"
                            autoComplete="off"
                            onChange={e => setValues({...values, branch_id: e.target.value})}
						/>
					</div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
				</form>
			</div>
		</div>
	);
}

export default Register;
