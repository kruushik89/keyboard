import React from "react";
import GroupFItem from "./GroupFItem";

const GroupF = () => {

    const arrayF = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'f10', 'f11', 'f12' ]

    return (
        <div className='group_f'>
            {arrayF.map( (item, index) => <GroupFItem item={item} index={index} />)}
        </div>
    )
}

export default GroupF;