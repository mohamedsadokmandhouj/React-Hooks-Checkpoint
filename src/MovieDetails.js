import React from 'react'
import { Link, useParams } from 'react-router-dom'


const MovieDetails = ({ movielist }) => {
  const params = useParams()
  
  const movie = movielist?.find((el) => el.id == params.id)
  

  return (
    <div className="movie-details">
      {movie ? (
        <>
          <h1 className="movie-title">{movie.title}</h1>
          <h2 className="movie-description">{movie.description}</h2>
          <video controls className="video">
            <source src={movie.trailer} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Link to="/" className="back-button">
            Back to home
          </Link>
        </>
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  )
}

export default MovieDetails
