import logo from "../img/logo.png";
import React,{useState} from 'react';
const Footer = ()=>
{
  return (
       
    <section id="footer_id">
       <div className="container">
        <div className="row">
          
              <div className="col-md-12 full">
             <img src={logo} alt="logo"  className="flogo"/>
            <p><strong>MAESTRO PIZINNI</strong> is provoding delcious food since 1980.
             well know for all age group. Come & enjoy the taste</p>
             </div>
         </div>

       </div>

    </section>
)
}

export default Footer;