import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import User, { UserProps } from "../User/User";
import { fetchUsers } from "../../services/api";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUsers();
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        // Handle error
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex pt-3 flex-col content-center">
      {isLoading ? (
        <Loading />
      ) : (
        users.map((user: UserProps, i) => (
          <User
            key={i}
            firstName={user.firstName}
            lastName={user.lastName}
            image={user.image}
            email={user.email}
            age={user.age}
            id={user.id}
          ></User>
        ))
      )}
    </div>
  );
};

export default UserList;
