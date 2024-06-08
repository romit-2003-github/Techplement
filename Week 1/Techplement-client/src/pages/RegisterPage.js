import React, { useState, useEffect } from 'react'
import { Button, Form, Input, message } from 'antd';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';
import {Spin} from 'antd';

const RegisterPage = () => {

  const[loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const submitHandler = async (values) =>{
    // console.log(values);   
    try{
      setLoading(true);
      await axios.post('/users/register', values);
      setLoading(false);
      message.success("Registration Successful");
      navigate('/login');
    }
    catch(error){
      setLoading(false);
      console.log(error);
    } 
  }

  useEffect(()=>{
    if(localStorage.getItem('user')){
      navigate('/home');
    }
  },[navigate]);
  return (
    <>
      <div className="container">
        <div className="register md:flex md:flex-row md:items-center bg-[#3B3362]">
          {loading && <Spin/>}
          <div className='hidden md:flex md:flex-col md:justify-center md:items-start h-screen w-[50%]'>
            <h1 className='text-white text-5xl mx-10 my-8'>Welcome to <b>Quotes4U</b></h1>
            <h1 className='text-white text-2xl mx-10'><i>"Where Words Inspire! Deep dive into a world of wisdom, motivation, <br /> and timeless quotes that spark inspiration and brighten your day."</i></h1>
          </div>
          <div className='flex flex-col justify-center items-center bg-slate-100 md:h-screen h-auto w-full md:w-[50%]'>
            <h1 className='text-[#3B3362] text-4xl font-extrabold md:my-8 mt-32 mb-10'>REGISTER</h1>
            <Form
              layout='vertical'
              name="basic"
              className='flex flex-col justify-center'
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              autoComplete="off"
              onFinish={submitHandler}
            >
              <Form.Item
                label="Name"
                className='w-100'
                name="name"
                rules={[{ required: true, message: 'Please input your Name!' }]}
              >
                <Input className='w-[400px]' />
              </Form.Item>

              <Form.Item
                label="Email"
                className='w-100'
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input className='w-[400px]' />
              </Form.Item>

              <Form.Item
                label="Age"
                name="age"
                className='w-100'
                rules={[{ required: true, message: 'Please input your age!' }]}
              >
                <Input className='w-[400px]' />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                className='w-100'
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password className='w-[400px]' />
              </Form.Item>

              <Button type="primary" className='bg-[#3B3362] my-6' htmlType="submit">
                Register
              </Button>
              <Button type="primary" className='bg-[#3B3362]'>
                <Link to='/login'>Already Registered? Login Here</Link>
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterPage
