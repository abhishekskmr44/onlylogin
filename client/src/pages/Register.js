import React, { useState, useEffect } from 'react'
import {Form, Input, message} from "antd";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Spinner from '../components/Spinner';

// {/***Ant design uses onFinish***/}
const Register = () => {

    const navigate = useNavigate()
    // for spinner
    const [loading, setLoading] = useState(false)

    // from submit
    const submitHandler = async(values) => {
        //    console.log(values)

        try {
            setLoading(true)
            // the endpoints /login /register in userRoute.js should also be same here
              await axios.post("/users/register", values)
            message.success("Registration Successfull")
            setLoading(false)
            // navigate to login page if successfull registration
            navigate("/login")
        } catch (error) {
            setLoading(false)
            message.error("Something went wrong ")
        }
    };


    // prevent
    useEffect(()=>{

      // agar user milta hai toh homepage pe navigate karna hai
      if(localStorage.getItem("user")){
        navigate("/")
      }
    },[navigate])

  return (
    <>
    {loading && <Spinner/>}
    <div className="register-page">
    
      <Form layout="vertical" onFinish={submitHandler}>
      <h1>Register Form</h1>
  
      <Form.Item label="Name" name="name">
      <Input/>
      </Form.Item>

      <Form.Item label="Email" name="email">
      <Input type="email"/>
      </Form.Item>

      <Form.Item label="Password" name="password">
      <Input type="password"/>
      </Form.Item>
          

      <div className="d-flex justify-content-between"> 
      <Link to="/login">Already registered? Click here to login</Link>
      <button className='btn btn-primary'>Register</button>
      </div>
      </Form>
    </div>
    </>
  )
}

export default Register