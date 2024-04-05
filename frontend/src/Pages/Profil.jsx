import { Avatar } from "@material-tailwind/react";
import { Typography } from '@material-tailwind/react';
import axios from "axios";
import React, {useState} from "react";



export const Profil = () => {
    const [profil, setProfil] = useState()

    function getUser(){

        axios.get('http://localhost:8000/users/1').then((response) => {
            setProfil(response.data)
        })
    }

    return (
        <>
        { profil == null? 
            <div onLoad={getUser} className="flex items-center w-full">
                <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xxl"/>
            
                <div className="border border-gray-300 p-4 rounded-md m-4 flex-1 bg-blue-50">
                    <Typography variant="h4" color="blue">
                        Profil not found
                    </Typography>
                    <Typography variant="paragraph">
                        Profil not found
                    </Typography>
                    
                </div>
            </div>
        :
        <div onLoad={getUser} className="flex items-center w-full">
            <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xxl"/>
           
            <div className="border border-gray-300 p-4 rounded-md m-4 flex-1 bg-blue-50">
                <Typography variant="h4" color="blue">
                    {profil.nom + " " + profil.prenom}
                </Typography>
                <Typography variant="paragraph">
                    {profil.email + " " + profil.telephone}
                </Typography>
                
            </div>
            
        </div>
        }
        </>
    )
}
