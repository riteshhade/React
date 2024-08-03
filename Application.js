import react, {useState} from "react";
import axios from "axios";

function Application()
{
    const[id,setId]= useState("");
    const[name,setName]= useState("");
    const[email,setEmail]= useState("");
    const[phno,setPhno]= useState("");

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/register",{
                id:id,
                name:name,
                email:email,
                phno:phno
            })
            alert("Registration successfull");
            setId("");
            setName("");
            setEmail("");
            setPhno("");
        } catch (err) {
            console.log("Something Wnet Wrong!!!!");
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit} className="demo" >
                Id:<input type="text" placeholder="Enter Id" onChange={(e)=>setId(e.target.value)}/> <br/> <br/>
                Name:<input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/> <br/> <br/>
                Email:<input type="text" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/> <br/> <br/>
                Phno:<input type="text" placeholder="Enter Phno" onChange={(e)=>setPhno(e.target.value)}/> <br/> <br/>
                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    )
}

export default Application;