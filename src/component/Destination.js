import React from "react";

import { Link } from 'react-router-dom';
import './Empty.css';
const Destination = () => {
  return (
    <>
     
      <div>
      <div className="custom1_card1">
      <div className="white">
        <h2 className="img"></h2>
        <br />
        <br />

      
        <div  className="column">
       <Link to="/view"> <img
        
            className="img11"
            src="https://cdn.getyourguide.com/img/tour/637bac014c869.jpeg/132.webp"
            height="200"
            width="245"
            alt="Japan"
          /></Link>  
          

          <h2 style={{ color:"gold"} }className="img12">London</h2>
      <Link to="/view"> <h2 className="img13">Book Now 10% OFF</h2> </Link>  
        </div>


        <div  className="column">
          <img
        
            className="img11"
            src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/fc/9e/41.jpg"
            height="200"
            width="245"
            alt="Japan"
          />
          <h2 style={{ color:"gold"} }className="img12">Switzerland</h2>
          <Link to="/view"> <h2 className="img13">Book Now 15% OFF</h2> </Link>  
        </div>

 
             <div className="column">
          <img
            className="img14"
            src="https://media.cntraveler.com/photos/58d2b8c7ed5947303561e5f3/master/w_1920%2Cc_limit/ashikaga-flower-park-wisteria-GettyImages-473675978.jpg"
            height="200"
            width="150"
            
            alt="Japan Flower Park"
          />
          <h2 style={{ color:"gold"}}className="img15">Japan Flower Park</h2>
          <Link to="/view">     <h2 className="img16">Book Now 15% OFF</h2> </Link>  
        </div> 





        <div>
          <img
            className="img1"
            src="https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width="350"
            height="200"
            left='20px'
            alt="London"
          />
          <h2 style={{ color:"gold"}} className="h1">London</h2>
          <Link to="/view">    <h2 style={{color:'blue'}}className="img2">Book Now 25% OFF</h2></Link>  
       <br></br>
       <br></br>
       <br></br>

       </div>

       
       <div  className="column">
          <img
        
            className="img11"
            src="https://www.dearjapanese.com/wp-content/uploads/2023/02/beaches-in-japan-.jpeg"
            height="200"
            width="245"
            alt="Japan"
          />
          <h2 style={{ color:"gold"} }className="img12">Japan</h2>
          <Link to="/view">    <h2 className="img13">Book Now 15% OFF</h2></Link>  
        </div>


        
        <div className="column">
          <img
            className="p1"
            src="https://images.pexels.com/photos/3009663/pexels-photo-3009663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width="360"
            height="200"
            alt="New York"
          />
          <h2 style={{color:'gold'}} className="img3">New York</h2>
          <Link to="/view">   <h2 className="img4">Book Now 20% OFF</h2></Link>  
        </div>

        <div className="column">
          <img
            className="img5"
            src="https://images.pexels.com/photos/472309/pexels-photo-472309.jpeg?auto=compress&cs=tinysrgb&w=600"
            height="200"
            width="345"
         
            alt="Thailand"
          />
          <h2 style={{color:"gold"}} className="img6">Thailand</h2>

          <Link to="/view">   <h2 className="img7">Book Now 25% OFF</h2></Link>  
        </div>
        <div className="column">
          <img
            className="img8"
            src="https://images.chinahighlights.com/allpicture/2021/02/1522abf0edb448c4aaf0f50a_cut_750x400_10.webp"
            height="200"
            width="345"
            alt="China"
          />
          <h2 style={{color:"gold"}} className="img9">China</h2>
          <Link to="/view">      <h2 className="img10">Book Now 15% OFF</h2></Link>  
        </div>
           


        </div>
      </div>
      </div>
    </>
  );
};

export default Destination;
