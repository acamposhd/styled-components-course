import React from "react";
import Title from "./ComplexTitle";
import Product from "./Product";

const products = [
    { id: 1, name: "chair", price: 30 },
    { id: 2, name: "bed", price: 150 },
    { id: 3, name: "couch", price: 550 },
];

const Products = () => {
    return (
        <section>
            <Title title="All Products" />
            {products.map((product) => (
                <Product {...product} key={product.id} />
            ))}
        </section>
    );
};

export default Products;
