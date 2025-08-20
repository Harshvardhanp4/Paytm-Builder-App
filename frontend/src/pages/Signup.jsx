import { BottomWarning } from "../components/BottomWarning"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { Button } from "../components/Button"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Signup = () =>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign Up"}></Heading>
                <SubHeading label={"Enter your information to create an account"}></SubHeading>
                <InputBox onChange={e=>{
                  setFirstName(e.target.value);  
                }}placeholder="Harsh" label={"First Name"}></InputBox>
                <InputBox onChange={e=>{
                setLastName(e.target.value);
                }}placeholder="Patil" label={"Last Name"}></InputBox>   
                <InputBox onChange={e=>{
                setUsername(e.target.value);
                }} placeholder="harsh@gmail.com" label={"Email"}></InputBox>   
                <InputBox onChange={e=>{
                setPassword(e.target.value);
                }}placeholder="password@123" label={"Password"} type = "password"></InputBox>   
                 <div className="pt-4">
                    <Button onClick={async()=>{
                        try{
                            const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                                firstName,
                                lastName,
                                username,
                                password
                            });
                            localStorage.setItem("token", response.data.token);
                            navigate("/dashboard")
                            
                        }catch (err){
                            console.error("Signup Failed", err)
                        }
                        
                    }} label= {"Sign Up"}></Button>
                </div>
        
            <BottomWarning label={"Already have an account?"} buttonText={"Sign In"} to={"/signin"}></BottomWarning>
            </div>
        </div> 
    </div>
    
}