import React from 'react';
import styled from 'styled-components';
import faker from 'faker';

import HeroHeader from '../components/HeroHeader.js'
import Product from '../components/Product.js';

const ProductsContainer = styled.div`
    width: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 760px) {
        justify-content: space-evenly;
    }
`;

export default function Home() {
    const createData = (n) => {
        const data = [];
        for (let i = 0; i < n; i += 1) {
            data.push({
                id: i,
                name: faker.commerce.productName(),
                description: faker.lorem.sentence(),
                price: faker.commerce.price(),
                image: `https://picsum.photos/${Math.round(2+Math.random()*3)}00/300?random=${i}`,
            });
        }
        return data;
    }
    
    const products = createData(50);

    return (
        <div>
            <HeroHeader />
            <ProductsContainer className="container">
                {products.map(product => <Product key={product.id} product= {product} />)}
            </ProductsContainer>
        </div>
        
    )
}