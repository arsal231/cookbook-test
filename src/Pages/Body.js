import React,{useState} from "react";
import Detail from "./Detail";

import banner from "../img/pizza.jpg";
const Body = (props) => {
  const [menudetail,setMenudetail] = useState({data:''});
  return (
    <div className="about" id="menu">
      <div className="container">
        <div className="row">

        <div className="col-4 p-25">
        <div className="food_menu col-12 ">
            <h4>Food Menu</h4>
            <div>
               <ul>
                 {props.list.map((item,index) => (
                  <li><a href="javascript:void(0);" onClick={()=>setMenudetail({data:item})} key={index} >{item.name}</a></li>
                 ))}
               </ul>
            </div>
            </div>
          </div>

          <div className="col-6 p-25">
            <Detail  data={menudetail}/>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Body;
