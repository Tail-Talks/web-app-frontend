import React from "react";
import "../Footer/Footer.less";

export default function Footer() {
  return (
    <>
      <div className="footerBox">
        <div className="footerList">
          <ul className="footerListLi">
            <li>
              <a href="/about">О проекте Tail Tailks</a>
            </li>
            <li>
              <a href="/nft">О проекте NFT Tail Tailks</a>
            </li>
            <li>
              <a href="/community">Сообщество</a>
            </li>
            <li>
              <a href="/security">Безопасность данных</a>
            </li>
            <li>
              <a href="/charity">Благотворительность</a>
            </li>
            <li>
              <a href="/help">Помощь</a>
            </li>
            <li>
              <a href="/privacy-policy">Политика конфиденциальности</a>
            </li>
          </ul>
        </div>
        <div className="footerInfo">
          <p className="footerInfoText">
            © 2024 Tail Talks. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}
