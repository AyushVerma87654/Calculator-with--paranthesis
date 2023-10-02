import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";

function Display({ data, onAdd, show, checked, readOnly, remove }) {
  let border = "";
  if (show) {
    border = " border-4 border-blue-500";
  }
  return (
    <div className="my-2 space-y-2">
      <div className={"flex justify-between my-2 items-center " + border}>
        <div className="flex items-center">
          <input
            readOnly={readOnly}
            checked={checked}
            className="-mb-1"
            type="checkbox"
            onClick={() => onAdd(data)}
          />
          <p>{data}</p>
        </div>
        <div>{show && <RiDeleteBin2Fill onClick={() => remove(data)} />}</div>
      </div>
    </div>
  );
}

export default Display;
