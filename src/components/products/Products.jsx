import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product/Product";

const products = [
    { id: 1, name: "Shoes", description: "Running shoes", price: "$5" },
    { id: 2, name: "Macbook", description: "Apple macbook", price: "$5" },
];

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};

export default Products;
