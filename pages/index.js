import Link from "next/link";
import { useRouter } from "next/router";
function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your oder.");
    router.push("/product");
  };
  return (
    <div>
      <h1>Home</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/product">Product</Link>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}

export default Home;
