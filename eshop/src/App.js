import './App.css';
import Articles from './components/Articles';
import { useState } from 'react'
import Jordan1 from "./img/1.webp"
import Jordan2 from "./img/2.jpg";
import Jordan3 from "./img/3.jpg";
import Panier from './components/Panier';

function App() {
  const [articles, setArticles] = useState(
    [{
      id: 1,
      nom: 'Jordan Blanc-Gris',
      prix: 150,
      stock: 6,
      lien: Jordan1
    },
    {
      id: 2,
      nom: 'Jordan Noir-Rouge',
      prix: 160,
      stock: 6,
      lien: Jordan2
    },
    {
      id: 3,
      nom: 'Jordan Gris-Blanc',
      prix: 200,
      stock: 6,
      lien: Jordan3
    }]);

    // Panier
  const [panier, setPanier] = useState([]);
    // Argent
  const [argent, setArgent] = useState(1500);
 
  const acheter =(index,prix) =>{
     let copieArgent = argent;
     let copieArticle = articles;
     if(copieArgent > 0 && copieArticle[index].stock > 0) {
       copieArgent -= prix
       copieArticle[index].stock--
       panier.push(copieArticle[index])
     }

     setArgent(copieArgent)
     setArticles(copieArticle)
     setPanier(panier)     
  }

  const rendre = (index,element) =>{
    let copieArgent = argent
    let copieArticle = articles
    panier.splice(index,1)
    copieArgent+=element.prix
    element.stock++
    setPanier(panier)
    setArgent(copieArgent)
    setArticles(copieArticle)
  }

  let titre = "Mon solde :" ;
  if(argent === 0) { 
    titre = "plus d'argent"
  }else if (argent <= 0) {
    titre = "je prends un credit !"
  }

  return (
    <div className="App">
     <h1>  {titre}  {argent} euros !</h1>
     <div className ="liste">
       {articles.map((el,index)=>( 
                <Articles 
                key = {el.id}
                nom = {el.nom}
                prix = {el.prix}
                image = {el.lien}
                stock = {el.stock}
                achat = {acheter.bind(this,el.prix ,el.id, index)}
                achat = {()=>acheter(index ,el.prix,el.stock)}
                />
                ))} 
     </div>
     <h1> Mon panier :</h1>
     {panier.map((element,index)=>{
    return (
     <Panier 
     vente = {element.nom}
     img = {element.lien}
     key = {element.id}
     click ={()=>rendre(index , element) }
      />
    )
     })} 
    </div>
  );
}

export default App;
