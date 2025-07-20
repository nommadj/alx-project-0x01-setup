import { UserProps } from "@/interfaces";
import UserCard from "@/components/UserCard";
import Header from "@/components/Header";

interface UsersProps {
  users: UserProps[];
}

export default function Users({ users }: UsersProps) {
  return (
    <div>
      <Header />
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserProps[] = await res.json();

  return {
    props: {
      users,
    },
  };
}
