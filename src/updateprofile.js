import { useState } from "react";
import { useHistory } from "react-router-dom";
const axios = require('axios');

const UpdateProfile = () => {
    const [name, setname]= useState();
    const [sex, setsex]= useState();
    const [password, setpassword]= useState();
    const [email, setemail]= useState();


    const previouspage = useHistory();
    
    const handlesub =(e) =>{
      e.preventDefault();  
      const profile={name,sex,password,email};
      axios.post('http://localhost:1337/profile/', {
            name: name,
            email: email,
            password: password,
            sex: sex
        }).then(() => {
            previouspage.push('/')
            })



    //  fetch('http://localhost:8000/blogs/', {
    //      method:'POST',
    //      headers: {"Content-Type":"application/json"},
    //      body: JSON.stringify(blog) 
    //  })
    }
    return (  
        <div className="create"> 
            <h2>Add a new blog</h2>
            <form onSubmit={handlesub}>
                <label> name </label>
                <input 
                    type="text"
                    required
                    value={name}
                    onChange={(e)=> setname(e.target.value) }
                />
                <label> password</label>
                <input 
                    type="text"
                    required
                    value={password}
                    onChange={(e)=> setpassword(e.target.value) }
                />
                <label> email</label>
                <textarea 
                    required
                    value={email}
                    onChange={(e)=> setemail(e.target.value) }
                ></textarea>
                <label>sex</label>
                <select
                    value={sex}
                    onChange={(e)=>setsex(e.target.value)}
                >
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
                <button>update</button>
    
            </form>
        </div>
    );
}
 
export default UpdateProfile;