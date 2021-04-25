const BlogList = ({ articles, title }) => (
  <div className="blog-list">
    <h2>{title}</h2>
    {articles.map(article => (
      <div className="blog-preview" key={article.id}>
        <h2>{article.title}</h2>
        <p>écrit par {article.author}</p>
      </div>
    ))}
  </div>
)
export default BlogList
