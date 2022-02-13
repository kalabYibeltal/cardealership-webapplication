// import { useState,useEffect} from 'react'
import Carlist from './carlist'
import useFetch from './use'



const Home = () => {
    
    const {data: cars, error} = useFetch('http://localhost:1337/cars')
    const {data: carsold, error2} = useFetch('http://localhost:1337/carsold')
   
    console.log(cars)
    return ( 
    <div className="Home">
        {error &&  <p>{error}</p>}
        {cars && <Carlist cars={cars} x={0} title={"New Cars"} /> }
        {cars && <Carlist cars={carsold} x={1} title={"Old Cars"} /> }
        
    </div> );
}
 
export default Home;