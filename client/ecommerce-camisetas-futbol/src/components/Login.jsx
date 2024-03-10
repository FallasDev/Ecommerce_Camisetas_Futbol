import { useEffect, useState } from "react";

function Login(){

    const [ data,setData ] = useState({})

    useEffect(() => {
        fetch("https://ecommerce-camisetas-futbol-ltiq.onrender.com/GoalThreads/registro",{
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((dataJson) => {console.log(dataJson)})
        .catch((err) => console.log(err))
    },[data])

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const res = {
            username: ev.target.mail.value,
            password: ev.target.password.value
        }
        setData(res)
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="mail"/>
            <input type="text" name="password"/>
            <button>Enviar</button>
        </form>
    )
}

export default Login