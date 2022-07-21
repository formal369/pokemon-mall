import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from './component/ProductCard';
import { useSearchParams } from "react-router-dom";


const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    const getProducts = async () => {
        let searchQuery = query.get('q') || '';
        console.log("searchQuery", searchQuery);
        let url = `http://my-json-server.typicode.com/formal369/pokemon-mall/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    }

    useEffect(() => {
        getProducts();
    }, [query]);  // 새로 검색할 때마다 렌더링한다.
    
    return (
        <div>
            <Container>
                <Row>
                    {productList.map((menu) => (
                        <Col lg={3}><ProductCard item={menu} /></Col>
                    ))}
                </Row>
            </Container>
                
        </div>
    );
};

export default ProductAll;