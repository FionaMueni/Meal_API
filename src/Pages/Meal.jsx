import React, {useState, useEffect} from 'react';
import List from '../Components/List';
import Navbar from '../Components/Navbar';



const Meal = () => {

    const [data, setData]= useState()
    const [newData, setNewData]= useState()
    const [search, setSearch] = useState("")
    const [selectedCategory, newSelectedCategory] = useState()

    const category = data && data.map((data)=>data.category)
    const uniqueCategory = new Set(category)
    const newCategory = [...uniqueCategory]




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

useEffect(()=>{

    if (search !== ""){
        const filteredData = data && data.filter((item)=>{
            return (
                item.name.toLowerCase().includes(search.toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase()) 
            )
        })
        setNewData(filteredData)
    }else{
        setNewData(data)
    }

}, [search])

useEffect(()=>{
    if (selectedCategory === ""){
        setNewData(data)
    }else{
        const filteredCategory = data && data.filter((meal)=>{
            return (
                meal.category.includes(selectedCategory)
            )

        })
        setNewData(filteredCategory)
    }


}, [selectedCategory])

    return (
        <div>
        <Navbar/>
        <div>
        <select onChange={((event)=>newSelectedCategory(event.target.value))}>
            <option value="">All Categories</option>
            {newCategory && newCategory.map((item, index)=>{
                return(
                    <option value={item} key={index}>{item}</option>
                )

            })}
            
        </select>

        <input type="text" placeholder="search" className='flex w-52 mt-4 outline-none border-2 border-black text-sm items-end rounded-lg px-4 py-2 ' onChange={(event)=>setSearch(event.target.value)}/>
        </div>
        

        <div>
     {newData && newData.map((item, index)=>{
    console.log(item)
    return (
        <List list={item} key={index}/>
    )
})}
        </div>

        
            
        </div>
    );
}

export default Meal;
