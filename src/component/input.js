import { useState } from 'react';

function Input(data) {
    const [visible, setVisible] = useState(true);

    let {type} = data
    return (
        <>
            <input type={visible && "password"}></input>
            {type === 'password' && <input type="checkbox" onChange={()=> setVisible(!visible)}></input>}
        </>
    );
}
export default Input;
