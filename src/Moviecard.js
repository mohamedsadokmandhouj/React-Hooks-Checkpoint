import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarRatingComponent from 'react-star-rating-component';

function Moviecard({ movie }) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={movie.posterUrl} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title> 
                    <Card.Text>
                        {movie.description}
                    </Card.Text>
                    <div className="text-center display-7">
                        <StarRatingComponent
                            name="rating" /* name of the radio input, it is required */
                            value={movie.rating} /* number of selected icon (`0` - none, `1` - first) */
                            starCount={5} /* number of icons in rating, default `5` */
                        />
                    </div>
                    <Button variant="primary">Play</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Moviecard;