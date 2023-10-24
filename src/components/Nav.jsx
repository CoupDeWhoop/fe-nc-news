import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getTopics } from '../../utils/api';

const Nav = () => {
  const  [topics, setTopics] = useState([])
  
  useEffect(() => {
    getTopics()
    .then((data) => {
      setTopics(data)
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
          console.log(slug)
          return(
            <li key={slug}>
             <p>{slug}</p>
            </li>
        )
          }
        )}
      </ul>
    </nav>
  )
}

export default Nav;