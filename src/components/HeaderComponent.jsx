import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const HeaderComponent = () => {
  const context = useContext(AuthContext);
  return (
    context?.isUserLoggedIn && (
      /*<div style={{ margin: "100px auto auto auto", width: "40vw" }}>*/
      
<div>



       <nav className="navbar" style={{backgroundColor: "#e3f2fd",height: "100%"}}> 
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
            <h3>Tutorial</h3> 
            </Link>
          
             <button 
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
    </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    HomePage
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add">
                    Add Course
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/edit/:id">
                    Edit Course
                  </Link>
                </li>

               

                
              </ul>
              
                <button
                  type="button"
                  style={{
                    backgroundColor: "blue",
                    outline: "none",
                    padding: "5px",
                    color: "white",
                    border: "1px solid blue",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => context?.handleLogout()}
                >
                  Logout
                </button>
              
            </div>
          </div>
        </nav>

                
  </div>
      /* </div>*/
        
    )
        
  );
};

export default HeaderComponent;
