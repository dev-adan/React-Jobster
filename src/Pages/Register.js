import { useState,useEffect } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo, FormRow } from "../Components";
import {toast} from 'react-toastify';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from 'react-router-dom';


const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
 const{user, isLoading} =  useSelector(store => store.user)
 const dispatch = useDispatch()
const navigate = useNavigate()

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
      return;
    }

    if(isMember){
  
      dispatch(loginUser({email,password}))
      return;
    }

    dispatch(registerUser({name,email,password}))


  };

  const toggleMember = () => {
    setValues({...values,isMember : !values.isMember})
  }

  useEffect(() => {

    if(user){
      setTimeout(() => {

        navigate('/')

      },1000)
    }

  },[user])

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
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          { isLoading ? 'loading...' : 'submit'}
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
