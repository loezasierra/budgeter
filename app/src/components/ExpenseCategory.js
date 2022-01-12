import React from 'react';
import './styles/ExpenseCategory.css';

function ExpenseCategory(props) {
    return(
        <div className='category'>
            <h2>{props.name}</h2>
            {props.children}
        </div>
    );
}

export default ExpenseCategory;
