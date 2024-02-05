export default function ArticleCard({article}){
    return (
    <li className="article-card">
        <img className="article-card-img" src={article.article_img_url} alt={`article image for ${article.title}`}/>
        <h2 className="article-card-title">{article.title}</h2>
        <br></br>
        <p className="article-card-author">{article.author}</p>
    </li>
        )
}