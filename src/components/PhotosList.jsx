import Button from "./Button";
import Skeleton from "./Skeleton";
import PhotosListItem from "./PhotosListItem";
import { useFetchPhotosQuery, useAddPhotosMutation } from "../store";

function PhotosList({ album }) {
  const { data, isError, isFetching } = useFetchPhotosQuery(album);

  const [addPhotos, addPhotoResult] = useAddPhotosMutation(album);

  const handleClick = () => {
    addPhotos(album);
  };

  let content;
  if (isFetching) {
    content = <Skeleton className="my-2 w-20 h-20 mx-3" times={4} />;
  } else if (isError) {
    content = <div>ERROR FETCHING PHOTOS</div>;
  } else {
    content = data.map((photo) => {
      return <PhotosListItem key={photo.id} photo={photo} />;
    });
  }

  return (
    <div>
      <div className=" flex items-center justify-between">
        <h3 className="font-bold text-sm">Photos for {album.title}</h3>
        <Button onClick={handleClick} loading={addPhotoResult.isLoading}>
          Add Photos
        </Button>
      </div>
      <div className="flex items-center justify-center flex-wrap">
        {content}
      </div>
    </div>
  );
}

export default PhotosList;
