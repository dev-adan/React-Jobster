import { useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo, FormRow } from "../Components";
import {toast} from 'react-toastify'

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setValues({...values,[name] : value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name,email,password,isMember} = values;

    if(!email || !password || (!isMember && !name)){
      toast.error('Please fill out all the fields');
    }

  };

  const toggleMember = () => {
    setValues({...values,isMember : !values.isMember})
  }

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>

        {
        !values.isMember && <FormRow
          type="text"
          name="name"
          value={values.name}
          handleChange={handleChange}
        />
        }

       

        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />

        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>

        
        <p>
            {values.isMember ? 'Not a member yet?' : 'Already a member?'}
             <button className="member-btn" type="button" onClick={toggleMember}>
               {values.isMember ? 'Register' : 'Login'}
                </button>
        </p>


      </form>
    </Wrapper>
  );
};

export default Register;
