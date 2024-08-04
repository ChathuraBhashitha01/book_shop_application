import React, {Component} from 'react';
import book from '../../../images/senkottan-fcover-sri-lanka.jpg'

interface BookProps {
    data: any;
}

class Book extends Component<BookProps> {

    constructor(props:BookProps) {
        super(props)

    }


    render() {

        const {data} = this.props;

        return (
            <div
                className="w-40 h-64 mr-2 mb-2  border-gray-200 border-[0.5px] shadow-xl relative bg-white rounded-md ">
                <div>
                    <img className="h-[55%] w-[60%] absolute top-3 left-0 right-0 mx-auto " src={book}
                         alt=""/>
                </div>
                <div className="flex">
                    <div>
                        <label className='text-red-700 text-[12px] font-normal absolute bottom-[28%] left-3 mx-auto'>{data.category}</label>
                        <label className="text-[17px] text-black font-bold  absolute bottom-[18%] left-3 mx-auto">{data.name}</label>
                        <label className='text-[12px] absolute bottom-[13%] left-3 mx-auto'>{data.author}</label>
                        <label className='text-[15px] font-bold absolute bottom-2 left-3 mx-auto'>Rs{data.buyPrice} /=</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Book;