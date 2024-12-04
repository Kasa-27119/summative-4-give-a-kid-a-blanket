import {useState, useEffect} from 'react'
import axios from 'axios'

const baseUrl = import.meta.env.VITE_WP_API_BASEURL;

const Members = () => {
  const [memberPosts, setMemberPosts] = useState('')
  const [loading, setLoading] = useState(true)

  const endpoint = `${baseUrl}/members?_embed`

  useEffect(() => {
    axios
      .get(endpoint)
      .then((response) => {
        setMemberPosts(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }, [])

  const MemberPosts = ({memberPosts}) => {
    const mappedMembers = memberPosts.map((member, index) => {
      
      // featured image
      const getFeaturedImage = (member) => {
        if (
          member &&
          member._embedded &&
          member._embedded["wp:featuredmedia"] &&
          member._embedded["wp:featuredmedia"][0].source_url
        ) {
          return member._embedded["wp:featuredmedia"][0].source_url;
        } else {
          return "https://via.placeholder.com/250";
        }
      }
      // member role taxonomies
      const roleTerms = member._embedded['wp:term']?.[0] || []
      const roleName = roleTerms.length > 0 ? roleTerms[0].name : ''


      return (
        <div key={member.slug + '-' + index} className="team-item full-corners">
          <img src={getFeaturedImage(member)} alt={member.title.rendered}  className="team-img full-corners"></img>

          <div className="team-text">
            <h4 className='blue-text'>{member.title.rendered}</h4>
            <div dangerouslySetInnerHTML={{__html: member.content.rendered}} className='brown-text'></div>
          </div>

          {/* acf role goes here */}
          <div className="team-role blue-text">
            <h6>{roleName}</h6>
          </div>
        </div>
      )
    }) // end of map

    return (
      <>
        {/* all of our articles*/}
        {mappedMembers}
      </>
    )
  }

  return (
    <>
      {loading ? <p className='white-text'>Loading...</p> : <MemberPosts memberPosts={memberPosts} />}
    </>
  )
}

export default Members
