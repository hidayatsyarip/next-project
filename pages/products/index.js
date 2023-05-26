function ProductList({ products }) {
  return (
    <>
      <h1>Product List</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>
              {product.name} {product.title} {product.price}
            </h2>
          </div>
        );
      })}
    </>
  );
}

export default ProductList;

export async function getStaticProps() {
  console.log("Generating / Regerating static properties");
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();

  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
}
