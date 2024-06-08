import React, { useState, useEffect } from 'react'
import { Input } from '@headlessui/react';
import { Button, Spin } from 'antd';
import axios from 'axios';
const FrontPage = () => {

  const API_KEY = "S1oDC79AdbpNUPyMXv7jug==5RL2Hqs893sLhdFP"
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [result, setResult] = useState([]);

  const fetchDataByAuthor = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.quotable.io/quotes/?author=${author}`, {
        headers: {
          'Content-Type': 'Application/json'
        }
      });
      const res = response.data;
      setResult(res.results);
      // console.log(res.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchDataByCategory = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.quotable.io/quotes/?tags=${category}`, {
        headers: {
          'Content-Type': 'Application/json'
        }
      });
      const res = response.data;
      setResult(res.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="homeContainer container flex md:justify-center w-[100%] bg-slate-200 items-start h-auto">
        <div className="searchArea md:flex md:flex-col my-24 md:justify-center h-auto">
          <div className="inputs flex md:flex-row flex-col justify-center items-center">
            <div className="authorSearch">
              <Input type="text" placeholder="Search Quotes by Author" className="w-[300px] px-4 h-[50px] rounded-l-lg" value={author} onChange={(e) => setAuthor(e.target.value)} />
              <Button className='bg-[#3B3362] mr-4 py-6' type='primary' onClick={fetchDataByAuthor} disabled={!author}>Search</Button>
            </div>
            <div className='my-10 md:mx-6'>OR</div>
            <div className="categorySearch">
              <Input type="text" placeholder="Search Quotes by Category" className="w-[300px] px-4 ml-4 h-[50px] rounded-l-lg" value={category} onChange={(e) => setCategory(e.target.value)} />
              <Button className='bg-[#3B3362] mr-4 py-6' type='primary' onClick={fetchDataByCategory} disabled={!category}>Search</Button>
            </div>
          </div>
          <div className="results flex flex-col justify-center items-center my-10">
            <div className="resultQuotes flex flex-col my-2 items-center">
              {result.length > 0 ? (
                <>
                  <h1 className='text-3xl text-center my-10 font-bold text-[#3B3362]'>Results</h1>
                  {result.map((quote, index) => (
                    <div key={index} className='text-white my-4 w-[70%] bg-[#3B3362] p-10'>
                      <p>{quote.content}</p>
                      <p className='font-extrabold my-2'><i>- {quote.author}</i></p>
                    </div>
                  ))}
                </>
              ) : (loading && <Spin />)}
            </div>
            {(result.length === 0) && <div>No Result Found!</div>}
          </div>
        </div>
      </div>
    </>
  )
}

export default FrontPage;
