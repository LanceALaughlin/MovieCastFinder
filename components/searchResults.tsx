import useSWR from "swr";
import fetcher from "@components/utils/fetcher";
import APIKey from "@components/apiKeys";

//TODO: Figure out typing here

const SearchResults = ({
  movieOneId,
  movieTwoId,
}: {
  movieOneId: number;
  movieTwoId: number;
}) => {
  const {
    data: movieOneData,
    error: errorOne,
    isLoading: loadingOne,
  } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieOneId}/credits?api_key=${APIKey}`,
    fetcher
  );

  const {
    data: movieTwoData,
    error: errorTwo,
    isLoading: loadingTwo,
  } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieTwoId}/credits?api_key=${APIKey}`,
    fetcher
  );

  const findSharedCast = (m1, m2) => {
    const m1Actors = m1.cast.map((a) => a.name);
    const m2Actors = m2.cast.map((a) => a.name);
    console.log(m1Actors, m2Actors);
    const shared = m1Actors.filter((a) => m2Actors.indexOf(a) !== -1);

    return (
      <ul>
        {shared.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="mt-20">
      <h2 className="text-xl">Shared Cast</h2>
      {movieOneData &&
        movieTwoData &&
        findSharedCast(movieOneData, movieTwoData)}
    </div>
  );
};

export default SearchResults;
