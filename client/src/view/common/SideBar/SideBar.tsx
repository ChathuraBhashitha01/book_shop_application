import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";

export const SideBar = () => {

    const api= axios.create({
        baseURL: `http://localhost:4000`,
    });

    const [payment,setPayment]=useState()

    useEffect(()=>{
        fetchData();
    },[payment]);

    const fetchData = async () => {
        try {
            const res = await api.get(`api/v1/payment/getTotal`);
            setPayment(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <Sidebar className="w-25 h-[93.2%] bg-[#f9edee]">

            <div className='w-[80%] h-[20%] shadow-xl mt-20 ml-5'>
                <p className='text-[30px] text-red-700 relative left-8 top-4'>Today Sales</p>
                <p className='text-[20px] relative left-16 top-3'>Rs.{payment}/-</p>
            </div>

            <div className='w-[80%] h-[20%] shadow-xl mt-10 ml-5'>
                <p className='text-[30px] text-red-700 relative left-8 top-4'>Today Sales</p>
                <p className='text-[20px] relative left-16 top-3'></p>
            </div>

            <div className='w-[80%] h-[20%] shadow-xl mt-6 ml-5'>
                <p className='text-[30px] text-red-700 relative left-8 top-4'>Today Sales</p>
                <p className='text-[20px] relative left-16 top-3'></p>
            </div>
        </Sidebar>

    );
};