import { ChangeEvent, useContext, useRef } from "react";
import { PlacesContext } from "../context";

export const SearchBar = () => {
  const { searchPlacesByTerm } = useContext(PlacesContext);

  const debounceRef = useRef<number | undefined>();

  const onQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      searchPlacesByTerm(e.target.value);
    }, 350);
  };

  return (
    <div
      className="input-group mb-3 float-left mt-4 mx-4"
      style={{ width: "250px" }}
    >
      <input
        type="text"
        className="form-control"
        placeholder="Buscar lugar"
        onChange={onQueryChange}
      />
    </div>
  );
};
