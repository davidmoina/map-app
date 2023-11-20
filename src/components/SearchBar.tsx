import { ChangeEvent, useContext, useRef } from "react";
import { PlacesContext } from "../context";
import { SearchResults } from ".";

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
      className="rounded p-1 input-group float-left d-flex flex-column mt-4 mx-4"
      style={{ width: "250px", backgroundColor: "white" }}
    >
      <input
        type="text"
        className="form-control w-100"
        placeholder="Buscar lugar"
        onChange={onQueryChange}
      />

      <SearchResults />
    </div>
  );
};
