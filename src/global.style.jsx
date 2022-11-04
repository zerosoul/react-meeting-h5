import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
 
  *{
    box-sizing:border-box;
    outline:none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  html{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 18px;
    font-weight:400;
    color:#fff;
    font-family:"Fangzheng ZY", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
    &.andorid {
      transition:all .3s;
      .submitSlide{
        /* transition:all 1s; */
        padding-bottom:0;
        padding-top:1rem;
        .input.cost,.submitBtn{
          /* transition:all 1s; */
          display:none;
        }
      }
      .btmBg{
       display:none;
      }
    }
  }
  body{
    max-width:720px;
    margin:0 auto;
  }
  #root{
    position:relative;
  }
  .swiper-container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    .swiper-pagination-progressbar-fill{
      background:#fd762f !important;  
      opacity: 0.6;
    }
}

  @media screen and (min-width: 320px){
      html {
          font-size: 15px;   
      }
  }
  @media screen and (min-width: 375px){
      html {
          font-size: 18px;   
      }
  }
  @media screen and (min-width: 480px){
      html {
          font-size: 20px;
      }
  }
  @media screen and (min-width: 768px){
      html {
          font-size: 22px;
      }
  }
`;

export default GlobalStyle;
