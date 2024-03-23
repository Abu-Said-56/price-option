import PropTypes from 'prop-types';

import { IoIosCheckmarkCircle } from "react-icons/io";

const Price = ({option}) => {
    const {price,name,title,features} = option ;
    return (
        <div className='bg-blue-500 p-12 mt-8 rounded-xl '>
            <div>
            <h2 className='text-3xl font-bold py-4'>{title}</h2>
            <h2>
                <span className='text-6xl font-bold'>{price}</span>
                <span className='text-2xl'>/month</span>
            </h2>
            <h2 className="text-3xl text-center my-4 font-bold">{name}</h2>
            
            <h3 className='flex gap-3 items-center'>
                <IoIosCheckmarkCircle className='text-red-400 text-5xl'>
                </IoIosCheckmarkCircle>{features}</h3>
            </div>

            <div className='py-6'>
            <button className='btn btn-accent w-full font-bold rounded-xl hover:bg-lime-400'>Buy Now</button>
            </div>
        </div>
    );
};

Price.PropTypes = {
    option: PropTypes.object

    
}

export default Price;