import { User } from './User';

export function Users({ users }) {
  return (
    <ul>
      {users.map(user => (
        <User
          key={user.id}
          name={user.name}
          email={user.email}
          phone={user.phone}
        />
      ))}
    </ul>
  );
}
