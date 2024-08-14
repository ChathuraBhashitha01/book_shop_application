import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api= axios.create({
    baseURL: `http://localhost:4000`,
});

export  const BookTableForm = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await api.get(`api/v1/books/all`);
            setData(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <table className="w-full overflow-hidden overflow-y-scroll">
                <thead>
                <tr className="bg-[#f9edee]">
                    <th className="text-10 font-normal border-gray-300 border-[0.5px] px-1">Code</th>
                    <th className="text-10 font-normal border-gray-300 border-[0.5px] px-1">Name</th>
                    <th className="text-10 font-normal border-gray-300 border-[0.5px] px-1">Category</th>
                    <th className="text-10 font-normal border-gray-300 border-[0.5px] px-1">Quantity</th>
                    <th className="text-10 font-normal border-gray-300 border-[0.5px] px-1">BuyPrice</th>
                    <th className="text-10 font-normal border-gray-300 border-[0.5px] px-1">SalePrice</th>
                    <th className="text-10 font-normal border-gray-300 border-[0.5px] px-1">Author</th>
                    <th className="text-10 font-normal border-gray-300 border-[0.5px] px-1">Supplier</th>
                </tr>
                </thead>
                <tbody>
                {data.map((book: any) => (
                    <tr key={book.code} className="border-black border-[0.5px] px-1">
                        <td className="text-10 border-gray-300 border-[0.5px] px-1">{book.code}</td>
                        <td className="text-10 border-gray-300 border-[0.5px] px-1">{book.name}</td>
                        <td className="text-10 border-gray-300 border-[0.5px] px-1">{book.category}</td>
                        <td className="text-10 border-gray-300 border-[0.5px] px-1">{book.qty}</td>
                        <td className="text-10 border-gray-300 border-[0.5px] px-1">{book.buyPrice}</td>
                        <td className="text-10 border-gray-300 border-[0.5px] px-1">{book.salePrice}</td>
                        <td className="text-10 border-gray-300 border-[0.5px] px-1">{book.author}</td>
                        <td className="text-10 border-gray-300 border-[0.5px] px-1">{book.supplier}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

