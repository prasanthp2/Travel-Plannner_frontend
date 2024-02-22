import React from 'react';

const Explore = () => {
  return (
    <div className='container'>
      <div className="Explore">
        <img src="https://images.pexels.com/photos/1510595/pexels-photo-1510595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="poster" />
        <div className="movie details">
          <div className="box">
            <h4 className="title">For Your Dream Journey</h4>
            <p className="rating">Rating: 9</p>
          </div>
        </div>
      </div>

      <div className="Explore">
        <img src="https://images.pexels.com/photos/220887/pexels-photo-220887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="poster" />
        <div className="movie details">
          <div className="box">
            <h4 className="title">For Your Dream Journey</h4>
            <p className="rating">Rating: 8.5</p>
          </div>
        </div>
      </div>

      <div className="Explore">
        <img src="https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="poster" />
        <div className="movie details">
          <div className="box">
            <h4 className="title">For Your Dream Journey</h4>
            <p className="rating">Rating: 8</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
