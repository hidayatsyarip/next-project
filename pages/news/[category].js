function AllArticlesByCategory({ articles, category }) {
  return (
    <>
      <div>
        <h1>Showing news for category {category}</h1>
        {articles.map((article) => {
          return (
            <div key={article.id}>
              <h2>
                {article.title} {article.id} {article.category}
              </h2>
              <p>{article.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AllArticlesByCategory;

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  const { category } = params;
  console.log(query);
  res.setHeader("Set-Cookie", ["name=Syarip"]);
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
}
