import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__conatiner">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg"
        />
        <div className="home__row">
          <Product
            id="4903850"
            title="The Lean Startup"
            price={99.5}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
          />
          <Product
            id="23445930"
            title="The Rock that fell from the Sky - A Bedtime Story Picture Book for Kids Ages 3-5 years and above: A read aloud tale for children with good moral lessons Lean Startup"
            price={89.5}
            rating={4}
            image="https://m.media-amazon.com/images/I/51THjU7Z1+L.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="3254354345"
            title="The Lean A Lord's Bet of Desire: A Historical Regency Romance Book"
            price={99.5}
            rating={5}
            image="https://m.media-amazon.com/images/I/51KDf8QXV8L.jpg"
          />
          <Product
            id="20829332"
            title="Ikigai: The Japanese secret to a long and happy life"
            price={99.5}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51T8OXMiB5L._SX356_BO1,204,203,200_.jpg"
          />
          <Product
            id="20869332"
            title="The Lean Great Stories for Children"
            price={99.5}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51H2M2jWmvL._SX311_BO1,204,203,200_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="It Doesn't Hurt To Be Nice: Rediscover Life with a Pinch of Salt and Humour"
            price={99.5}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41RxnnLdCGL._SX322_BO1,204,203,200_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
