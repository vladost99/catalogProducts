import React from 'react'
import './Preload.css';

function Preloader({form}) {
    return (
        <div className={form ? "container form" : "container"}>
        <div className="bubbles">
            <div className="bubble">
            <div className="circle"></div>
            </div>
            <div className="bubble">
            <div className="circle"></div>
            </div>
            <div className="bubble">
            <div className="circle"></div>
            </div>
        </div>
</div>
  
    )
}

export default Preloader
