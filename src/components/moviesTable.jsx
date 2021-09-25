import React from 'react';
import Like from './common/like';

const MoviesTable = ({paginateMovies,onLiked,onDelete}) => {
    return (<table className="table">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                     {paginateMovies.map((movie) => (<tr key={movie._id}>
                    <th scope="row">{movie.title}</th>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><Like onLiked={() => onLiked(movie)} liked={movie.liked}/></td>
                    <td><button onClick={() => onDelete (movie)} className="btn btn-danger">Delete</button></td>
                    </tr>))}
                </tbody>
            </table> );
}
 
export default MoviesTable;