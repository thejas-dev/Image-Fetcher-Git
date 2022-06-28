import React from "react";


const Imagelist = (props)=>{
    console.log(props.images.id)
    const images = props.images.map((images)=>{

        return (
        <div className="ui fluid image" >
            <a href={images.webformatURL}>
        <img key ={images.id} src={images.webformatURL} alt="images" /></a>
      <br></br>
       </div>
        )
    })


return(
    <div>{images}</div>
 )
}

export default Imagelist;