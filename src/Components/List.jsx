import React from 'react';
import Navbar from './Navbar';


const List = ({list}) => {
    return (
        <div>
            <img src={list && list.thumbnail}/>
            <h2>{list && list.name}</h2>
            <h3>{list && list.category}</h3>
            
        </div>
    );
}
 
export default List;
