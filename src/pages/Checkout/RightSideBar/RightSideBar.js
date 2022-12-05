import React from 'react';
import './RightSideBar.css';

const RightSideBar = ({classDetails}) => {
    const {title, img, price} = classDetails;

    return (
        <div className='side-bar text-center p-4'>
            <h4 className='mb-2'>Selected Class:</h4>
            <h5 className='select-class-title mb-3'>{title}</h5>
            <img className='class-img' src={img} alt="class-img" />
            <h5 className='mt-3'>Price: <span className='value'>${price}</span></h5>
        </div>
    );
};

export default RightSideBar;