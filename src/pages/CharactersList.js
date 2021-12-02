import React from "react";
import { Link } from "react-router-dom";
import { useCharacters } from '../hooks/useCharacters'
//import { useQuery, gql } from "@apollo/client";
import './CharacterList.css';

// const GET_CHARACTERS = gql`
// query {
//     characters{
//       results{
//         id
//         name
//         image
//       }
//     }
    
//   }`



export default function CharactersList(){

    const {error,loading,data}= useCharacters();
    
    

    console.log({error,loading,data})
    if(loading) {
        return <div>loading...</div>
    }
    if(error){
        return <div>Error...</div>
    }

    return( 
    <div className="container">
        
        {/* <Link to="/Search">
            <button>Search by name</button>
        </Link> */}
    
        <div className="CharacterList">
            {data.characters.results.map((character)=>{
            return (
                <Link to={`/${character.id}`}>
                    <img src={character.image} alt="biii"></img>
                    <h2 key={character.id}>{character.name}</h2>
                </Link>
            ) 
            }
            )}
        </div>
    </div>    
        )
    
}