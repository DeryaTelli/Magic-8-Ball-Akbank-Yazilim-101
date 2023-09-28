import { useState } from "react";
import "./styles.css";

export default function App() {
  const [answer, setanswer] = useState(null);
  const texts = [
    "Kesinlikle",
    " Kesinlikle öyle",
    "Kuşkusuz",
    " Evet - elbette",
    "Bana güvenebilirsin",
    " Gördüğüm kadarıyla, evet",
    "Çoğunlukla",
    "Dışarıdan iyi görünüyor",
    " Evet",
    "Belirtiler olduğu yönünde",
    " Biraz belirsiz, tekrar dene",
    " Sonra tekrar dene",
    " Şimdi söylemesem daha iyi",
    "  Şimdi kehanette bulunamam",
    " Konsantre ol ve tekrar sor",
    "Bana öyle bakma",
    " Yanıtım hayır",
    " Kaynaklarım hayır diyor",
    " Pek iyi görünmüyor",
    "Çok şüpheli"
  ];
  function answergive() {
    const number = Math.floor(Math.random() * 20);
    setanswer(texts[number]);
  }
  return (
    <div className="App">
      <h1>What do you think? Can I learn Software?</h1>
      <div class="big-top center" onClick={answergive}>
        <div class="small-top center">
          {answer ? <div>{answer}</div> : <div class="eight">8</div>}
        </div>
      </div>
    </div>
  );
}
