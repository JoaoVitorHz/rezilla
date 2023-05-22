import styled from "styled-components";

import bg from "../../assets/Main/background.png"

export const MainCss = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;

    main{
        width: 1440px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url(${bg});
    }

    .main-top{
        width: 1240px;
        height: 90%;
        display: flex;
        margin-top: 90px;
    }
    .main-top-left{
        width: 50%;
        height: 100%;
    }
    .main-top-left h4{
        font-weight: 500;
        font-size: 19.4px;
        color: #4361EE;
        margin-bottom: 30px;
    }
    .main-top-left h1{
        width: 580px;
        font-weight: 600;
        font-size: 57.3px;
        color: #0B090A;
        margin-bottom: 40px;
        line-height: 65px;
    }
    .main-top-left span{
        width: 580px;
        height: 37px;
        font-weight: 400;
        font-size: 16px;
        color: #808080;
        margin-bottom: 40px;
    }

    .main-swiper{
        width: 580px;
        height: 351px;
        display: flex;
    }
    .swiper-arrow-left,
    .swiper-arrow-right{
        display: flex;
        align-items: center;
        background-color: red;
    }
    .swiper-arrow-right div{
        margin-left: -60px;
    }
    .swiper-arrow-left div{
        margin-right: -60px;
    z-index: 10;
    }
    .swiper-arrow-left div,
    .swiper-arrow-right div{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FFF;
        box-shadow: 4px 10px 30px rgba(0, 0, 0, 0.1);

        font-size: 18px;
        color: #AAA;
    }

    .swiper-img img{
        width: 540px;
        height: 340px;
    }


    .main-top-right{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .main-form{
        width: 420px;
        height: 582px;
        background-color: #FFF;
        border-radius: 10px;
       box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .main-form-header{
        width: 100%;
        height: 80px;
        border-bottom: 1px solid #AAA;

        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .main-form-header span{
        padding: 25px 20px;
        border-bottom: 4px solid transparent;
        cursor: pointer;
        font-weight: 500;
        font-size: 16px;
    }
    .main-form-header span:hover{
        color: #3A0CA3;
        border-bottom: 4px solid #3A0CA3;
    }

    .main-body{
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }


    .main-body input, 
    .main-body select{
        width: 340px;
        border-radius: 20px;
        background: rgba(212, 212, 212, 0.2);   
        padding: 24px 20px;
    }
    .main-body input::placeholder,
    select:required:invalid{
        color: #AAA;
    }

    .main-bottom{
        width: 1240px;
        height: 10%;
        background-color: yellow;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .main-botton-content{
        width: 710px;
        height: 100%;
        background-color: red;
        display: flex;
        justify-content: space-between;
        gap: 30px;
    }
    .main-bottom-item{
        width: 360px;
        height: 100%;
        background-color: #FFF;
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
    }
`;