import React from 'react';

const Articles = (props) => {

    const acheter = () => {
        props.achat()
    }

    const couleur = props.stock

    let btn = "Acheter"
    if(couleur === 0) { 
        btn = "Plus en stock"
    }

    return (
        <div >
            <ul
             style={{
                backgroundColor: couleur === 1 ? "orange" : 
                couleur === 0 ? "red" : "white",
                }}>
                <li>Produit : {props.nom} </li>
                <li>Prix : {props.prix} € </li>
                <li>Stock : {props.stock} </li>
                <li> <img src={props.image}  alt="imgBoison" /></li>
                <li>
                    <button value={props.key} onClick={acheter}>
                        {btn}
                    </button></li>
            </ul>
        </div>
    );
};

export default Articles;


