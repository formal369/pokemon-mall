import React from 'react';

const ProductCard = ({item}) => {
    return (
        <div>
            <img src={item?.img} style={{width: "260px"}} />
            <div>{item?.recommend == true ? "추천상품" : ""}</div>
            <div>{item?.title}</div>
            <div>{item?.price}</div>
            <div>{item?.new == true ? "신제품" : ""}</div>
        </div>
    );
};

export default ProductCard;