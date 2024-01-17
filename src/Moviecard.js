import {Component} from "react";


function  Moviecard(props){
  
//     addStars =() =>{
//         // from 1
//         // this.setState({
//         //         stars: this.state.stars +0.5
//         //     });

//             // form 2
//             if(this.state.stars >=5){
//                 return;
//             }
//             this.setState((prevState) => {
//                 return{
//                     stars: prevState.stars+0.5
//                 }
//             });
      
//         // this.state.stars += 0.5;
//         // console.log("this.state.stars:", this.state.stars);
//     }
//     decStars =() =>{
//         // from 1
//         if(this.state.stars <=0){
//             return;
//         }
//         this.setState({
//                 stars: this.state.stars -0.5
//             });
//     }

// handleFav = () =>{
// this.setState({
//     fav: !this.state.fav
// })
// }

// handleCart = () => {
//     this.setState({
//         cart: !this.state.cart
//     })
// }

        const {movies, addStars, decStars, toggleFav, toggleCart} = props;

        const {title,plot,price,rating,stars,fav,cart} = props.movies;
        return (
            <div className="main">
                <div className="movie-card">
                <div className="left">
                    <img alt="Poster" 
                    src="https://i.pinimg.com/236x/15/1b/fd/151bfd49c2d0a4fde140ecfeb8caf1a5.jpg"/>
                </div>
                <div className="right">
                    <div className="title">{title}</div>
                    <div className="plot">{plot}</div>
                    <div className="price">Rs. {price}</div>

                    <div className="footer">
                        <div className="rating">{rating}</div>
                        <div className="star-dis">

                            <img className="str-btn" alt="decrease"
                             src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                             onClick = {() => {decStars(movies)}}/>
                           
                                <img alt="star" 
                                src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                                 className="stars"/>
                                  <img className="str-btn" alt="increase" 
                                  src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
                                  onClick = {() => {addStars(movies)}}/>

                                  <span className="starCount">{stars}</span>
                        
                        </div>

                        {/* {fav? <button className="unfavourite-btn" onClick={this.handleFav}>Un-favourite</button>:
                            <button className="favourite-btn"onClick={this.handleFav}>Favourite</button>} */}

                        <button className={fav?"unfavourite-btn":"favourite-btn"} 
                        onClick={() => {toggleFav(movies)}}>{fav?"unfavourite-btn":"favourite-btn"}</button>
                    
                    {/* {cart?<button className="removecart-btn"onClick={()=> {toggleCart(movies)}}>Remove from cart</button>:
                        <button className="cart-btn"onClick={this.toggleCart}>Add to cart</button>} */}

                        <button className={cart?"unfavourite-btn":"cart-btn"}
                        onClick = {() => {toggleCart(movies)}}>{cart? "Remove from cart":"Add to cart"}</button>
                    </div>
                </div>
                </div>
                
            </div>
            )
    }




export default Moviecard;