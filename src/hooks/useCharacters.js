import React from 'react'
import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS= gql`
query{
    characters{
        results{
            id
            name
            image
        }
    }
} `

export const useCharacters=()=> {
   const obj = useQuery(GET_CHARACTERS);
   const {error,loading,data}=obj

    return  {error,loading,data}
     
    
}
