import React from 'react'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Img from '../assets/img.jpg';
import Img2 from '../assets/img2.jpg';
import Img3 from '../assets/img3.jpg';
import Img4 from '../assets/img4.jpg';

const IndexPage = () => {
  return (
    <div className='mt-8 gap-x-6 gap-y-8 grid grid-cols-2 md:grid-cols:3 lg:grid-cols-4'>
        <div className="bg-gray-500 mb-2 rounded-2xl flex-col ">
            <img className="rounded-2xl object-cover aspect-square" src={Img} alt="" />
            <h1>Add Floor Map</h1>
        </div>
        <div className="bg-gray-500 mb-2 rounded-2xl flex-col">
            <img className="rounded-2xl object-cover aspect-square" src={Img2} alt="" />
            <h1>Modify Floor Plan</h1>
        </div>
        <div className="bg-gray-500 mb-2 rounded-2xl flex-col">
            <img className="rounded-2xl object-cover aspect-square" src={Img3} alt="" />
            <h1>Delete Floor Plan</h1>
        </div>
        <div className="bg-gray-500 mb-2 rounded-2xl flex-col">
            <img className="rounded-2xl object-cover aspect-square" src={Img4} alt="" />
            <h1>Book Room</h1>
        </div>
        
    </div>
    
  )
}

export default IndexPage