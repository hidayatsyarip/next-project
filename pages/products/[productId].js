import { useRouter } from "next/router";

function ProductDetail({ product }) {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h2>
        {product.id} {product.title} {product.price}
      </h2>
      <p>{product.body}</p>
    </>
  );
}
export default ProductDetail;

export async function getStaticPaths() {
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await response.json();

  // const paths = data.map((post) => ({
  //   params: { postId: `${post.id}` },
  // }));

  return {
    paths: [
      {
        params: { productId: "1" },
      },
      {
        params: { productId: "2" },
      },
      {
        params: { productId: "3" },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  console.log(`Regenerating product ${params.productId}`);
  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );

  const data = await response.json();

  return {
    props: {
      product: data,
    },

    revalidate: 10,
  };
}
