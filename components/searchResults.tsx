import useSWR from "swr";
import fetcher from "@components/utils/fetcher";
import APIKey from "@components/apiKeys";

//TODO: Better organization for types

interface MovieDetails {
  cast: [
    {
      adult: boolean;
      cast_id: number;
      character: string;
      credit_id: string;
      gender: number;
      id: number;
      known_for_department: string;
      name: string;
      order: number;
      original_name: string;
      popularity: number;
      profile_path: string;
    }
  ];
  crew: [
    {
      adult: boolean;
      credit_id: number;
      department: string;
      gender: number;
      id: number;
      job: string;
      known_for_department: string;
      name: string;
      original_name: string;
      popularity: number;
      profile_path: string | null;
    }
  ];
}

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

  const findSharedCast = (m1: MovieDetails, m2: MovieDetails) => {
    const m1Actors = m1.cast.map((a) => a.name);
    const m2Actors = m2.cast.map((a) => a.name);
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
