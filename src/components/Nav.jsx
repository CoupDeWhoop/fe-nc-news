import { Link, useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getTopics } from '../../utils/api';

const Nav = () => {
  const  [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic");

  useEffect(() => {
    getTopics()
    .then((data) => {
      setTopics(data)
      setLoading(false)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])


  return (
    <nav className="Nav">
      <ul >
          <Link to="/"><p className="nav-link"><strong>home</strong></p></Link>
        {topics.map(({ slug }) => {
          if (loading) {
            return(
              <li key="load-nav">
                <p>Loading topic</p>
              </li>
            )
          } else {
          return(
            <Link key={slug} to={`/articles/?topic=${slug}`}>
              <p className={`nav-link ${topic === slug ? 'navbar-topic' : ""}`}><strong>{slug}</strong></p>
            </Link>
            )
          }
        }
      )}
      </ul>
    </nav>
  )
}

export default Nav;