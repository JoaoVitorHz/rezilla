import styled from "styled-components";

export const HeaderCss = styled.div`
    width: 100vw;

    .header-top{
        width: 100%;
        height: 40px;
        background: #3A0CA3;

    }
    .header-top-content{
        width: 1240px;
        height: 100%;
        margin: auto;

        display: flex;
        justify-content: space-between;
    }

    .header-top-left{
        color: #FFF;
        display: flex;
        align-items: center;
        gap: 5px;
    }
    .header-top-right{
        display: flex;
        gap: 30px;
    }
    .header-top-right div{
        display: flex;
        align-items: center;
        gap: 5px;
        color: #FFF;
    }
    
    header {
        width: 1240px;
        height: 80px;
        margin: auto;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .header-menu nav{
        display: flex;
    }
    .header-menu nav a{
        font-weight: 500;
        font-size: 16px;
        color: #2B2B2B;
        text-decoration: none;
        padding: 13px 16px;
    }
    .header-menu nav a:hover{
        background-color:  rgba(67, 97, 238, 0.3);
        border-radius: 30px;
    }

    .header-logo{
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .header-logo div{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #3A0CA3;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .header-logo span{
        font-weight: 600;
        font-size: 20px;
        color: #1E1E1E;
    }

    .header-login{
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .header-login a{
        width: 169px;
        height: 50px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        text-decoration: none;

        font-weight: 500;
        font-size: 16px;
        color: #2B2B2B;
    }

    .header-listing a{
        width: 169px;
        height: 50px;
        background: #3A0CA3;
        border-radius: 50px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        color: #FFF;
        text-decoration: none;
    }

`;