import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

function Filter({ search, rateinput }) {
  return (
    <div className="filter">
      <div className="row g-2">
        <div className="col" >
          <input
            type="text"
            className="form-control"
            placeholder="Search for…"
            onChange={(e) => search(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <a href="#" className="btn btn-icon" aria-label="Button">
            {/* Download SVG icon from http://tabler-icons.io/i/search */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </a>
        </div>
      </div>
      <div className='container5'>
      <div className="display-6" >
      
        <StarRatingComponent
          name="rating" 
          onStarClick={(value) => rateinput(value)}
        />
      </div>
      <div className="col-auto" >
          <a href="#" className="btn btn-icon" aria-label="Button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </a>
        </div>
        </div>
    </div>
  );
}

export default Filter;