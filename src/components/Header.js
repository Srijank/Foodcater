const Header = ()=>{
    return ( <div className="navbar">
         <div className="nav-logo">
             <img src="https://static.vecteezy.com/system/resources/previews/005/513/590/non_2x/catering-quality-food-design-premium-logo-vector.jpg" alt="logo" className="logo"/>
            <div className="address"><h4>Location</h4>
             <p className="location">#1081 Krishna Kaveri Nilaya ....</p>
             </div> 
         </div>
         
         <div className="nav-items">
             <ul>
               <li className="list-item">Home</li> 
               <li className="list-item">About Us</li> 
               <li className="list-item">Contact Us</li> 
               <li className="list-item">Cart</li> 
             </ul>
 
         </div>
     </div>
 )
 }
 export default Header;