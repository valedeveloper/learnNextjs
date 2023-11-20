import React from 'react'
// import style from './spinner.module.css';
function Spinner() {
  return (
    <div className={`container`}>
      <div className={`ldsGrid`} ><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      <style jsx>
        {
          `.container{
        display: flex;
        background:black
        align-items: center;
        justify-content: center;
        width: 100%;
        height:100vh;
      }
      .ldsGrid {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
      }
      .ldsGrid div {
        position: absolute;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: rgb(0, 143, 29);
        animation: ldsGrid 1.2s linear infinite;
      }
      .ldsGrid div:nth-child(1) {
        top: 8px;
        left: 8px;
        animation-delay: 0s;
      }
      .ldsGrid div:nth-child(2) {
        top: 8px;
        left: 32px;
        animation-delay: -0.4s;
      }
      .ldsGrid div:nth-child(3) {
        top: 8px;
        left: 56px;
        animation-delay: -0.8s;
      }
      .ldsGrid div:nth-child(4) {
        top: 32px;
        left: 8px;
        animation-delay: -0.4s;
      }
      .ldsGrid div:nth-child(5) {
        top: 32px;
        left: 32px;
        animation-delay: -0.8s;
      }
      .ldsGrid div:nth-child(6) {
        top: 32px;
        left: 56px;
        animation-delay: -1.2s;
      }
      .ldsGrid div:nth-child(7) {
        top: 56px;
        left: 8px;
        animation-delay: -0.8s;
      }
      .ldsGrid div:nth-child(8) {
        top: 56px;
        left: 32px;
        animation-delay: -1.2s;
      }
      .ldsGrid div:nth-child(9) {
        top: 56px;
        left: 56px;
        animation-delay: -1.6s;
      }
      @keyframes ldsGrid {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
      }
      
    
      ` }


      </style>
    </div>
  )
}

export default Spinner