import { useEffect } from "react";
import useThunk from "../hooks/useThunk";
import { useSelector } from "react-redux";
import { fetchUser, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import UserListItem from "./UserListItem";

//////////////////////////////////////////////////////////

function UserList() {
  // const [userIsLoading, setUSerIsLoading] = useState(false);
  // const [userError, setUserError] = useState(null);

  const [fetchUserLoading, userIsLoading, userError] = useThunk(fetchUser);
  const [createUser, createUserIsLoading, createUserError] = useThunk(addUser);

  // const [createUserIsLoading, setcreateUserIsLoading] = useState(false);
  // const [createUserError, setCreateUserError] = useState(null);

  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    fetchUserLoading();
  }, []);

  const handleClick = () => {
    createUser();
  };

  let content;

  if (userIsLoading) {
    content = <Skeleton times={20} className="my-3 w-full h-16" />;
  } else if (userError) {
    content = <div>Error Fetching Data</div>;
  } else {
    content = data.map((user) => {
      return <UserListItem user={user} key={user.id} />;
    });
  }

  return (
    <div>
      <div className="flex justify-between m-2 p-2">
        <h1 className=" text-xl">User</h1>
        <Button onClick={handleClick} loading={createUserIsLoading}>
          add User
        </Button>
        {createUserError && "ERROR CREATING USER"}
      </div>
      {content}
    </div>
  );
}

export default UserList;
