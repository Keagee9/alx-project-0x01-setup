// components/common/UserCard.tsx
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-2">{name}</h2>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Username:</span> {username}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Email:</span> {email}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Phone:</span> {phone}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Website:</span>{" "}
          <a
            href={`http://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {website}
          </a>
        </p>
        <div className="mt-4 border-t pt-4 border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Company</h3>
          <p className="text-gray-600 mb-1">
            <span className="font-semibold">Name:</span> {company.name}
          </p>
          <p className="text-gray-600 text-sm italic">"{company.catchPhrase}"</p>
        </div>
        <div className="mt-4 border-t pt-4 border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Address</h3>
          <p className="text-gray-600">
            {address.street}, {address.suite}
            <br />
            {address.city}, {address.zipcode}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;