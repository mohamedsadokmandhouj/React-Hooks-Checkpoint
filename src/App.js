
import './App.css';
import Filter from './Filter';
import Movislist from './Movislist';
import Navigation from './Navigation';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import AddMovie from './AddMovie';

function App() {
  const [movieList, setMovieList] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
      posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0zt0lp-O3XdL8zzdrEvyzmcl6kOwfgbv4xQ&s",
      rating: 3,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      id: 2,
      title: "The Matrix",
      description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      posterUrl: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/embed/vKQi3bBA1y8",
    },
    {
      id: 3,
      title: "Interstellar",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      posterUrl: "https://images.sbs.com.au/dims4/default/c77b981/2147483647/strip/true/crop/800x450+0+0/resize/1280x720!/quality/90/?url=http%3A%2F%2Fsbs-au-brightspot.s3.amazonaws.com%2Fdrupal%2Fguide%2Fpublic%2Fgame_of_thrones_0.jpg",
      rating: 3,
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
    {
      id: 4,
      title: "Game of Thrones",
      description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
      posterUrl: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781608872190/game-of-thrones-9781608872190_hr.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/BpJYNVhGf1s",
    },
    {
      id: 5,
      title: "Prison Break",
      description: "Due to a political conspiracy, an innocent man is sent to death row, and his only hope is his brother, who makes it his mission to deliberately get himself sent to the same prison in order to break the both of them out",
      posterUrl: "https://fr.web.img5.acsta.net/pictures/17/05/22/16/49/588696.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/AL9zLctDJaU",
    },
    {
      id: 6,
      title: "La Casa de Papel",
      description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
      posterUrl: "https://fr.web.img4.acsta.net/c_310_420/pictures/21/08/02/16/08/1706767.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/embed/ZAXA1DV4dtI",
    },
    {
      id: 7,
      title: "Breaking Bad",
      description: "A high school chemistry teacher turned methamphetamine producer navigates the dangers of the criminal underworld.",
      posterUrl: "https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/HhesaQXLuRY",
    },
    {
      id: 8,
      title: "Stranger Things",
      description: "A group of young friends in a small town uncover a series of supernatural mysteries and government experiments.",
      posterUrl: "https://fr.web.img4.acsta.net/pictures/22/05/18/14/31/5186184.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/embed/b9EkMc79ZSU",
    },
    {
      id: 9,
      title: "The Witcher",
      description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys through a world where people often prove more wicked than beasts.",
      posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9l0qTSnfSABEG9p9ZJqMeLaqaMBQAQvyufQ&s",
      rating: 4,
      trailer: "https://www.youtube.com/embed/ndl1W4ltcmg",
    },
    {
      id: 10,
      title: "Narcos",
      description: "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar and the Medellín Cartel.",
      posterUrl: "https://fr.web.img4.acsta.net/c_310_420/pictures/15/07/29/14/33/086520.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/embed/U7elNhHwgBU",
    },
  ]);


  const [searchInput , setSearchInput] = useState("")
  const [rateInput , setRateInput] = useState(1)


  const addNewMovie = (movie) => {
    setMovieList([
      ...movieList , movie
    ])
  }

  const [searchinput, setsearchinput] = useState("")

  const handlesearch = (text) => {
    setsearchinput(text)
  }
  const [rateinput, setrateinput] = useState(1)

  const handlerateinput = (number) => {
    setrateinput(number)
  }

  return (
    <div className="App">
      <Navigation />
      <Filter search={handlesearch} rateinput={handlerateinput} />
      <div className='my-3 text-end me-5' >
        <AddMovie addNewMovie={addNewMovie} />
      </div>
      <Routes>
        <Route
          path='/'
          element={<Movislist data={movieList.filter((elm) => elm.title.toLowerCase().includes(searchinput.toLowerCase().trim()) && elm.rating >= rateinput)} />}
        />
        <Route path='/movie/:id' element={<MovieDetails movielist={movieList} />} />
        <Route path='*' element={<h1> not found </h1>} />
      </Routes>
    </div>
  );
}

export default App;
