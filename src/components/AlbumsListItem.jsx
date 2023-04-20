import ExpandableItems from "./ExpandableItems";
import { FaTrash } from "react-icons/fa";
import Button from "./Button";
import { useRemoveAlbumMutation } from "../store/apis/albumsApi";
import PhotosList from "./PhotosList";

function AlbumsListItem({ album }) {
  const [removeAlbum, result] = useRemoveAlbumMutation();

  const handleClick = () => {
    removeAlbum(album);
  };

  const header = (
    <div className=" text-sm flex gap-5 items-center">
      <Button onClick={handleClick} loading={result.isLoading}>
        <FaTrash />
      </Button>
      <h3 className=" font-semibold">{album.title}</h3>
    </div>
  );

  return (
    <ExpandableItems header={header} key={album.id}>
      <PhotosList album={album} />
    </ExpandableItems>
  );
}

export default AlbumsListItem;
