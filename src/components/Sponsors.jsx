import {useState, useEffect} from 'react'
import axios from 'axios'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL;

const Sponsors = () => {
  const [sponsorPosts, setSponsorPosts] = useState('')
  const [loading, setLoading] = useState(true)

  const endpoint = `${baseUrl}/sponsors?_embed`
  
  useEffect(() => {
    axios
      .get(endpoint)
      .then((response) => {
        setSponsorPosts(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }, [])

  const SponsorPosts = ({sponsorPosts}) => {
    const mappedSponsors = sponsorPosts.map((sponsor, index) => {
      // Featured image check
      function getFeaturedImage(sponsor) {
        if (
          sponsor &&
          sponsor._embedded &&
          sponsor._embedded["wp:featuredmedia"] &&
          sponsor._embedded["wp:featuredmedia"][0].source_url
        ) {
          return sponsor._embedded["wp:featuredmedia"][0].source_url;
        } else {
          return "https://via.placeholder.com/250";
        }
      }

      return (
        <img key={sponsor.slug + '-' + index} src={getFeaturedImage(sponsor)} alt={sponsor.title.rendered}  className="sponsor-item"></img>
      )
    }) // end of map

    return (
      <>
        {/* all of our articles*/}
        {mappedSponsors}
      </>
    )
  }

  return (
    <>
     {loading ? <p className='white-text'>Loading...</p> : <SponsorPosts sponsorPosts={sponsorPosts} />}
    </>
  )
}

export default Sponsors
