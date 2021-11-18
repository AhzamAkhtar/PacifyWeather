import React, {useEffect,useState} from "react"
import "./index.css"
const Temp = () => {
    const [city,setCity]=useState("null")
    const [search,setSearch]=useState("Delhi")
    useEffect(()=>{
        const fetchApi=async()=>{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=bd5e40c261ab7fedd23622505f59a224`
            const response=await fetch(url)
            const resJson=await response.json()
            console.log(resJson)
            {setCity(resJson.main)}
        }
        fetchApi();
    },[search])
    return (
        <>
            <div class="card" id="main">
                <div class="card-body">
                    <input value={search} type="search" onChange={(event) => {setSearch(event.target.value)}} />
                    <h5 class="card-title"></h5>
                    <h6 class="card-subtitle mb-2 text-muted"></h6>
                    <p class="card-text"></p>
                </div>
        {!city ?(
            <p>NO DATA FOUND</p>
        ) : (

        
        <div class="card" id="clild"> 
                    <div class ="card-body">
                    <h2 class ="card-text">{search}</h2>
                    <i class="fas fa-street-view" id="icon"></i>
                    <h1 class="card-text">{city.temp}</h1>
                    <h3 class="card-text">Max:{city.temp_max}C|Min:{city.temp_min}C</h3>
                    </div>
                </div>
        )}
            </div>
           
   
        </>
    )
}
export default Temp