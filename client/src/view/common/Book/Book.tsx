import React, {Component} from 'react';
import book from '../../../images/senkottan-fcover-sri-lanka.jpg'
import {ShoppingCart} from "../ShoppingCart/ShoppingCart";

interface BookProps {
    data: any;
}

interface BookState {
    isActive: boolean
}

class Book extends Component<BookProps,BookState> {

    constructor(props:BookProps) {
        super(props)
        this.state = {
            isActive: false
        }
    }

    private addToCartOnClick = () => {
        this.setState({
            isActive: true
        });
    }


    render() {

        const {data} = this.props;

        return (
            <div
                className="w-40 h-72 mr-2 mb-2  border-gray-200 border-[0.5px] shadow-xl relative bg-white rounded-md ">
                <div>
                    <img className="h-[55%] w-[60%] absolute top-6 left-0 right-0 mx-auto " src={data.picture}
                         alt=""/>
                </div>
                <div className="flex">
                    <div>
                        <label
                            className='text-red-700 text-[12px] font-normal absolute bottom-[28%] left-3 mx-auto'>{data.category}</label>
                        <label
                            className="text-[17px] text-black font-bold  absolute bottom-[18%] left-3 mx-auto">{data.name}</label>
                        <label className='text-[12px] absolute bottom-[13%] left-3 mx-auto'>{data.author}</label>
                        <label
                            className='text-[15px] font-bold absolute bottom-2 left-3 mx-auto'>Rs{data.salePrice} /=</label>
                    </div>
                </div>

                {
                    this.state.isActive ? <ShoppingCart data={{book: data,isAdded: this.state.isActive}}/> :
                        <button className="w-full  p-[2.4px] bg-blue-600 text-[8px] border-gray-500 border-[0.5px]" onClick={this.addToCartOnClick}>Add to Cart</button>
                }

            </div>
        );
    }
}

export default Book;