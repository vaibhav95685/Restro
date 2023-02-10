import React from 'react'
import './Mainpage.css';
import food1 from '..//..//images/food1.png'


export default function Manpage() {
  return (
    <div>
<div className="container">
  

  
  <div className="row">
    <div className="col-md-6">
    <div className="row align-items-center h-100">
        <div className="col">
          <h1 className="display-3">We Serve The Test For You</h1>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae lacus turpis. Fusce tincidunt id tortor vitae luctus. Nullam at viverra felis, sed tincidunt arcu. Aliquam in lacus semper, vulputate nisl at, accumsan mi. Pellentesque metus elit, congue sit amet efficitur a, feugiat vel felis. Cras maximus facilisis sapien, ac maximus tellus eleifend sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            <br /><br />
            <button class="custom-btn btn-3"><span>Explore Food</span></button>
          </p>

        </div>
      </div>
      
    </div>
    
    <div className="col-md-6">
    <img src={food1} alt="" className="w-100" />
      

    </div>
  </div>
</div>





    </div>
  )
}
