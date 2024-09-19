import React, { useEffect, useState } from "react";
import "./Gallery.css";

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fecthImages = () => {
      const data = [
        {
          id: 1,
          url: "https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg",
          title: "Rose",
        },
        {
          id: 2,
          url: "https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg",
          title: "Sunflower",
        },
        {
          id: 3,
          url: "https://m.media-amazon.com/images/I/61P8RuNIRPL.jpg",
          title: "Lotus",
        },
        {
          id: 4,
          url: "https://5.imimg.com/data5/SELLER/Default/2024/6/426465426/DA/SK/HI/46470149/tulip-flower-plants.jpg",
          title: "Tulip",
        },
        {
          id: 5,
          url: "https://5.imimg.com/data5/SELLER/Default/2023/10/355029760/TA/MG/YE/198365351/dahlia-flower-plants.jpeg",
          title: "Daliya",
        },
      ];
      setImages(data);
    };
    fecthImages();
  }, []);
 const handleDeleteImage=(id)=>{
 setImages(images.filter((image)=>image.id !==id))
 }
  return (
    <div>
      <h1 className="title">Image Gallery App</h1>
      {
        images.length>0?(
          <div className="image-grid">
        
        {images.map((image) => (
          <div className="image-card" key ={image.id}>
            <img src={image.url} alt="pic"/>
            <div className="image-detail">
              <h3>{image.title}</h3>
              <button onClick={()=>handleDeleteImage(image.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
        ):
        <p className="no-images">No Images Found</p>
      }
      
    </div>
  );
}

export default Gallery;
