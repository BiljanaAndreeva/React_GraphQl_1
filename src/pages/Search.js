import React , {useState} from "react";
import {gql, useLazyQuery} from "@apollo/client";
import Character from "./Character";
import './Search.css';

const GET_CHARACTER_LOCATION=gql`
query GetCharacterLocation($name:String!){
  characters(filter:{
    name: $name
  }){
    results{
      location{
        name
      }
    }   
  }
  
}`


export default function Search(){

    const[name,setName]=useState("");

    const[getLocation, {error,loading,data,called}]=useLazyQuery(GET_CHARACTER_LOCATION,{
        variables:{
            name
        }
    })

    console.log({error,
        loading,
        data,
        called})

    return(
        <div className="mySearch">
            <input className="input" value={name}
                    placeholder="Search by Name" 
                    onChange={(e)=>setName(e.target.value)} />
             <button className="btnSearch" onClick={()=>getLocation()}>Search</button>       
            {loading&&<div>Loading...</div>}
            {error&&<div>Error...</div>}
            {data && (
                <ul>
                   {data.characters.results.map((character)=>{
                        return <li key={character.id}>{character.location.name}</li>
                    })
                    }
                </ul>
            )}
        </div>
    )
}