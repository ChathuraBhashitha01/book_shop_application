import React, {useEffect, useState} from "react";
import axios from "axios";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Book from "../../common/Book/Book";

export function PaymentDetails() {

    const api=axios.create({
        baseURL:`http://localhost:4000`
    })

    const [data,setData]=useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData=async ()=>{
       try {
           const res=await api.get("api/v1/payment/getPayment");
           setData(res.data)
       } catch (error){

       }
    }

    const handleOrderDetails=()=>{

    }

    return (
        <div>
            <div className='h-[40vh] shadow-xl'>
                <table className="w-full  overflow-hidden overflow-y-scroll">
                    <thead>
                    <tr className="bg-[#f9edee]">
                        <th className="text-10 font-normal border-gray-300 border-[0.5px] px-1">No</th>
                        <th className="text-10 font-normal border-gray-300 border-[0.5px] px-1">Date and Time</th>
                        <th className="text-10 font-normal border-gray-300 border-[0.5px] px-1">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                        {data.map((payment: any) => (
                            <tr key={payment.paymentID} className="border-black border-[0.5px] px-1">
                                <td onClick={handleOrderDetails} className="text-10 border-gray-300 border-[0.5px] px-1">{payment.paymentID}</td>
                                <td className="text-10 border-gray-300 border-[0.5px] px-1">{payment.date.split("T")[0]}</td>
                                <td className="text-10 border-gray-300 border-[0.5px] px-1">{payment.date.split("T")[1].split(".")[0]}</td>
                                <td className="text-10 border-gray-300 border-[0.5px] px-1">{payment.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className='w-full h-[40vh] shadow-xl'>

            </div>

            <div>
                <ButtonGroup variant="contained" aria-label="Basic button group" className="absolute left-16 bottom-10">
                    <Button>Payments</Button>
                    <Button>Details</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}