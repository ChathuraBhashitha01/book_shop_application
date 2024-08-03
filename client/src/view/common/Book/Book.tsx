import React, {Component} from 'react';
import book from '../../../images/senkottan-fcover-sri-lanka.jpg'

class Book extends Component {
    render() {
        return (
            <div className="w-36 h-64 mr-2 mb-2  border-gray-300 border-[0.5px] shadow-xl relative">
                <div>
                    <img className="h-[55%] w-[60%] absolute top-4 left-0 right-0 mx-auto " src={book} alt=""/>
                </div>
                <div className="flex">
                    <div>
                        <label className='text-red-700 text-[12px] font-normal absolute bottom-[28%] left-3 mx-auto'>NOVELS</label>
                        <label className="text-[17px] text-black font-bold  absolute bottom-[18%] left-3 mx-auto">Senkottan</label>
                        <label className='text-[12px] absolute bottom-[13%] left-3 mx-auto'>Mahinda Prasad </label>
                        <label className='text-[15px] font-bold absolute bottom-2 left-3 mx-auto'>Rs 500 /=</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default Book;