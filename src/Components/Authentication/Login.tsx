import React, { Fragment, useState } from 'react';

const Login = () => {
	const [data, setData] = useState({
		email: '',
		password: '',
	});
    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setData({ ...data, [event.target.name]: event.target.value });
	};

	// useEffect(() => {
	// 	if (submitted && !user.error) {
	// 		localStorage.setItem('token', user.user.data.token);
	// 		props.history.push('/calendar');
	// 	}
	// 	if (localStorage.getItem('token')) {
	// 		props.history.push('/calendar');
	// 	}
	// });

	const submit = async () => {};
	return (
		<Fragment>
			<div className="form-sign-in d-flex flex-column m-auto">
				<img
					className="mb-4"
					src="https://15logo.net/wp-content/uploads/2017/06/power-fitness-800x800.jpg"
					alt=""
					width="72"
					height="72"
				/>
				<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
				{/* {user.error ? <p className="text-danger">{user.error}</p> : ''} */}
				<input
					type="email"
					id="inputEmail"
					className="form-control my-3"
					placeholder="Email address"
					required={true}
					name="email"
					onChange={onChangeInput}
				/>
				<input
					type="password"
					id="inputPassword"
					className="form-control"
					placeholder="Password"
					required={true}
					name="password"
					onChange={onChangeInput}
				/>
				<button className="btn my-4 btn-lg btn-primary btn-block" type="submit" onClick={submit}>
					Sign in
				</button>
				<p className=" mb-3 text-muted">© 2020-2020</p>
			</div>
		</Fragment>
	);
};

export default Login;
