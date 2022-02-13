import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFetch from "./use";
const axios = require('axios')

const Cardetails = () => {
    const {id} =useParams();
    const {data: car, error,} = useFetch('http://localhost:1337/cars/' + id);
    const history = useHistory();
    const handelclick = () => {

        axios.post('http://localhost:1337/carsorder/', {
            id: id,
            model: car[0].model
        }).then(()=>{
            history.push('/');
        })
     }
     console.log(car)
    return ( 
        <div className="car-details">
    
            {error && <div>{error}</div> }
            {car && (
                <article>
                    <h2>car name:{car[0].name}</h2>
                    <p> selling price:{car[0].sellingPrice}</p>
                    <p>car model: {car[0].model}</p>
                    <button onClick = {handelclick}>order</button>
                </article>
            )}
        </div>
     );
}
 
export default Cardetails;