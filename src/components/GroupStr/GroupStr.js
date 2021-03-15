import React from "react";
import GroupStrItem from "./GroupStrItem";
import './GroupStr.css';

const GroupStr = () => {
    const arrayStr = ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '|', 'caps lock', 'a', 's', 'd',
        'f', 'g','h', 'j', 'k', 'l', ';', '"', 'enter', 'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '/',
        'ctrl', 'fn', 'wind', 'alt', 'space', 'alt', 'fn', 'ctrl'
    ]

    return (
        <div className='group_str'>
            {arrayStr.map(item => <GroupStrItem item={item} />)}
        </div>
    )
}

export default GroupStr;