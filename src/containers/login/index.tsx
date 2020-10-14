import React, { FormEvent, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect, useDispatch } from "react-redux";
import login, { fetchUser } from "../../actions/login";
import { useHistory } from "react-router-dom";

interface Props {
  isAuthenticated: boolean,
  history: any,
  LoginPage: any
}

const LoginPage = (props: Props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isAuthenticated } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const hanldeEmail = (
    event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const hanldePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    // dispatch(login(username, password));  // thunk's code
    dispatch(fetchUser(username, password)); // saga'code
    localStorage.setItem('token', props.LoginPage.token);
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    } else {
      history.push('/login');
    }
  }, [isAuthenticated]);

  return (
    <div className="container">
      <div className="col-md-5 m-auto">
        <form className="p-5 rounded-sm shadow text-center" onSubmit={submit}>
          <h1 className="text-info">Review App</h1>
          <input
            type="email"
            className="form-control form-control-lg mb-4"
            placeholder="Email"
            onChange={hanldeEmail}
          />
          <input
            type="password"
            className="form-control form-control-lg mb-4"
            placeholder="Password"
            onChange={hanldePassword}
          />
          <button type="submit" className="btn btn-info btn-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const mapState = (state: any) => ({
  LoginPage: state.loginReducer,
  isAuthenticated: state.homeReducer.isAuthenticated
})

export default connect(mapState)(LoginPage);
