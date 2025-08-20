import { useState } from "react";
import { AppBar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import { useEffect } from "react";
import axios from "axios";
export const Dashboard= ()=>{
    const [balance, setBalance] = useState(0);
    useEffect(() => {
    const fetchBalance = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
                headers: { Authorization: `Bearer ${token}` }
            });
            setBalance(response.data.balance);
        } catch (err) {
            console.error(err);
        }
    };
    fetchBalance();
}, []);
    return <div>
        <AppBar/>
            <div className="m-8">
                <Balance value={balance}></Balance>
                <Users/>
            </div>
        
    </div>
}