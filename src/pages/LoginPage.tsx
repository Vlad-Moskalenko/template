import { NavLink } from 'react-router-dom';
import { LoginForm } from 'src/components';

function LoginPage() {
  return (
    <>
      <LoginForm />
      <p>
        Don’t have an account?
        <NavLink to="/register">
          <b>Join to us</b>
        </NavLink>
      </p>
    </>
  );
}

export default LoginPage;
