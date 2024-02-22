import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Home.css';
import { GrLocation } from "react-icons/gr";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { HiFilter } from "react-icons/hi";
import { TiArrowRightThick } from "react-icons/ti";

const Home = () => {
  const [destination, setDestination] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const navigate = useNavigate();

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const exploreNow = () => {
    navigate('/explore', { state: { destination, date: selectedDate } });
  };

  return (
    <div className="container">
      <div className="video-container">
        <div className="video-overlay"></div>
        <video autoPlay muted loop id="background-video">
          <source src="home.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="form">
        <div className="form-content">
          <h1 className="form-title">Explore Your Next Adventure</h1>
          <p className="subTitle">
            Travel to your favorite city with respect for the environment
          </p>

          <div className="cardDiv grid">
            <div className='destinationInput'>
              <label htmlFor="city">Search your Destination</label>
              <div className='input flex'>
                <input
                  type="text"
                  placeholder="Enter the name here....."
                  value={destination}
                  onChange={handleDestinationChange}
                />
                <GrLocation className="icon"/>
              </div>
            </div>
            
            <div className='dateInput'>
              <label htmlFor="date">Search your date</label>
              <div className='input flex'>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </div>
            </div>

            <a href="#" className="btn explore-btn" onClick={exploreNow}>
              Explore Now <TiArrowRightThick className="icon" />
            </a>
          </div>
        </div>
      </div>

      <div className='searchoptions flex'>
        <HiFilter className='icon'/>
        <span>MORE FILTER</span>
        
        <div className='homeFooterIcons flex'>
          <div className='righticons'>
            <FiFacebook className='icon'/>
            <FiInstagram className='icon'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
