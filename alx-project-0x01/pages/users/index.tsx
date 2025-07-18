// pages/users/index.tsx
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[]; // The prop name is 'users'
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  // console.log(users); // Uncomment for debugging if needed
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">User Directory</h1>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out">
              Add User
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* CORRECT: Mapping over 'users' */}
            {users?.map((user: UserProps) => (
              <UserCard
                key={user.id}
                id={user.id}
                name={user.name}
                username={user.username}
                email={user.email}
                address={user.address}
                phone={user.phone}
                website={user.website}
                company={user.company}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const users: UserProps[] = await response.json();

    return {
      props: {
        users, // The data passed as a prop is named 'users'
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return {
      props: {
        users: [],
      },
      revalidate: 10,
    };
  }
}

export default Users;