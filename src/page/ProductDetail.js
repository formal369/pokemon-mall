import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, DropdownButton, Dropdown, Button } from 'react-bootstrap';


const ProductDetail = () => {
    let { id } = useParams();
    const [product, setProduct] = useState(null);

    const getProductDetail = async() => {
        let url = `http://my-json-server.typicode.com/formal369/pokemon-mall/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data);
    }
    useEffect(() => {
        getProductDetail();
    },[]);
    return (
        <Container>
            <Row>
                <Col className="product-img">
                    <img src={product?.img} style={{width: "450px"}} />
                </Col>
                <Col>
                    <div>{product?.title}</div>
                    <div>{product?.price}</div>
                    <div>{product && product.recommend ? "추천상품" : ""}</div>
                    <div>{product && product.new ? "신상품" : ""}</div>
                    <div>
                        {product && product.size ? 
                            <DropdownButton id="dropdown-basic-button" variant="secondary" title="사이즈">
                                {(product.size).map((size) => 
                                    <Dropdown.Item>{size}</Dropdown.Item>
                                )}
                            </DropdownButton>
                            :
                            "단일사이즈입니다."
                        }
                    </div>
                    <div>
                    <Button variant="info" size="lg">추가</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;