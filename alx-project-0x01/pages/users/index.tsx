// pages/users/index.tsx
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard"; // Import the new UserCard component
import { UserProps } from "@/interfaces"; // Import the UserProps interface

interface UsersPageProps {
  users: UserProps[]; // Change 'posts' to 'users' to match the data being fetched
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  console.log(users); // For debugging: check fetched users in console
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
            {users?.map((user: UserProps) => (
              <UserCard
                key={user.id} // Use user.id as the key
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

// getStaticProps is used for pre-rendering data at build time
export async function getStaticProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const users: UserProps[] = await response.json(); // Change 'posts' to 'users'

    return {
      props: {
        users, // Pass 'users' as props
      },
      revalidate: 60, // Optional: Re-generate the page every 60 seconds
    };
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return {
      props: {
        users: [], // Return empty array on error
      },
      revalidate: 10, // Re-attempt revalidation more frequently on error
    };
  }
}

export default Users;