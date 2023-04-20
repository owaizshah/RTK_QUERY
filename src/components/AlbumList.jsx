import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import AlbumsListItem from "./AlbumsListItem";

function AlbumList({ user }) {
  const { data, isFetching, isError } = useFetchAlbumsQuery(user);

  const [addAlbum, result] = useAddAlbumMutation();

  const handleClick = () => {
    addAlbum(user);
  };

  let content;
  if (isFetching) {
    content = <Skeleton times={3} className="my-2 w-full h-12" />;
  } else if (isError) {
    content = <div>ERROR LOADING ALBUMS</div>;
  } else {
    content = data.map((album) => {
      return <AlbumsListItem album={album} key={album.id} />;
    });
  }

  return (
    <div>
      <div className=" flex items-center justify-between">
        <h3 className=" font-bold">Albums for {user.name}</h3>
        <Button loading={result.isLoading} onClick={handleClick}>
          add album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumList;
