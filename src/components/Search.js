import React,{ useState } from "react";
import Restaurent from "./Restaurent";



const Search = ()=>{
    const [searchInput,setSearchInput] = useState("");
    const [searchstring,setSearchString]= useState("")
    const handleSearch = ()=>{
     setSearchString(searchInput);
     
    }

     return (
        <div>
        <div className="search-bar">
        <input type="text" placeholder="Search for Restauarents" id="resto-find" value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}/>
        <p className="list-item search-button" onClick={()=>{
            // setSearchInput(searchInput);
            handleSearch();
       
    }} >Search</p>
       
        </div>
         <Restaurent searchInput={searchstring}/> 
        </div>
     
    )
    ;
    
}

export  default Search;