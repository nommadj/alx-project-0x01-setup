import { GetStaticProps } from "next";
import UserCard from "@/components/UserCard";
import Header from "@/components/Header";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

export default function Users({ users }: UsersPageProps) {
  return (
    <>
      <Header />
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: UserProps[] = await res.json();
  return {
    props: {
      users,
    },
  };
};
