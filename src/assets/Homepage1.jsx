// import "./css/Homepage1"
import "./css/Homepage1.css";

import {Link} from "react-router-dom"




function Homepage1() {
    return (
      <div className="homepage">
        <h1>Homepage</h1>
        
        <p>Input field</p>
        <input type="text" id="input"/>

        
        <button className="btn">Search</button>

        <div className="coinshow">
        {/* <Link to="/coinsallshow">Show all</Link> */}
        {/* <CoinsShowAll name="Bullion coinsy"/>
        <CoinsShowAll name="Exclusive coins"/>
        <CoinsShowAll name="Commemorative coins"/> */}
        </div>

      </div>
    );
  }
  
  export default Homepage1;