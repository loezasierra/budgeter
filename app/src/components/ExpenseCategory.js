import React from 'react';

function ExpenseCategory(props) {
    return(
        <div className={'category' + props.name}>
            <h2>{props.name}</h2>
            {props.children}
        </div>
    );
}

export default ExpenseCategory;
