import "./LoginForm.css";

import { Link } from "react-router-dom";

const LoginForm = () => (
  <div className="container pt-3">
      <h2>Login</h2>
      <form>
        <label htmlFor="userName" className="form-label">{text}</label>
        <input className="form-control" id="userName" name="userName" />
        <button type="button" className="btn btn-outline-dark me-2">
          <Link to={`/edit/${document.getElementById("userName").value}`} />
        </button>
      </form>
  </div>
)

export default LoginForm;
