import { MainCss } from "./MainStyle"

import SwiperImg from "../../assets/Main/swiper.png"

export function Main(){
    return(
        <MainCss>
            <main>
                <div className="main-top">
                    <div className="main-top-left">

                        <h4>REAL ESTATE</h4>
                        <h1>Find a perfect home you love..!</h1>
                        <span>Etiam eget elementum elit. Aenean dignissim dapibus vestibulum. Integer a dolor eu sapien sodales vulputate ac in purus.</span>

                        <div className="main-swiper">
                            <div className="swiper-arrow-left">
                                <div>
                                    <i className="fa-solid fa-angle-left"></i>
                                </div>
                            </div>
                            <div className="swiper-img">
                                <img src={SwiperImg} alt="" />
                            </div>
                            <div className="swiper-arrow-right">
                                <div>
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-top-right">

                        <div className="main-form">

                            <div className="main-form-header">
                                <span>For Sale</span>
                                <span>For Rent</span>
                            </div>

                            <div className="main-body">

                                <input type="text" placeholder="New York, San Francisco, etc"/>
                                
                                <select name="" id="" required>
                                    <option value="" disabled selected>Select Property Type</option>
                                </select>

                                <select name="" id="" required>
                                    <option value="" disabled selected>Select Rooms</option>
                                </select>

                                <div className="main-search">
                                    <img src="" alt="" />
                                    <span>Advance Search</span>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                <div className="main-bottom">
                    <div className="main-botton-content">
                        <div className="main-bottom-item">
                            
                        </div>
                        <div className="main-bottom-item">

                        </div>
                    </div>
                </div>
            </main>
     
        </MainCss>
    )
}