import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
// Import components
import PageHeader from './PageHeader'
import { Helmet } from 'react-helmet'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL;

const SingleArticle = () => {
  const { id } = useParams();

  // States
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [heading, setHeading] = useState('')
  const [paragraph, setParagraph] = useState('')
  const [seoData, setSeoData] = useState(null)

  // Single post endpoint
  const endpoint = `${baseUrl}/articles/${id}?_embed`;

  useEffect(() => {
    axios
      .get(endpoint)
      .then((response) => {
        const data = response.data;
        setArticle(data)

        // parse the content to extract <h4> and <p>
        const parser = new DOMParser()
        const doc = parser.parseFromString(data.content.rendered, 'text/html')
        const h4 = doc.querySelector('h4')
        const p = doc.querySelector('p')

        // set the heading and paragraph states
        setHeading(h4 ? h4.innerHTML : '')
        setParagraph(p ? p.innerHTML : '')

        // set seo data
        setSeoData(data.yoast_head_json)

        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, [id]);

  // featured image check
  function getFeaturedImage(article) {
    if (
      article &&
      article._embedded &&
      article._embedded['wp:featuredmedia'] &&
      article._embedded['wp:featuredmedia'][0].source_url
    ) {
      return article._embedded['wp:featuredmedia'][0].source_url
    } else {
      return 'https://via.placeholder.com/150'
    }
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
     <Helmet>
        {/* seo */}
        <title>{seoData?.title || article.title.rendered}</title>
        {seoData?.description && <meta name="description" content={seoData.description} />}

        {/* open graph / fb*/}
        {seoData?.og_title && <meta property="og:title" content={seoData.og_title} />}
        {seoData?.og_description && <meta property="og:description" content={seoData.og_description} />}
        {seoData?.og_type && <meta property="og:type" content={seoData.og_type} />}
        {seoData?.og_url && <meta property="og:url" content={seoData.og_url} />}
        <meta property="og:image" content={seoData?.og_image?.[0]?.url || getFeaturedImage()} />

        {/* twitter */}
        {seoData?.twitter_card && <meta name="twitter:card" content={seoData.twitter_card} />}
        {seoData?.twitter_title && <meta name="twitter:title" content={seoData.twitter_title} />}
        {seoData?.twitter_description && <meta name="twitter:description" content={seoData.twitter_description} />}
        <meta name="twitter:image" content={seoData?.twitter_image?.[0]?.url || getFeaturedImage()} />
      </Helmet>

      <div className='single-article-section top-section section'>
        <PageHeader
          title={article.title.rendered}
          image_url={getFeaturedImage(article)}
        />

        <div className="article-box">
          <div className="article-left top-left-corner bottom-left-corner">
              <div className='article-pattern pattern top-left-corner bottom-left-corner'></div>
              
              <div className="article-main-box">
                <img src={getFeaturedImage(article)} alt='placeholder' className='single-article-img' />
                <h2 className='article-heading'>{article.title.rendered}</h2>
                <h4 className='article-heading'>{heading}</h4>
                <h5 className='white-text'>{formatDistanceToNow(new Date(article.date), {addSuffix: true})}</h5>
              </div>
          </div>
          <div className="article-right top-right-corner bottom-right-corner">
              <div
                className='article-content brown-text'
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleArticle;
