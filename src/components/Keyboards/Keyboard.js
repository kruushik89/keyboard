import React from "react";
import './Keyboard.css';
import GroupF from "../GroupF/GroupF";
import GroupNumber from "../GroupNumber/GroupNumber";
import GroupStr from "../GroupStr/GroupStr";

const Keyboard = () => {
    return (
        <div className='keyboard'>
            <GroupF/>
            <GroupNumber/>
            <GroupStr/>
        </div>
    )
}

export default Keyboard;