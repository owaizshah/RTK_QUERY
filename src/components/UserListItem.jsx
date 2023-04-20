import { FaTrash } from "react-icons/fa";
import Button from "./Button";
import useThunk from "../hooks/useThunk";
import { removeUser } from "../store";
import ExpandableItems from "./ExpandableItems";
import AlbumList from "./AlbumList";

function UserListItem({ user }) {
  const [removeUserLoading, loading, error] = useThunk(removeUser);

  const handleClick = (user) => {
    removeUserLoading(user);
  };

  const header = (
    <div className="flex gap-5 items-center">
      <Button onClick={() => handleClick(user)}>
        <FaTrash />
      </Button>
      <div className="">{user.name}</div>
    </div>
  );

  return (
    <ExpandableItems header={header}>
      <AlbumList user={user} />
    </ExpandableItems>
  );
}

export default UserListItem;
