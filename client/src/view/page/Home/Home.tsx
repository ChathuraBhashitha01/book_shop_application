import React, {Component} from "react";
import Book from "../../common/Book/Book";
// import book from "../../../images/senkottan-fcover-sri-lanka.jpg";
import icon from "../../../images/pexels-minan1398-694740.jpg";
import background from "../../../images/wood-background2.png";
import book1 from "../../../images/book1.png";
import book2 from "../../../images/book2.png";
import book3 from "../../../images/book3.png";
import axios from 'axios'
import {ViewAll} from "../../common/ViewAll/ViewAll";
import {Link} from "react-router-dom";



export class Home extends Component {

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

    private handleViewAllClicks=(event: React.MouseEvent<HTMLButtonElement>)=>{
        const category = event.currentTarget.value;
    }


    render() {
        // @ts-ignore
        const {data} = this.state;
        return (
            <div className=" h-auto">
                <div className=" bg-cover bg-center w-full h-[45vh]" style={{backgroundImage: `url(${background})`}}>
                    {/*<img src={background} alt="" className="h-[40vh] w-[100vw]"/>*/}
                    <img src={book1} alt="" className="h-32"/>
                    <img src={book2} alt="" className="h-32 relative left-24 bottom-10"/>
                    <img src={book3} alt="" className="h-32 relative left-48 bottom-16"/>

                </div>

                <div className='h-[55vh] bg-white relative '>
                    <label className='font-bold text-xl relative left-48 top-12'>NOVELS BOOKS</label>
                    <Link to='/view' >
                        <button className='font-light text-[14px] relative left-[68vw] top-12' value='novel'>View All</button>
                    </Link>

                    <div className="flex flex-row gap-4 w-[75%] h-72 absolute  bottom-6 left-0 right-0 mx-auto">
                    {
                            data.slice(0,6).map((book: any) => {

                            if (book.category.includes('novel')) {
                                return <Book key={book.code} data={book}/>;
                            }
                            return null;
                        })}
                    </div>
                </div>


                <div className='w-[100%] h-[55vh] bg-[#f9edee] relative'>
                    <label className='font-bold text-xl relative left-48 top-12'>SCIENCE FICTION BOOKS</label>
                    <Link to='/view' >
                        <button className='font-light text-[14px] relative left-[68vw] top-12' value='novel'>View All</button>
                    </Link>
                    <div className="flex flex-wrap gap-4 w-[75%] absolute  bottom-6 left-0 right-0 mx-auto ">
                        {data.map((book: any) => {

                            if (book.category.includes('scienceFiction')) {
                                return <Book key={book.code} data={book}/>;
                            }
                            return null;
                        })}
                    </div>
                </div>

                <div className='w-[100%] h-[55vh] bg-white relative'>
                    <label className='font-bold text-xl relative left-48 top-12'>FANTASY BOOKS</label>
                    <Link to='/view' >
                        <button className='font-light text-[14px] relative left-[68vw] top-12' value='novel'>View All</button>
                    </Link>
                    <div className="flex flex-wrap gap-4 w-[75%] absolute  bottom-6 left-0 right-0 mx-auto ">
                        {data.map((book: any) => {

                            if (book.category.includes('fantasy')) {
                                return <Book key={book.code} data={book}/>;
                            }
                            return null;
                        })}
                    </div>
                </div>

                <div className='w-[100%] h-[55vh] bg-[#f9edee] relative'>
                    <label className='font-bold text-xl relative left-48 top-12'>DYSTOPIAN BOOKS</label>
                    <Link to='/view' >
                        <button className='font-light text-[14px] relative left-[68vw] top-12' value='novel'>View All</button>
                    </Link>
                    <div className="flex flex-wrap gap-4 w-[75%] absolute  bottom-6 left-0 right-0 mx-auto ">
                        {data.map((book: any) => {

                            if (book.category.includes('dystopian')) {
                                return <Book key={book.code} data={book}/>;
                            }
                            return null;
                        })}
                    </div>
                </div>


                {/*<div className='w-[100%] h-[55vh] bg-[#f9edee] relative'>*/}
                {/*    <label className='font-bold text-xl relative left-48 top-12'>NOVELS BOOKS</label>*/}
                {/*    <label className='font-light text-[14px] relative left-[68vw] top-12'>View All</label>*/}
                {/*    <div className="flex flex-wrap gap-4 w-[75%] absolute  bottom-6 left-0 right-0 mx-auto ">*/}
                {/*        <div*/}
                {/*            className="w-40 h-64 mr-2 mb-2  border-gray-200 border-[0.5px] shadow-xl relative bg-white rounded-md ">*/}
                {/*            <div>*/}
                {/*                <img className="h-[55%] w-[60%] absolute top-3 left-0 right-0 mx-auto " src={book}*/}
                {/*                     alt=""/>*/}
                {/*            </div>*/}
                {/*            <div className="flex">*/}
                {/*                <div>*/}
                {/*                    <label*/}
                {/*                        className='text-red-700 text-[12px] font-normal absolute bottom-[28%] left-3 mx-auto'>NOVELS</label>*/}
                {/*                    <label*/}
                {/*                        className="text-[17px] text-black font-bold  absolute bottom-[18%] left-3 mx-auto">Senkottan</label>*/}
                {/*                    <label className='text-[12px] absolute bottom-[13%] left-3 mx-auto'>Mahinda*/}
                {/*                        Prasad </label>*/}
                {/*                    <label className='text-[15px] font-bold absolute bottom-2 left-3 mx-auto'>Rs 500*/}
                {/*                        /=</label>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div*/}
                {/*            className="w-40 h-64 mr-2 mb-2  border-gray-200 border-[0.5px] shadow-xl relative bg-white rounded-md">*/}
                {/*            <div>*/}
                {/*                <img className="h-[55%] w-[60%] absolute top-4 left-0 right-0 mx-auto " src={book}*/}
                {/*                     alt=""/>*/}
                {/*            </div>*/}
                {/*            <div className="flex">*/}
                {/*                <div>*/}
                {/*                    <label*/}
                {/*                        className='text-red-700 text-[12px] font-normal absolute bottom-[28%] left-3 mx-auto'>NOVELS</label>*/}
                {/*                    <label*/}
                {/*                        className="text-[17px] text-black font-bold  absolute bottom-[18%] left-3 mx-auto">Senkottan</label>*/}
                {/*                    <label className='text-[12px] absolute bottom-[13%] left-3 mx-auto'>Mahinda*/}
                {/*                        Prasad </label>*/}
                {/*                    <label className='text-[15px] font-bold absolute bottom-2 left-3 mx-auto'>Rs 500*/}
                {/*                        /=</label>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div*/}
                {/*            className="w-40 h-64 mr-2 mb-2  border-gray-200 border-[0.5px] shadow-xl relative bg-white rounded-md">*/}
                {/*            <div>*/}
                {/*                <img className="h-[55%] w-[60%] absolute top-4 left-0 right-0 mx-auto " src={book}*/}
                {/*                     alt=""/>*/}
                {/*            </div>*/}
                {/*            <div className="flex">*/}
                {/*                <div>*/}
                {/*                    <label*/}
                {/*                        className='text-red-700 text-[12px] font-normal absolute bottom-[28%] left-3 mx-auto'>NOVELS</label>*/}
                {/*                    <label*/}
                {/*                        className="text-[17px] text-black font-bold  absolute bottom-[18%] left-3 mx-auto">Senkottan</label>*/}
                {/*                    <label className='text-[12px] absolute bottom-[13%] left-3 mx-auto'>Mahinda*/}
                {/*                        Prasad </label>*/}
                {/*                    <label className='text-[15px] font-bold absolute bottom-2 left-3 mx-auto'>Rs 500*/}
                {/*                        /=</label>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div*/}
                {/*            className="w-40 h-64 mr-2 mb-2  border-gray-200 border-[0.5px] shadow-xl relative bg-white rounded-md">*/}
                {/*            <div>*/}
                {/*                <img className="h-[55%] w-[60%] absolute top-4 left-0 right-0 mx-auto " src={book}*/}
                {/*                     alt=""/>*/}
                {/*            </div>*/}
                {/*            <div className="flex">*/}
                {/*                <div>*/}
                {/*                    <label*/}
                {/*                        className='text-red-700 text-[12px] font-normal absolute bottom-[28%] left-3 mx-auto'>NOVELS</label>*/}
                {/*                    <label*/}
                {/*                        className="text-[17px] text-black font-bold  absolute bottom-[18%] left-3 mx-auto">Senkottan</label>*/}
                {/*                    <label className='text-[12px] absolute bottom-[13%] left-3 mx-auto'>Mahinda*/}
                {/*                        Prasad </label>*/}
                {/*                    <label className='text-[15px] font-bold absolute bottom-2 left-3 mx-auto'>Rs 500*/}
                {/*                        /=</label>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div*/}
                {/*            className="w-40 h-64 mr-2 mb-2  border-gray-200 border-[0.5px] shadow-xl relative bg-white rounded-md">*/}
                {/*            <div>*/}
                {/*                <img className="h-[55%] w-[60%] absolute top-4 left-0 right-0 mx-auto " src={book}*/}
                {/*                     alt=""/>*/}
                {/*            </div>*/}
                {/*            <div className="flex">*/}
                {/*                <div>*/}
                {/*                    <label*/}
                {/*                        className='text-red-700 text-[12px] font-normal absolute bottom-[28%] left-3 mx-auto'>NOVELS</label>*/}
                {/*                    <label*/}
                {/*                        className="text-[17px] text-black font-bold  absolute bottom-[18%] left-3 mx-auto">Senkottan</label>*/}
                {/*                    <label className='text-[12px] absolute bottom-[13%] left-3 mx-auto'>Mahinda*/}
                {/*                        Prasad </label>*/}
                {/*                    <label className='text-[15px] font-bold absolute bottom-2 left-3 mx-auto'>Rs 500*/}
                {/*                        /=</label>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div*/}
                {/*            className="w-40 h-64 mr-2 mb-2  border-gray-200 border-[0.5px] shadow-xl relative bg-white rounded-md">*/}
                {/*            <div>*/}
                {/*                <img className="h-[55%] w-[60%] absolute top-4 left-0 right-0 mx-auto " src={book}*/}
                {/*                     alt=""/>*/}
                {/*            </div>*/}
                {/*            <div className="flex">*/}
                {/*                <div>*/}
                {/*                    <label*/}
                {/*                        className='text-red-700 text-[12px] font-normal absolute bottom-[28%] left-3 mx-auto'>NOVELS</label>*/}
                {/*                    <label*/}
                {/*                        className="text-[17px] text-black font-bold  absolute bottom-[18%] left-3 mx-auto">Senkottan</label>*/}
                {/*                    <label className='text-[12px] absolute bottom-[13%] left-3 mx-auto'>Mahinda*/}
                {/*                        Prasad </label>*/}
                {/*                    <label className='text-[15px] font-bold absolute bottom-2 left-3 mx-auto'>Rs 500*/}
                {/*                        /=</label>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className='w-[100%] h-[55vh] bg-white relative'>*/}
                {/*    <label className='font-bold text-xl relative left-48 top-12'>NOVELS BOOKS</label>*/}
                {/*    <label className='font-light text-[14px] relative left-[68vw] top-12'>View All</label>*/}
                {/*    <div className="flex flex-wrap gap-4 w-[75%] absolute  bottom-6 left-0 right-0 mx-auto ">*/}
                {/*        <div*/}
                {/*            className="w-40 h-64 mr-2 mb-2  border-gray-200 border-[0.5px] shadow-xl relative bg-white rounded-md">*/}
                {/*            <div>*/}
                {/*                <img className="h-[55%] w-[60%] absolute top-3 left-0 right-0 mx-auto " src={book}*/}
                {/*                     alt=""/>*/}
                {/*            </div>*/}
                {/*            <div className="flex">*/}
                {/*                <div>*/}
                {/*                    <label*/}
                {/*                        className='text-red-700 text-[12px] font-normal absolute bottom-[28%] left-3 mx-auto'>NOVELS</label>*/}
                {/*                    <label*/}
                {/*                        className="text-[17px] text-black font-bold  absolute bottom-[18%] left-3 mx-auto">Senkottan</label>*/}
                {/*                    <label className='text-[12px] absolute bottom-[13%] left-3 mx-auto'>Mahinda*/}
                {/*                        Prasad </label>*/}
                {/*                    <label className='text-[15px] font-bold absolute bottom-2 left-3 mx-auto'>Rs 500*/}
                {/*                        /=</label>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div*/}
                {/*            className="w-40 h-64 mr-2 mb-2  border-gray-200 border-[0.5px] shadow-xl relative bg-white rounded-md">*/}
                {/*            <div>*/}
                {/*                <img className="h-[55%] w-[60%] absolute top-4 left-0 right-0 mx-auto " src={book}*/}
                {/*                     alt=""/>*/}
                {/*            </div>*/}
                {/*            <div className="flex">*/}
                {/*                <div>*/}
                {/*                    <label*/}
                {/*                        className='text-red-700 text-[12px] font-normal absolute bottom-[28%] left-3 mx-auto'>NOVELS</label>*/}
                {/*                    <label*/}
                {/*                        className="text-[17px] text-black font-bold  absolute bottom-[18%] left-3 mx-auto">Senkottan</label>*/}
                {/*                    <label className='text-[12px] absolute bottom-[13%] left-3 mx-auto'>Mahinda*/}
                {/*                        Prasad </label>*/}
                {/*                    <label className='text-[15px] font-bold absolute bottom-2 left-3 mx-auto'>Rs 500*/}
                {/*                        /=</label>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div*/}
                {/*            className="w-40 h-64 mr-2 mb-2  border-gray-200 border-[0.5px] shadow-xl relative bg-white rounded-md">*/}
                {/*            <div>*/}
                {/*                <img className="h-[55%] w-[60%] absolute top-4 left-0 right-0 mx-auto " src={book}*/}
                {/*                     alt=""/>*/}
                {/*            </div>*/}
                {/*            <div className="flex">*/}
                {/*                <div>*/}
                {/*                    <label*/}
                {/*                        className='text-red-700 text-[12px] font-normal absolute bottom-[28%] left-3 mx-auto'>NOVELS</label>*/}
                {/*                    <label*/}
                {/*                        className="text-[17px] text-black font-bold  absolute bottom-[18%] left-3 mx-auto">Senkottan</label>*/}
                {/*                    <label className='text-[12px] absolute bottom-[13%] left-3 mx-auto'>Mahinda*/}
                {/*                        Prasad </label>*/}
                {/*                    <label className='text-[15px] font-bold absolute bottom-2 left-3 mx-auto'>Rs 500*/}
                {/*                        /=</label>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div*/}
                {/*            className="w-40 h-64 mr-2 mb-2  border-gray-200 border-[0.5px] shadow-xl relative bg-white rounded-md">*/}
                {/*            <div>*/}
                {/*                <img className="h-[55%] w-[60%] absolute top-4 left-0 right-0 mx-auto " src={book}*/}
                {/*                     alt=""/>*/}
                {/*            </div>*/}
                {/*            <div className="flex">*/}
                {/*                <div>*/}
                {/*                    <label*/}
                {/*                        className='text-red-700 text-[12px] font-normal absolute bottom-[28%] left-3 mx-auto'>NOVELS</label>*/}
                {/*                    <label*/}
                {/*                        className="text-[17px] text-black font-bold  absolute bottom-[18%] left-3 mx-auto">Senkottan</label>*/}
                {/*                    <label className='text-[12px] absolute bottom-[13%] left-3 mx-auto'>Mahinda*/}
                {/*                        Prasad </label>*/}
                {/*                    <label className='text-[15px] font-bold absolute bottom-2 left-3 mx-auto'>Rs 500*/}
                {/*                        /=</label>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div*/}
                {/*            className="w-40 h-64 mr-2 mb-2  border-gray-200 border-[0.5px] shadow-xl relative bg-white rounded-md">*/}
                {/*            <div>*/}
                {/*                <img className="h-[55%] w-[60%] absolute top-4 left-0 right-0 mx-auto " src={book}*/}
                {/*                     alt=""/>*/}
                {/*            </div>*/}
                {/*            <div className="flex">*/}
                {/*                <div>*/}
                {/*                    <label*/}
                {/*                        className='text-red-700 text-[12px] font-normal absolute bottom-[28%] left-3 mx-auto'>NOVELS</label>*/}
                {/*                    <label*/}
                {/*                        className="text-[17px] text-black font-bold  absolute bottom-[18%] left-3 mx-auto">Senkottan</label>*/}
                {/*                    <label className='text-[12px] absolute bottom-[13%] left-3 mx-auto'>Mahinda*/}
                {/*                        Prasad </label>*/}
                {/*                    <label className='text-[15px] font-bold absolute bottom-2 left-3 mx-auto'>Rs 500*/}
                {/*                        /=</label>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div*/}
                {/*            className="w-40 h-64 mr-2 mb-2  border-gray-200 border-[0.5px] shadow-xl relative bg-white rounded-md">*/}
                {/*            <div>*/}
                {/*                <img className="h-[55%] w-[60%] absolute top-4 left-0 right-0 mx-auto " src={book}*/}
                {/*                     alt=""/>*/}
                {/*            </div>*/}
                {/*            <div className="flex">*/}
                {/*                <div>*/}
                {/*                    <label*/}
                {/*                        className='text-red-700 text-[12px] font-normal absolute bottom-[28%] left-3 mx-auto'>NOVELS</label>*/}
                {/*                    <label*/}
                {/*                        className="text-[17px] text-black font-bold  absolute bottom-[18%] left-3 mx-auto">Senkottan</label>*/}
                {/*                    <label className='text-[12px] absolute bottom-[13%] left-3 mx-auto'>Mahinda*/}
                {/*                        Prasad </label>*/}
                {/*                    <label className='text-[15px] font-bold absolute bottom-2 left-3 mx-auto'>Rs 500*/}
                {/*                        /=</label>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*</div>*/}

                {/*<div className='w-[100%] h-[55vh] bg-[#f9edee] relative'>*/}
                {/*    <label className='font-bold text-xl relative left-48 top-12'>NOVELS BOOKS</label>*/}
                {/*    <label className='font-light text-[14px] relative left-[68vw] top-12'>View All</label>*/}
                {/*    <div className="flex flex-wrap gap-4 w-[75%] absolute  bottom-6 left-0 right-0 mx-auto ">*/}
                {/*        <div*/}
                {/*            className="w-40 h-64 mr-2 mb-2  border-gray-200 border-[0.5px] shadow-xl relative bg-white rounded-md ">*/}
                {/*            <div>*/}
                {/*                <img className="h-[55%] w-[60%] absolute top-3 left-0 right-0 mx-auto " src={book}*/}
                {/*                     alt=""/>*/}
                {/*            </div>*/}
                {/*            <div className="flex">*/}
                {/*                <div>*/}
                {/*                    <label*/}
                {/*                        className='text-red-700 text-[12px] font-normal absolute bottom-[28%] left-3 mx-auto'>NOVELS</label>*/}
                {/*                    <label*/}
                {/*                        className="text-[17px] text-black font-bold  absolute bottom-[18%] left-3 mx-auto">Senkottan</label>*/}
                {/*                    <label className='text-[12px] absolute bottom-[13%] left-3 mx-auto'>Mahinda*/}
                {/*                        Prasad </label>*/}
                {/*                    <label className='text-[15px] font-bold absolute bottom-2 left-3 mx-auto'>Rs 500*/}
                {/*                        /=</label>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div*/}
                {/*            className="w-40 h-64 mr-2 mb-2  border-gray-200 border-[0.5px] shadow-xl relative bg-white rounded-md">*/}
                {/*            <div>*/}
                {/*                <img className="h-[55%] w-[60%] absolute top-4 left-0 right-0 mx-auto " src={book}*/}
                {/*                     alt=""/>*/}
                {/*            </div>*/}
                {/*            <div className="flex">*/}
                {/*                <div>*/}
                {/*                    <label*/}
                {/*                        className='text-red-700 text-[12px] font-normal absolute bottom-[28%] left-3 mx-auto'>NOVELS</label>*/}
                {/*                    <label*/}
                {/*                        className="text-[17px] text-black font-bold  absolute bottom-[18%] left-3 mx-auto">Senkottan</label>*/}
                {/*                    <label className='text-[12px] absolute bottom-[13%] left-3 mx-auto'>Mahinda*/}
                {/*                        Prasad </label>*/}
                {/*                    <label className='text-[15px] font-bold absolute bottom-2 left-3 mx-auto'>Rs 500*/}
                {/*                        /=</label>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div*/}
                {/*            className="w-40 h-64 mr-2 mb-2  border-gray-200 border-[0.5px] shadow-xl relative bg-white rounded-md">*/}
                {/*            <div>*/}
                {/*                <img className="h-[55%] w-[60%] absolute top-4 left-0 right-0 mx-auto " src={book}*/}
                {/*                     alt=""/>*/}
                {/*            </div>*/}
                {/*            <div className="flex">*/}
                {/*                <div>*/}
                {/*                    <label*/}
                {/*                        className='text-red-700 text-[12px] font-normal absolute bottom-[28%] left-3 mx-auto'>NOVELS</label>*/}
                {/*                    <label*/}
                {/*                        className="text-[17px] text-black font-bold  absolute bottom-[18%] left-3 mx-auto">Senkottan</label>*/}
                {/*                    <label className='text-[12px] absolute bottom-[13%] left-3 mx-auto'>Mahinda*/}
                {/*                        Prasad </label>*/}
                {/*                    <label className='text-[15px] font-bold absolute bottom-2 left-3 mx-auto'>Rs 500*/}
                {/*                        /=</label>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div*/}
                {/*            className="w-40 h-64 mr-2 mb-2  border-gray-200 border-[0.5px] shadow-xl relative bg-white rounded-md">*/}
                {/*            <div>*/}
                {/*                <img className="h-[55%] w-[60%] absolute top-4 left-0 right-0 mx-auto " src={book}*/}
                {/*                     alt=""/>*/}
                {/*            </div>*/}
                {/*            <div className="flex">*/}
                {/*                <div>*/}
                {/*                    <label*/}
                {/*                        className='text-red-700 text-[12px] font-normal absolute bottom-[28%] left-3 mx-auto'>NOVELS</label>*/}
                {/*                    <label*/}
                {/*                        className="text-[17px] text-black font-bold  absolute bottom-[18%] left-3 mx-auto">Senkottan</label>*/}
                {/*                    <label className='text-[12px] absolute bottom-[13%] left-3 mx-auto'>Mahinda*/}
                {/*                        Prasad </label>*/}
                {/*                    <label className='text-[15px] font-bold absolute bottom-2 left-3 mx-auto'>Rs 500*/}
                {/*                        /=</label>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div*/}
                {/*            className="w-40 h-64 mr-2 mb-2  border-gray-200 border-[0.5px] shadow-xl relative bg-white rounded-md">*/}
                {/*            <div>*/}
                {/*                <img className="h-[55%] w-[60%] absolute top-4 left-0 right-0 mx-auto " src={book}*/}
                {/*                     alt=""/>*/}
                {/*            </div>*/}
                {/*            <div className="flex">*/}
                {/*                <div>*/}
                {/*                    <label*/}
                {/*                        className='text-red-700 text-[12px] font-normal absolute bottom-[28%] left-3 mx-auto'>NOVELS</label>*/}
                {/*                    <label*/}
                {/*                        className="text-[17px] text-black font-bold  absolute bottom-[18%] left-3 mx-auto">Senkottan</label>*/}
                {/*                    <label className='text-[12px] absolute bottom-[13%] left-3 mx-auto'>Mahinda*/}
                {/*                        Prasad </label>*/}
                {/*                    <label className='text-[15px] font-bold absolute bottom-2 left-3 mx-auto'>Rs 500*/}
                {/*                        /=</label>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <div*/}
                {/*            className="w-40 h-64 mr-2 mb-2  border-gray-200 border-[0.5px] shadow-xl relative bg-white rounded-md">*/}
                {/*            <div>*/}
                {/*                <img className="h-[55%] w-[60%] absolute top-4 left-0 right-0 mx-auto " src={book}*/}
                {/*                     alt=""/>*/}
                {/*            </div>*/}
                {/*            <div className="flex">*/}
                {/*                <div>*/}
                {/*                    <label*/}
                {/*                        className='text-red-700 text-[12px] font-normal absolute bottom-[28%] left-3 mx-auto'>NOVELS</label>*/}
                {/*                    <label*/}
                {/*                        className="text-[17px] text-black font-bold  absolute bottom-[18%] left-3 mx-auto">Senkottan</label>*/}
                {/*                    <label className='text-[12px] absolute bottom-[13%] left-3 mx-auto'>Mahinda*/}
                {/*                        Prasad </label>*/}
                {/*                    <label className='text-[15px] font-bold absolute bottom-2 left-3 mx-auto'>Rs 500*/}
                {/*                        /=</label>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*</div>*/}


            </div>
        );
    }
}