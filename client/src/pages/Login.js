import React, {useState, useEffect} from 'react'
import {Form, Input,message} from "antd";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';

// {/***Ant design uses onFinish***/}
const Login = () => {

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    // form submit
    const submitHandler = async(values) => {
        //    console.log(values)

        try {
           const {data} =  await axios.post("users/login", values)
         message.success("login success")
         localStorage.setItem("user", JSON.stringify({...data.user, password:""}))
         navigate("/")
        } catch (error) {
            setLoading(false)
            message.error("something went wrong")
        }
    }


     // prevent
     useEffect(()=>{

        // agar user milta hai toh homepage pe navigate karna hai
        if(localStorage.getItem("user")){
          navigate("/")
        }
      },[navigate])

      

    
  return (
    <>
    
    <div className="login-page">
    {loading && <Spinner/>}
      <Form layout="vertical" onFinish={submitHandler}>
      <h1>Login Form</h1>

      <Form.Item label="Email" name="email">
      <Input type="email"/>
      </Form.Item>

      <Form.Item label="Password" name="password">
      <Input type="password"/>
      </Form.Item>
          

      <div className="d-flex justify-content-between"> 
      <Link to="/Register">Haven't registered as a user? Click here to do so</Link>
      <button className='btn btn-primary'>Login</button>
      </div>
      </Form>
    </div>
    </>
  )
}

export default Login