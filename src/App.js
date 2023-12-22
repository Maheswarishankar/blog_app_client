import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Pages/Login';
import Register from './Pages/Register'
import CreateBlog from './Pages/CreateBlog';
import Blog from './Pages/Blog';
import UserBlog from './Pages/UserBlog';
import BlogDetails from './Pages/BlogDetails';
import Home from './Components/Home';
import { Toaster } from 'react-hot-toast';

export const URL="https://blog-app-server-hca0.onrender.com";


function App() {

  return <>
    <Header />
    <Toaster/>
    <Routes>
      <Route path='/' element={<Home/>}/>    
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/create-blog' element={<CreateBlog />} />
      <Route path='/blogs' element={<Blog />} />
      <Route path='/my-blogs' element={<UserBlog />} />
      <Route path='/blog-details/:id' element={<BlogDetails />} />

    </Routes>

  </>
}

export default App;
