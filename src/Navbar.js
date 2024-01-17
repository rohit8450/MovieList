import React from "react";
import styled from "styled-components";


const Nav = styled.div`
width: 100%;
height: 50px;
background:linear-gradient(170deg, #1bc059, #0d47a1);;
display:flex;
justify-content: space-between;
  `
  const Title = styled.div`
    fontSize: 50;
    color: #fff;
    fontWeight: 600;
    fontFamily:  Montserrat ,sans-serif;
    textTransform: uppercase;
    marginLength: 20
    &:hover : 20px;
    &:hover{color: #0f0f}
  `

class Navbar extends React.Component{
    render(){
      const {cartCount} = this.props;
      // console.log(this.props)
        return(
            <>
            <Nav>
                <Title>Movie App</Title>
                <div style={styles.cardContainer}>
                    <img alt="cart icon" src="https://cdn-icons-png.flaticon.com/128/2331/2331970.png" style={styles.cardIcon}/>
                    <span style={styles.cartCount}>3</span>
                </div>
                </Nav>
            </>
        )
    }
}



export default Navbar;


// another method of styling using OBJECT

const styles = {
  nav: {
    width: "100%",
    height: 70,
    background: "blue",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "centre",
    position: "relative",
  },

  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: 600,
    fontFamily: '"Montserrat" ,sans-serif',
    textTransform: "uppercase",
    marginLength: 20,
  },
  cardIcon: {
    height: 50,
    marginRight: 10,
    position: "relative",
    top: 10,
  },
  cardContainer: {
    position: "relative",
    cursor: "pointer",
  },
  cartCount: {
    background: "orange",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 10,
    top: -5,
    fontSize: 12,
  },
};
