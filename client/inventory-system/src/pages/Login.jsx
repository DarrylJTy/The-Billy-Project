import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import server from "../services/config";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import "../css/Login.css"

function Login() {
    const [values, setValues] = useState({
        username: '',
        password: '',
	})
	const [passwordVisible, setPasswordVisible] = useState(false); 

    axios.defaults.withCredentials = true;

	const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${server.hostname}/login`, values)
        .then(res => {
			if (res.data.Status === "Success") {
				// navigate("/dashboard");
				localStorage.setItem('token', res.data.token);
				const token = localStorage.getItem('token');
				console.log("token:",token);
            } else {
                alert("Error");
            }
        })
        .catch(err => console.log(err));
    }


	return (
		<Container fluid className="vh-100">
            <Row className="h-100 m-0">
				{/* Logo Column */}
				<Col md={7} className="d-flex justify-content-center align-items-center p-0">
					<img
						src="https://firebasestorage.googleapis.com/v0/b/the-billy-imgdb.appspot.com/o/mrbillylogorevamp.png?alt=media&token=b1def480-411a-420b-9b46-7bd30103452d"
						alt="Logo"
						className="img-fluid w-80 h-40"
					/>
				</Col>

				{/* Login Form Column */}
				<Col md={5} className="d-flex justify-content-center align-items-center p-0">
					<div className="login-form-container">
						<Form onSubmit={handleSubmit} className="w-100 p-4">
							<Form.Group controlId="formBasicUsername" className="mb-3">
								<Form.Label><strong>Username</strong></Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter Username"
									value={values.username}
									onChange={e => setValues({ ...values, username: e.target.value })}
									autoComplete="off"
								/>
							</Form.Group>

							<Form.Group controlId="formBasicPassword" className="mb-3">
								<Form.Label><strong>Password</strong></Form.Label>
								<div className="input-group password-input">
									<Form.Control
										type={passwordVisible ? "text" : "password"}
										placeholder="Enter Password"
										value={values.password}
										onChange={e => setValues({ ...values, password: e.target.value })}
										autoComplete="off"
									/>
									<Button
										variant="outline-danger"
										className="input-group-text"
										onClick={() => setPasswordVisible(!passwordVisible)}
									>
										{passwordVisible ? <EyeSlash size={20} /> : <Eye size={20}/>}
									</Button>
								</div>
								
							</Form.Group>

							<Button variant="danger" type="submit" className="w-100 rounded-0">
								Log in
							</Button>
						</Form>
					</div>
				</Col>
			</Row>
        </Container>
	);
}

export default Login;
