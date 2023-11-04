import React, {useState, useEffect} from 'react';
import List from '../Components/List';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';



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
        <div className='flex justify-end items-end px-4 py-8'>
        <select className='border-2 border-black px-3 py-2 rounded-lg ' onChange={((event)=>newSelectedCategory(event.target.value))}>
            <option value="" >All Categories</option>
            {newCategory && newCategory.map((item, index)=>{
                return(
                    <option value={item} key={index}>{item}</option>
                )

            })}
            
        </select>

        <input type="text" placeholder="search" className='flex w-52 mt-4 justify-end outline-none border-2 border-black text-sm items-end rounded-lg mx-7 px-3 py-2 ' onChange={(event)=>setSearch(event.target.value)}/>
        </div>
        

        <div className='grid grid-cols-4 items-center mt-10 bg gap-3 px-6' >
     {newData && newData.map((item, index)=>{
    console.log(item)
    return (
        <List list={item} key={index}/>
    )
})}
        </div>

        <Footer/>
            
        </div>
    );
}

export default Meal;
