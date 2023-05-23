import Link from "next/link";

function Product({ productId = 100 }) {
  return (
    <>
      <Link href="/">Home</Link>
      <h2>
        <Link href="/product/1">Product 1</Link>
      </h2>

      <h2>
        <Link href="/product/2" replace>
          Product 2
        </Link>
      </h2>

      <h2>
        <Link href={`/product/${productId}`}>Product {productId}</Link>
      </h2>
    </>
  );
}

export default Product;
