import React, { useEffect, useState } from 'react'
import { Input, Button, Form, message, Spin } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const submitLoginHandler = async (values) => {
    try {
      // console.log(values);
      setLoading(true);
      const { data } = await axios.post("/users/login", values);
      message.success("Login Successful");
      localStorage.setItem('userToken', JSON.stringify({...data, password:""}));
      setLoading(false);
      navigate('/home');
    }
    catch (error) {
      setLoading(false);
      message.error("Error Logging In");
      localStorage.removeItem('user');
      console.log(error);
    }
  }

  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate('/home');
    }
  }, [navigate]);

  return (
    <>
      <div className="container">
        <div className="register flex flex-row items-center bg-[#3B3362]">
          {loading && <Spin />}
          <div className='flex flex-col justify-center items-center md:my-0 bg-slate-100 h-screen w-full md:w-[50%]'>
            <h1 className='text-[#3B3362] text-5xl font-extrabold my-8'>LOGIN</h1>
            <Form
              layout='vertical'
              name="basic"
              className='flex flex-col justify-center'
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              autoComplete="off"
              onFinish={submitLoginHandler}
            >

              <Form.Item
                label="Email"
                className='w-100'
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
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
                Login
              </Button>
              <Button type="primary" className='bg-[#3B3362]'>
                <Link to='/register'>New User? Register Here</Link>
              </Button>
            </Form>
          </div>
          <div className='hidden md:flex md:flex-col md:justify-center md:items-start h-screen w-[50%]'>
            <h1 className='text-white text-5xl mx-10 my-8'>Welcome to <b>Quotes4U</b></h1>
            <h1 className='text-white text-2xl mx-10'><i>"Where Words Inspire! Deep dive into a world of wisdom, motivation, <br /> and timeless quotes that spark inspiration and brighten your day."</i></h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
