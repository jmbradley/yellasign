import React from 'react';
import OnePoint from '../assets/Black_Left_Arrow.png';
import TwoPoint from '../assets/doublearrow.png';
import luv from '../assets/atllove.png';
import './Sign.css';

function Sign(props) {
    console.log(props.signText.signText);

if (props.arrow === false) {
    return ( 
        <div className="signcard">
        <img className="luvsign2" src={luv} alt="Luv From ATL"/>
            <h1 className="top">{props.signText.signText} </h1>
                <img src ={OnePoint} alt="Arrow"/>
            <h1 className="bottom"> {props.signText.signText} </h1>
            <img className="luvsign" src={luv} alt="Luv From ATL"/>
        </div>
    )}

else {
    return ( 
        <div className="signcard1">
                <img className="luvsign3" src={luv} alt="Luv From ATL"/>
                <h1 className="top1">{props.signText.signText}</h1>
            <img className="img1" src ={TwoPoint} alt="Arrow"/>
                <h1 className="bottom1"> {props.signText.signText} </h1>
                <img className="luvsign1" src={luv} alt="Luv From ATL"/>
        </div>
    )}
}

  export default Sign;