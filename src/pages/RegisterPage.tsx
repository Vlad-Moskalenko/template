import { NavLink } from 'react-router-dom';

import { RegisterForm } from 'src/components';

function RegisterPage() {
  return (
    <>
      <RegisterForm />
      <p>
        Already have an account?
        <NavLink to="/login">Login</NavLink>
      </p>
    </>
  );
}

export default RegisterPage;
