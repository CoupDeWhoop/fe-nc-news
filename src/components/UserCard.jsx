import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export default function UserCard () {
  const { user } = useContext(UserContext);
  return (
    <div className="user-card">
      <div className="avatar">
        <img src={user.avatar_url} alt={user.username} />
      </div>
      <div className="name">
        <p>{user.username}</p>
      </div>
    </div>
  );
};