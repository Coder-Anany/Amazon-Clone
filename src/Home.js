import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/July2023/Monsoongd/August/GW/GW-heros-Pc-1_3000x1200._CB597354947_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="
            Apple AirPods (3rd Generation) with Lightning Charging Case ​​​​​​​"
            price={19600}
            rating={5}
            image="https://m.media-amazon.com/images/I/61CVih3UpdL._SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="Pomelo Best Women's PU Leather Handbag with Multiple Internal Pockets"
            price={9556}
            rating={4}
            image="https://m.media-amazon.com/images/I/71nNiiL8fHL._UL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="A/X Armani Exchange Smart IP Stainless Steel Watch"
            price={8247}
            rating={3}
            image="https://m.media-amazon.com/images/I/819gFO5HAKL._UL1500_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={7447}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={89900}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={46499}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
      
    </div>
    
  );
}

export default Home;