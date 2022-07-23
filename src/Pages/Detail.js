import React from "react";
const Detail =(props)=>{

   let obj  = props.data.data;
   let  name = obj.name;
   let  author = obj.author;
   let  image = obj.image;
   let  ingredient = obj.ingredient;
   let  description = obj.description;
   //console.log(obj);

    return (
      <div>
         {(obj) ? 
         (<div>
          <img src={image} alt="Pizza"  width="250" height="250" className="fl"/>
              
              <h2>{name}</h2>
              <h4>author:<i><u>{author}</u></i></h4>
              <p>{description} </p>
              
              <div className="about__btn">
              <a href="" className="btn btn-smart">
                  {ingredient}
              </a>
            </div>

            </div>) : (<p>Click left menu to see the recipe detail </p>)}
         
          
       </div> 

    )


}
export default  Detail;