import React,{useState,useContext} from 'react';
import {MovieContext} from './MovieContext'
const AddMovie =() =>{
 const [name,setName] = useState('');
 const [price,setPrice] = useState('');
 const [movies,setMovies] =useContext(MovieContext)     
 const updateName=(e)=>{
      setName(e.target.value);
 }
 
 const updatePrice=(e)=>{
    setPrice(e.target.value);
}
const addMovie =(e) =>{
    e.preventDefault();
    setMovies(prevMovies=>[...prevMovies,{name:name,price:price}])
} 
const mStyle={
    background:"white",
    width:'500px',
     height:'500px',
     color:"black"
     
  }
 return (
      
      <div>
           <div className="row-md-100 mt-5 center">
         <div className="col-md-100 center">
     {/* <div className="card card-body" style={mStyle}>  */}
                <form onSubmit={addMovie} >

              <input type="text" name="name" value={name} onChange={updateName}/>
              <input type="text" name="price" value={price} onChange={updatePrice}/>
              <button className="badge badge-danger m-2">Submit</button>
          </form>
          {/* </div> */}
          </div>
          </div>
      </div>

 );
};
export default AddMovie;