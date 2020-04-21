import React,{useState,createContext} from 'react';
// import './d.css';

export const MovieContext =createContext();
export const MovieProvider = (props) =>{
    const [movies,setMovies] = useState([
        {
            name :'harry potter',
            price :'$10',
            id:23124
        },
        {
           name :'Game of Thronesr',
           price :'$10',
           id:123456
       },
       {
           name :'Inception',
           price :'$10',
           id:45689
       }
     
]);
        return (
            
                <form className="center">
            <MovieContext.Provider value ={[movies,setMovies]}>
                {props.children}
            </MovieContext.Provider>
            </form>
        );
 
}
