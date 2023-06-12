import {React, useEffect, useState} from "react";


const Home = () => {

    const [user, setUser] = useState({})

    useEffect(() => {
        const usuarioLogado = JASON.parse(localStorage.getItem('user'));
        if(usuarioLogado){
            setUser(usuarioLogado)
        }
    },[])
    return(
        <h1>Seja bem vindo {user.nome}</h1>
        
        )

}

export default Home