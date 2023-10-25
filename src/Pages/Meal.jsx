import React, {useState, useEffect} from 'react';
import List from '../Components/List';


const Meal = () => {

    const [data, setData]= useState()
    const [newData, setNewData]= useState()




useEffect(()=>{
    fetch("https://free-api-s.vercel.app/meals/").then((response)=>{
        if (!response.ok) {
            throw new Error(console.log("Error"))
        } 
        return response.json()
    }).then((data)=>{
        setData(data)
        setNewData(data)
        console.log(data)
    })
}, [])


    return (
        <div>
            {newData && newData.map((item, index)=>{
                console.log(item)
                return (
                    <List list={item} key={index}/>
                )
            })}
            
        </div>
    );
}

export default Meal;
