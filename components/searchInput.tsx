import { useState } from "react";
import useSWR from "swr";
import fetcher from "@components/utils/fetcher";
import LiveSearch from "./liveSearch";
import APIKey from "@components/apiKeys";

const SearchInput = ({
  label,
  onSelect,
  movie,
}: {
  label: string;
  onSelect: (movie: any) => void;
  movie: any;
}) => {
  const [value, setValue] = useState("");

  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${value}`,
    fetcher
  );

  if (movie) {
    return <div>{movie.title}</div>;
  }

  return (
    <>
      <label className="flex flex-col mt-1 mb-1 relative">
        {label}
        <input
          className="p-2 text-black"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {value.length > 0 && (
          <button
            className="absolute right-2 top-8 text-black width-10 height-10"
            onClick={() => setValue("")}
          >
            x
          </button>
        )}
      </label>

      {!isLoading && data && data.results.length > 0 && (
        <LiveSearch movies={data.results} onSelect={onSelect} />
      )}
    </>
  );
};

export default SearchInput;
