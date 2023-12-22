import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box ,Button,InputLabel,TextField,Typography } from '@mui/material';
import toast from 'react-hot-toast';
import { URL } from '../App';


const CreateBlog = () => {

  const id = localStorage.getItem("userId");
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: "",
  });
  // input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  //form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${ URL }/api/blog/create-blog`, {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user: id,
      });
      if (data?.success) {
        toast.success("Blog Created Successfully");
        navigate("/my-blogs");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          width={"50%"}
          border={3}
          borderRadius={7}
          padding={2}
          margin="auto"
          boxShadow={"10px 10px 20px #ccc"}
          display="flex"
          flexDirection={"column"}
          marginTop="20px"
          marginBottom="20px"
        >
          <Typography
            variant="h3"
            textAlign={"center"}
            fontWeight="bold"
            padding={3}
            color="rgb(12, 12, 88)"
          >
            Create A Blogs
          </Typography>
          <InputLabel
            sx={{ mb: 1, mt: 1.5, fontSize: "20px", fontWeight: "bold" }}
          >
            Title
          </InputLabel>
          <TextField
            name="title"
            value={inputs.title}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <InputLabel
            sx={{ mb: 1, mt:.5, fontSize: "20px", fontWeight: "bold" }}
          >
            Description
          </InputLabel>
          <TextField
            name="description"
            value={inputs.description}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <InputLabel
            sx={{ mb: 1, mt: 2, fontSize: "20px", fontWeight: "bold" }}
          >
            Image URL
          </InputLabel>
          <TextField
            name="image"
            value={inputs.image}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <Button className='create-btn' type="submit" color="primary" variant="contained">
            SUBMIT
                      </Button>
                    
        </Box>
       
      </form>
    </>
  )
}

export default CreateBlog