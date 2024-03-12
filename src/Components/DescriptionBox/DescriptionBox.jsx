import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online that facilitate buying and selling
          of products or services over the intenet seves as a vertual
          marketplace where buisness and individuls showcase their products,
          interact with customers, and conduct transactions without the need for
          a physical presence. E-commerce website have gained immense popularity
          due to their conventions accessebility, and the global reached they
          offer.
        </p>
        <p>
          E-commerce website typically display products or services an details
          descriptions, images, prices, and any available varities (e.g., sizes,
          colors). Each product usually its own dedicated without relevent
          information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
