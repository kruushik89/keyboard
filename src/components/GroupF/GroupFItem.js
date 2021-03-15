import React from "react";
import './GroupF.css';

const GroupFItem = ({item, index}) => {
    return (
        <div className='group-f_item btn' id={item}>
            {item}
        </div>
    )
}

export default GroupFItem;