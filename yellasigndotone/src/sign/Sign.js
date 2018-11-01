import React from 'react';
import OnePoint from '../assets/Black_Left_Arrow.png';
import TwoPoint from '../assets/doublearrow.png';
import luv from '../assets/atllove.png';
import './Sign.css';

function Sign(props) {

if (props.arrow === false) {
    return ( 
        <div className="signcard">
        <img className="luvsign2" src={luv} alt="Luv From ATL"/>
            <h1 className="top">props.name </h1>
                <img src ={OnePoint} alt="Arrow"/>
            <h1 className="bottom"> props.name </h1>
            <img className="luvsign" src={luv} alt="Luv From ATL"/>
        </div>
    )}

else {
    return ( 
        <div className="signcard">
        <img className="luvsign2" src={luv} alt="Luv From ATL"/>
            <h1 className="top">props.name </h1>
                <img src ={TwoPoint} alt="Arrow"/>
            <h1 className="bottom"> props.name </h1>
            <img className="luvsign" src={luv} alt="Luv From ATL"/>
        </div>
    )}
}

  export default Sign;