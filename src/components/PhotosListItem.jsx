import { FaTrash } from "react-icons/fa";
import { useRemovePhotosMutation } from "../store";

function PhotosListItem({ photo }) {
  const [removePhoto] = useRemovePhotosMutation();

  const handleRemove = () => {
    removePhoto(photo);
  };

  return (
    <div
      className="w-20 h-20 mx-3 my-4 relative cursor-pointer"
      onClick={handleRemove}
    >
      <img src={photo.url} alt="Random photos" />
      <div className=" flex items-center justify-center absolute inset-0 text-3xl bg-slate-300 opacity-0 hover:opacity-80 transition-all">
        <FaTrash />
      </div>
    </div>
  );
}

export default PhotosListItem;
