import React, {Component} from 'react';
import axios from "axios";

export class BookTableForm extends Component {

    private api:any;

    constructor(props: {}) {
        super(props);
        this.api= axios.create({
            baseURL: `http://localhost:4000`
        });
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData = async () => {
        try {

            this.api.get(`api/v1/books/all`).then((res:{data:any})=>{
                const jsonData=res.data;
                this.setState({data: jsonData});
            }).catch((error:any):void=>{
                console.error("Axios error",error)
            });

        } catch (error) {
            console.error(
                'Error fetching data:',
                error);
        }
    }

    render() {
        // @ts-ignore
        const {data} = this.state;
        return (
            <div>
                <table className="w-full overflow-hidden overflow-y-scroll">
                    <tr className="bg-blue-600">
                        <th className="text-10 font-normal border-black border-[0.5px] px-1">Code</th>
                        <th className="text-10 font-normal border-black  border-[0.5px] px-1">Name</th>
                        <th className="text-10 font-normal border-black  border-[0.5px]  px-1">Category</th>
                        <th className="text-10 font-normal  border-black border-[0.5px] px-1">Quantity</th>
                        <th className="text-10 font-normal border-black border-[0.5px] px-1">BuyPrice</th>
                        <th className="text-10 font-normal border-black border-[0.5px] px-1">SalePrice</th>
                        <th className="text-10 font-normal border-black border-[0.5px] px-1">Author</th>
                        <th className="text-10 font-normal border-black border-[0.5px] px-1">Supplier</th>
                    </tr>
                    {
                       data.map((book: any) => (
                            <tr className="border-black  border-[0.5px]  px-1">
                                <td className="text-10 border-black border-[0.5px] px-1">{book.code}</td>
                                <td className="text-10 border-black border-[0.5px] px-1">{book.name}</td>
                                <td className="text-10 border-black border-[0.5px] px-1">{book.category}</td>
                                <td className="text-10 border-black border-[0.5px] px-1">{book.qty}</td>
                                <td className="text-10 border-black border-[0.5px] px-1">{book.buyPrice}</td>
                                <td className="text-10 border-black border-[0.5px] px-1">{book.salePrice}</td>
                                <td className="text-10 border-black border-[0.5px] px-1">{book.author}</td>
                                <td className="text-10 border-black border-[0.5px] px-1">{book.supplier}</td>
                            </tr>
                        ))
                    }
                </table>

            </div>
        );
    }
}
