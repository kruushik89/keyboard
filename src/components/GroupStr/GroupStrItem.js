import React from "react";

const GroupStrItem = ({item}) => {

    return (
        <div className='group_str_item btn' id={item}>
            {item}
        </div>
    )
}

export default GroupStrItem;