import React from 'react';
import Button from './Button';

function Hideable(props) {
    let visibilityText;
    let children;

    if (props.visibility) {
        visibilityText = 'Hide';
        children = props.children;
    } else {
        visibilityText = 'Show';
        children = null;
    }

    const handleClick = () => {
        let visibile = props.visibility;
        if (visibile) {
            return props.onVisibilityChange(0);
        } else {
            return props.onVisibilityChange(1);
        }
    }

    return (
        <div>
            <Button name={`${visibilityText} ${props.name}`} onClick={handleClick} />
            <div>
                {children}
            </div>
        </div>
    )
}

export default Hideable;
