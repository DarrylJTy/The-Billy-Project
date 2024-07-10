import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Login.css";

function Login(props: any) {
	const [error, setError] = useState("");

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault(); // Prevent default form submission
		setError("");

		const username = (event.target as HTMLFormElement).elements.namedItem(
			"username"
		)?.value;
		const password = (event.target as HTMLFormElement).elements.namedItem(
			"password"
		)?.value;

		try {
			const response = await axios.post("/api/login", {
				username,
				password,
			});

			console.log("Login successful:", response.data);

			// Handle successful login (e.g., store token, redirect to dashboard)
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.log("Axios Error:");
			} else {
				console.error("Error:", error);
				setError("An unexpected error occurred.");
			}
		}
	};

	return (
		<>
			<div className="wrapper d-flex align-items-center justify-content-center">
				<div className="login">
					<h2>Login</h2>
					<form onSubmit={onSubmit}>
						<div className="form-group mb-2">
							<label htmlFor="username" className="form-label">
								Username
							</label>
							<input
								type="text"
								className="form-control"
								id="username"
								name="username"
								required
							/>
						</div>
						<div className="form-group mb-2">
							<label htmlFor="password" className="form-label">
								Password
							</label>
							<input
								type="password"
								className="form-control"
								id="password"
								name="password"
								required
							/>
						</div>
						<button
							type="submit"
							className="btn btn-success mt-2 block"
						>
							Sign In
						</button>
						{error && <p className="text-danger mt-2">{error}</p>}
					</form>
				</div>
			</div>
		</>
	);
}

export default Login;
