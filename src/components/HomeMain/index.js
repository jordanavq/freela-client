import React from 'react';
import ImgMain from "../../images/Img-Main.jpg";
import "../HomeMain/index.css";
import LogoMain from "../../images/Logo-Freela-Main.png";
import { Link } from "react-router-dom";


const HomeMain = () => {
    return(
       <div >
           
           <div>
          
           <img
            className="ImgMain"
            src={ImgMain}
            alt="Waiter ilustration"
            width="700"
            height="300"
          />
        </div>
        
        <div>
          
           <img
            className="LogoMain"
            src={LogoMain}
            alt="Waiter ilustration"
            width="340"
            height="300"
          />
          </div>
          <div>
          <h5 className="Main-text">
            O site perfeito para encontrar o melhor profissional freelancer para o seu bar ou restaurante.
        </h5>
        <Link exact to="/">
        <button type="button" class="btn btn-primary btn-lg">QUERO TRABALHAR</button>
        </Link>
        <Link exact to="/">
        <button type="button" class="btn btn-primary btn-lg">QUERO ANUNCIAR</button>
        </Link>
          </div>
          </div>
    )
};

export default HomeMain;
