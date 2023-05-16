import { HeaderCss } from "./HeaderStyle"

import House from "../../assets/Header/House.png";

export function Header(){
    return(
        <HeaderCss>
            <div className="header-top">
                <div className="header-top-content">
                    <div className="header-top-left">
                        <i className="fa-solid fa-location-dot"></i>
                        <span>Rezilla, 18 Grattan St, Brooklyn</span>
                    </div>
                    <div className="header-top-right">
                        <div>
                            <i className="fa-solid fa-phone"></i>
                            <span>+1 206-214-2298</span>
                        </div>
                
                        <div>
                            <i className="fa-regular fa-envelope"></i>
                            <span>support@rezilla.com</span>
                        </div>
                    </div>
                </div>
            </div>


            <header>
                <div className="header-menu">
                    <nav>
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Listings</a>
                        <a href="">Services</a>
                        <a href="">Blogs</a>
                    </nav>
                </div>
                
                <div className="header-logo">
                    <div>
                        <img src={House} alt="" />
                    </div>
                    <span>Rezilla</span>                        
                </div>

                <div className="header-login">
                    <div className="header-login">
                        <a href="">
                            <i className="fa-regular fa-circle-user"></i>
                            Login/Register
                        </a>
                    </div>
                  
                  <div className="header-listing">
                        <a href="">
                            <img src={House} alt="" />
                            Add Listing
                        </a>    
                  </div>
                </div>
            </header>
        </HeaderCss>
    )
}