import { Link } from "react-router-dom";

const Carlist = ({cars,x,title }) => {
    //({blogs,title , handleDelete})
    // const blogs = props.blogs;
    // console.log(props)
    return (  
        <div className="car-list">
            <h2>{ title} </h2>
            {cars?.map((car) => (
            <div className="car-preview" key={car.newCarId}>
                {x===0?
                    <Link to={`/car/${car.newCarId}`}>
                        <h2>{car.name}</h2>
                        <h2>{car.model}</h2>
                    </Link>  
                :
                    <Link to={`/carold/${car.oldCarId}`}>
                    <h2>{car.name}</h2>
                    <h2>{car.model}</h2>
                </Link> 
                }
            </div>
        ))}
        </div>
    );
}
 
export default Carlist;