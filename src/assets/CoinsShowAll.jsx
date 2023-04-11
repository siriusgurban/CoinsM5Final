
import {Link} from "react-router-dom";
import coinsallshow from "./CoinsShowAll.jsx";

function CoinsShowAll(props) {

  const bullionCoins = {
    "coins":[
      {id: 1, name:"Canadian Beaver", desc: "Canadian beaver. Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II. In the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark. In the center of the coin reverse is a Canadian beaver on a rock sticking out of the water. At the top is a semicircle with the inscription 5 cents between two maple leaves. At the bottom in two lines is the inscription CANADA (CANADA) and the year of minting."},
  
      {id: 2, name:"Looney", desc: "Looney. Unique coin with the image of a goat. Canadian dollar symbol. The reverse of the coin depicts a black goat - a symbol of Canada and an inscription divided into the lower and upper semicircle Canadian dollar. The obverse depicts Queen Elizabeth II. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is the year of coinage."},
      
      {id: 3, name:"Jefferson", desc: "Unique coin featuring Thomas Jefferson, the 3rd American president. Face value - 5 cents. The obverse of the coin depicts a bust of the 3rd American president, Thomas Jefferson. The inscription on the right semicircle IN GOD WE TRUST. Below is the inscription “FREEDOM” and the year of minting. Under the image of Jefferson was a monogram of an engraver. The initials of the engraver FS first appeared on coins in 1966. The reverse side shows the Jefferson Monticello estate, as well as the inscription: on the top - the motto E PLURIBUS UNUM, on the bottom - the inscriptions MONTICELLO, FIVE CENTS and UNITED STATES OF AMERICA."}
    ]
  }

  return (
    <div className="coinsshowall">

      <p>{props.name}</p>
      <Link to="/coinsallshow">Show alle ewrerw</Link>
     <p>fdhgfh</p>
     
    </div>
  );
}

export default CoinsShowAll;