import React, { Component } from 'react';
import {getMovies} from "./../services/fakeMovieService";
import {getGenres} from './../services/fakeGenreService'

import paginate from "./../utils/paginate";
import ListGroup from './common/listGroup';



import Pagination from './common/pagination';
import MoviesTable from './moviesTable';

class Movies extends Component {
    state = { 
        movies: [],
        pageSize: 4,
        currentPage: 1,
        genres: [],
        currentGenre:{name: "All Genre"}
     } 

    componentDidMount() {
      let genres = getGenres()
      genres = [{name: "All Genre"}, ...genres];

      this.setState({movies:  getMovies(), genres});
    }

    handelDelete = (movie) => {
        const movies = this.state.movies.filter((item) => item !== movie);
        this.setState({movies});
    }

    handelLike = (movie) => {
        let movies = [...this.state.movies];
        let index = movies.indexOf(movie);
        movies[index].liked = !movies[index].liked
        this.setState({movies});

    }

    handelPageChange = (page) => {
      this.setState({currentPage: page})
    }

    handelGemreSelect = (genre) => {
       this.setState({currentGenre: genre, currentPage: 1});
    }

    
    render() { 
        const {length:moviesCount} = this.state.movies;
        let {movies,currentPage,pageSize,genres,currentGenre} = this.state;
        if (moviesCount === 0)  return <h1 className="bg-danger">There are no movies in the database.</h1>

        let filteredMovies = currentGenre && currentGenre._id ? movies.filter(m => m.genre._id === currentGenre._id) : movies;
        
        let paginateMovies = paginate(filteredMovies,currentPage,pageSize)
        return (<div>
            <h1 className="text-center">Showing {moviesCount} Data in Database</h1>
             <div className="row">
             <div className="col-3">
              <ListGroup items={genres} currentGenre={currentGenre} onItemSelect={this.handelGemreSelect}/>
             </div>
               <div className="col-9">
                  <MoviesTable onLiked={this.handelLike} onDelete={this.handelDelete} paginateMovies={paginateMovies}/>
                  <Pagination itemsCount={filteredMovies.length} pageSize={pageSize} currentPage={currentPage} onPageChange={this.handelPageChange}/>
               </div>
             </div>

              
        </div> );
    }
}
 
export default Movies;