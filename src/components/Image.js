import React from "react";

function Image({imageUrl, imgAlt}) {
   return <img src={imageUrl} alt={imgAlt} />
}

export default Image