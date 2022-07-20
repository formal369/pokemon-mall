import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/product/${item.id}`)
    }

    return (
        <div className="card-container" onClick={showDetail}>
            <img src={item?.img} style={{width: "250px"}} />
            <div>{item?.recommend == true ? "추천상품" : ""}</div>
            <div>{item?.title}</div>
            <div>{item?.price}</div>
            <div>{item?.new == true ? "신제품" : ""}</div>
        </div>
    );
};

export default ProductCard;