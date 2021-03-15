import React from "react";
import './GroupNumber.css';

const GroupNumberItem = ({item}) => {
    return (
        <div className='group_number__item btn'>
            {item}
        </div>
    );
}

export default GroupNumberItem;