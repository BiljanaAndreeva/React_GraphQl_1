import React from 'react'
import "./Character.css"
import { useCharacter } from '../hooks/useCharacter';
import { useParams } from 'react-router';



export default function Character() {

    const {id} = useParams()

    const {data,loading,error}= useCharacter(id);
    console.log({error,loading,data})

    if(loading) return <div>Cekame...</div>

    if(error) return <div>Error...</div>

    return (
        <>
        <div className='Character'>
            <img src={data.character.image} width={750} height={750} alt='bii'/>
        </div>
        <div className="Character-content">
            <h1>{data.character.name}</h1>
            <div className="Character-episode">
                {data.character.episode.map(episode=>{
                    return <div key={episode.id}>{episode.name}-<b>{episode.episode}</b></div>
                })}
            </div>
        </div>
        </>
    )
    
}
