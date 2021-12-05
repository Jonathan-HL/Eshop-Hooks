import React from 'react';

const Panier = (props) => {
    const rendre =  () => {
        props.click()
    }
    return (
        <div>
            <ul className="panierListe">          
                <li> 
                <img src={props.img} alt="" />
                    Quantité : 1 {props.vente} 
                </li>
                <li> <button onClick={rendre}>Rendre</button> </li>               
                </ul>
        </div>
    );
};

export default Panier;


