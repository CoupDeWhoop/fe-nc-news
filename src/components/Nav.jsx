import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getTopics } from '../../utils/api';

const Nav = () => {
  const  [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

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
        <li>
          <Link to="/">Home</Link>
        </li>
        {topics.map(({ slug }) => {
          if (loading) {
            return(
              <li key="load-nav">
                <p>Loading topic</p>
              </li>
            )
          } else {
          return(
            <li key={slug}>
              <p><strong>{slug}</strong></p>
            </li>
            )
          }
        }
      )}
      </ul>
    </nav>
  )
}

export default Nav;