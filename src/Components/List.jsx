import React from 'react';

const List = ({list}) => {
    return (
        <div className='grid grid-col w-60 items-center mt-10 gap-3 px-6'>
            <img src={list && list.thumbnail}/>
            <h2>{list && list.name}</h2>
            <h3>{list && list.category}</h3>
            
        </div>
    );
}
 
export default List;
