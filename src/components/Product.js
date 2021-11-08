import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    white-space: initial;
    margin: 5px;
    border-radius: 0.3rem;
    padding: 10px;

    .product__info {
        width: 190px;
        @media (max-width: 700px) {
            width: 125px;
        }

        .product-name {
            color: #6ba4ff;
            text-decoration: none;
        }
        .product-name:hover {
            text-decoration: underline;
            cursor: pointer;
        }
        .product-price-box {
            display: flex;
            justify-content: end;
            span {
                color: #888;
                padding: 1px 5px;
                border-radius: 0.3rem;
                font-size: 0.9rem;
                :hover {
                    animation: 0.5s ease-in-out forwards zoomIn;
                    cursor: default;
                }

                @keyframes zoomIn {
                    0% {
                        
                    }
                    100% {
                        transform: rotateY(30deg);
                        transform: rotateX(30deg);
                    }
                }
            }
        }
    }
`;

const ProductImage = styled.img`
    height: 180px;
    margin-bottom: 5px;
    border-radius: 0.2rem;

    //breakpoints
    @media (max-width: 700px) {
        height: 125px;
    }

    :hover {
        cursor: pointer;
    }
`;

export default function Product(props) {
  const { product } = props;

  let locale = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <ProductStyle className="product">
      <div className="product__image">
        <ProductImage src={product.image} alt={product.name} />
      </div>
      <div className="product__info">
        <p className="product-name">{product.name}</p>
        <p>
          <small>{product.description}</small>
        </p>
        <div className="product-price-box">
          <span>{locale.format(parseFloat(product.price))}</span>
        </div>
      </div>
    </ProductStyle>
  );
}