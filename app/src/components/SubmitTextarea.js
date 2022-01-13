import React from 'react';
import Button from './Button';

function SubmitTextarea(props) {
    let textInput = React.createRef();

    const handleClick = () => {
        props.onClick(textInput.current.value);
    }

    return (
        <div>
            <textarea ref={textInput} defaultValue={props.defaultValue} />
            <Button name="Import" onClick={handleClick} />
        </div>
    )
}


export default SubmitTextarea
