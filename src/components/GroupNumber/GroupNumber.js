import React from "react";
import './GroupNumber.css';
import GroupNumberItem from "./GroupNumberItem";

const GroupNumber = () => {
    const arrayNumber = ['~', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'backspace'];
    return (
        <div className='group_number'>
            {arrayNumber.map(item => <GroupNumberItem item={item}/>)}
        </div>
    )
}

export default GroupNumber;