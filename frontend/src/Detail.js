import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.js';
import './Detail.scss';

// styled-component: css가 미리 입혀진 components를 만드는 것
let Box = styled.div`
    padding: 20px;
`;
let Title = styled.h4`
    font-size: 25px;
    border: 3px solid black;
    border-radius: 10px;
    color: ${(props) => props.color};
`;

function Detail(props) {
    let { id } = useParams();
    let history = useHistory();
    let findProduct = props.shoes.find((product) => {
        return product.id == id;
    });

    return (
        <div className="container">
            <Box>
                <Title color="pink">Detail one</Title>
            </Box>

            <div className="my-alert2">
                <p>재고가 얼마 남지 않습니다.</p>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <img
                        src={
                            'https://codingapple1.github.io/shop/shoes' +
                            id +
                            '.jpg'
                        }
                        width="100%"
                    />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{findProduct.title}</h4>
                    <p>{findProduct.content}</p>
                    <p>{findProduct.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            // history.goBack();
                            history.push('/');
                        }}
                    >
                        뒤로가기
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Detail;
