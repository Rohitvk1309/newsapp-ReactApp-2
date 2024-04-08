import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
export class NavBar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">NewsMonkey</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default NavBar






// import React from "react";
// import {Link} from "react-router-dom";

// const NavBar =()=> {
  
//     return (
//       <div>
//         <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
//           <div className="container-fluid">
//             <Link className="navbar-brand" to="/">
//               NewsMonkey
//             </Link>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 {/* <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li> */}
                
//                 <li className="nav-item"><Link className="nav-link" to="/business"> Business</Link></li>
//                 <li className="nav-item"><Link className="nav-link" to="/entertainment"> Entertainment</Link></li>
//                 <li className="nav-item"><Link className="nav-link" to="/health"> Health</Link></li>
//                 <li className="nav-item"><Link className="nav-link" to="/science"> Science</Link></li>
//                 <li className="nav-item"><Link className="nav-link" to="/sports"> Sports</Link></li>
//                 <li className="nav-item"><Link className="nav-link" to="/technology"> Technology </Link></li>
                
                
//               </ul>
              
//             </div>
//           </div>
//         </nav>
//       </div>
//     );
  
// }

// export default NavBar
