import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

function ExpandableItems({ header, children }) {
  const [expanded, setexpanded] = useState(false);

  const handleClick = () => setexpanded(!expanded);

  return (
    <div className="border my-4 rounded">
      <div className="flex justify-between items-center my-2 p-2">
        {header}
        <div onClick={handleClick} className=" cursor-pointer pr-2">
          {expanded ? <GoChevronDown /> : <GoChevronRight />}
        </div>
      </div>
      {expanded && <div className="p-2 border-t">{children}</div>}
    </div>
  );
}

export default ExpandableItems;
