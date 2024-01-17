import React from "react";
import Moviecard from "./Moviecard";



class MovieList extends React.Component{
    




    render(){
        // const {title,plot,poster,rating,price,stars,fav,cart} =this.state.movies;
        const {movies, addStars, decStars, toggleFav, toggleCart,} = this.props;
        console.log(this.props);
        return (
           <>
          
           {/* <Moviecard title= {title}
                      plot=  {plot } 
                        price= {price}
                        stars={stars}
                        fav= {fav}
                        cart= {cart}
                        /> */}
                  {movies.map((movie) =>  <Moviecard movies = {movie}
                                                     addStars= {addStars}
                                                     decStars= {decStars}
                                                     toggleFav= {toggleFav}
                                                     toggleCart = {toggleCart}
                                                     key= {movie.id}  />)}
          
          
           </>
            )
    }
}



export default MovieList;