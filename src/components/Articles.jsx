import {useState, useEffect} from 'react'
import { formatDistanceToNow } from 'date-fns'
import axios from 'axios'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL;

const Articles = () => {
  const [articlePosts, setArticlePosts] = useState(null)
  const [loading, setLoading] = useState(true)

  const endpoint = `${baseUrl}/articles?_embed`;

  useEffect(() => {
    axios
      .get(endpoint)
      .then((response) => {
        setArticlePosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  const ArticlePosts = ({articlePosts}) => {
    const truncateText = (html, maxLength) => {
      const text = html.replace(/<[^>]+>/g, ''); // Remove HTML tags
      return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
    }

    const mappedArticles = articlePosts.map((article, index) => {
      // Featured image check
      function getFeaturedImage(article) {
        if (
          article &&
          article._embedded &&
          article._embedded["wp:featuredmedia"] &&
          article._embedded["wp:featuredmedia"][0].source_url
        ) {
          return article._embedded["wp:featuredmedia"][0].source_url;
        } else {
          return "https://via.placeholder.com/250";
        }
      }

      return (
        <div key={article.slug + '-' + index} className='article full-corners'>
          <img src={getFeaturedImage(article)} alt={article.title.rendered} className='article-img full-corners'/>

          <div className="article-text">
            <h4 className='blue-text'>{article.title.rendered}</h4>
            <p className='brown-text'>
              {truncateText(article.content.rendered, 67)} {/* adjust maxLength as needed */}
            </p>

            <div className="article-btn-box">
              <a href={`#/article/${article.id}`} className='article-read-more'>
                <h5>Read More</h5>
              </a>
            </div>

            <div className="article-tags-box">
              <h6 className='bold-text blue-text'>{formatDistanceToNow(new Date(article.date), {addSuffix: true})}</h6>
              <h6 className='bold-text blue-text'>{article.acf.article_type}</h6>
            </div>
          </div>
          
        </div>
      );
    }); // end of map

    return (
      <>
        {/* all of our articles*/}
        {mappedArticles}
      </>
    )
  }

  return (
    <>
      <div className="articles-posts-grid">
        {loading ? <p className='white-text'>Loading...</p> : <ArticlePosts articlePosts={articlePosts} />}
      </div>
    </>
  )
}

export default Articles