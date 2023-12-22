import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../Redux/Store';
import toast from 'react-hot-toast';
import { URL } from '../App';
 


const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  //state
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  //handle input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //form handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const { data } = await axios.post(`${URL}/api/user/login`, {
        email: inputs.email,
        password: inputs.password,

        
      });
      console.log(data)
      if (data.success) {
        localStorage.setItem("userId", data?.user._id);
        dispatch(authActions.login());
        toast.success("User login Successfully");
        navigate("/create-blog");
      }
    } catch (error) {
      console.log(error);
      
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={450}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={8}
          boxShadow="20px 20px 30px #000"
          padding={4}
          borderRadius={5}
        >
          <Typography
            variant="h5"
            sx={{ textTransform: "uppercase" }}
            padding={3}
            textAlign="center"
            
          >
            Login
          </Typography>

          <TextField
            
            placeholder="email"
            value={inputs.email}
            name="email"
            margin="normal"
            type={"email"}
            required
            onChange={handleChange}
          />
          <TextField
          
            placeholder="password"
            value={inputs.password}
            name="password"
            margin="normal"
            type={"password"}
            required
            onChange={handleChange}
          />

          <Button className='btn'
            type="submit"
            sx={{ borderRadius: 3, marginTop: 3 }}
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
          <Button
            onClick={() => navigate("/register")}
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            Not a user ? Please Register

          </Button>
         
        </Box>
       
      </form>

    </>
  )
}

export default Login