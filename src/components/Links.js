import React from "react";
import "./Links.css";

const Links = () => {
  return (
    <div className="links-containers" style={{justifyContent: 'center'}}>
      <ul className="links">
        <li className={"cryptocurrency bitcoin"}>
          <h1>
            <a href="https://technomin.com/bitcoin-nedir/">
              Bitcoin Nedir?
            </a>
          </h1>
        </li>
        <li className={"cryptocurrency nasil"}>
          <h1>
            <a href="https://technomin.com/kategori/kriptopara/">
              Bitcoin Nasıl Alınır?
            </a>
          </h1>
        </li>
        <li className={"cryptocurrency etherium"}>
          <h1>
            <a href="https://technomin.com/kategori/kriptopara/">
              Etherium Nedir?
            </a>
          </h1>
        </li>
        <li className={"cryptocurrency haber"}>
          <h1>
            <a href="https://technomin.com/kategori/kriptopara/">
                Kripto Para Haberleri
            </a>
          </h1>
        </li>
      </ul>
    </div>
  );
};

export default Links;
