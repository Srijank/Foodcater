import Card from "./Card";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
const Restaurent = (props)=>{
    console.log(props.searchInput);
    
    const [originaldata,setOriginalData]= useState([])
    const [modifieddata,setModifiedData] = useState([]);
    const [toprated,setTopRated] = useState(0)
  
    useEffect(()=>{
       fetchData();
    },[]);
    const fetchData= async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9586471&lng=77.4792926&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const datajson = await data.json();
  const originaldatas=  datajson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || datajson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants ;
  console.log(originaldatas);
  setOriginalData(originaldatas || []);
  setModifiedData(originaldatas || []);
    }

    useEffect(()=>{
   
        props.searchInput ? setModifiedData(originaldata.filter((search)=>{return search.info.name.toLowerCase().includes(props.searchInput.toLowerCase())})) : setModifiedData(originaldata);
        console.log(modifieddata);},[props.searchInput,originaldata])

    if(originaldata.length===0){
        return <Shimmer/>
    }
    if(modifieddata.length===0){
        return <h1>No results found</h1>
    }
    
    return(
        <div >
            <button className="top-rated" onClick={()=>{
            if (toprated==0){
             let  setdata=originaldata.filter((res)=>{
                    return res.info.avgRating>4
                   })
                   setModifiedData(setdata);
                   setTopRated(1);
            }
            else {
                setModifiedData(originaldata);
                setTopRated(0);
            }
        }} >  Top Rated </button>
    
        <div className="cards">
        {modifieddata ?
         modifieddata.map( (data)=>(
            <Card name={data.info.name} cuisine= {data.info.cuisines} rating ={data.info.avgRating} type={data.type} image={data.info.cloudinaryImageId} link={data.cta.link} costfortwo={data.info.costForTwo} deliveryTime= {data.info.sla.deliveryTime} closeTime={data.info.availability.nextCloseTime}/>
        )):<h1>No results found</h1>}
        </div> 
        /</div>
    )
}

export default Restaurent;