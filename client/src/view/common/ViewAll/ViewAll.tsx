import React, {Component} from "react";
import axios from 'axios';
import Book from '../Book/Book';
import {Link} from "react-router-dom";


export class ViewAll extends Component {

    private api:any;

    constructor(props: {}) {
        super(props);
        this.api= axios.create({
            baseURL: `http://localhost:4000`
        });
        this.state = {
            data: [],
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

    private handleAllData=()=>{
        this.fetchData();
    }

    private handleCategoriesOnClick=(event: React.MouseEvent<HTMLLIElement>)=>{
        const category = event.currentTarget.getAttribute('value')
        console.log(category);
        try {
            this.api.get(`api/v1/books/findByCategory/`+category).then((res:{data:any})=>{
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
                <div className='ml-[31vw] mt-10'>
                    <ul className="list-none ml-2 pl-3">
                        <li className="inline-block mr-2 text-black cursor-pointer hover:text-blue-700 pl-[20px]"
                            onClick={this.handleAllData}>
                            All
                        </li>
                        <li className="inline-block mr-2 text-black cursor-pointer hover:text-blue-700 pl-[20px]"
                            value='novel' onClick={this.handleCategoriesOnClick}>
                            Novel
                        </li>
                        <li className="inline-block mr-2 text-black cursor-pointer hover:text-blue-700 pl-[20px]"
                            value='scienceFiction' onClick={this.handleCategoriesOnClick}>
                            Science Fiction
                        </li>
                        <li className="inline-block mr-2 text-black cursor-pointer hover:text-blue-700 pl-[20px]"
                            value='fantasy' onClick={this.handleCategoriesOnClick}>
                            Fantasy
                        </li>
                        <li className="inline-block mr-2 text-black cursor-pointer hover:text-blue-700 pl-[20px]"
                            value='dystopian' onClick={this.handleCategoriesOnClick}>
                            Dystopian
                        </li>
                    </ul>
                </div>
                <div className="flex w-[90vw] ml-16">
                    <div className="flex flex-wrap gap-4 ml-4 mt-5 mb-5 justify-center items-center mx-auto ">
                    {
                            data.map((book: any) => (
                                <Book key={book.code}
                                      data={book}/>
                            ))
                        }
                    </div>
                </div>
            </div>

        );
    }
}