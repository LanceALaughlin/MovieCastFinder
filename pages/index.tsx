import { useState } from "react";

import Head from "next/head";
import styles from "@components/styles/Home.module.css";
import SearchInput from "@components/components/searchInput";
import SearchResults from "@components/components/searchResults";

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default function Home() {
  const [movieOne, setMovieOne] = useState<Movie>();
  const [movieTwo, setMovieTwo] = useState<Movie>();

  // Search input will have it's own state for the text inputs
  // Will also implement a search ahead
  // When an option is selected, the form becomes readonly (with clearing ability)
  // Once an option is selected, it passes the selected movies back
  // Those ids are passed into the results, which will fetch the credits for each movie
  // Some function will run that returns the common actors across both sets

  console.log(movieOne, movieTwo);

  return (
    <>
      <Head>
        <title>Movie Cast Finder</title>
        <meta
          name="description"
          content="Find common actors across movies and tv shows"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <h1 className="text-3xl font-bold">Movie Cast Finder</h1>
        <div className="flex flex-col w-96">
          <SearchInput
            label="Movie 1"
            onSelect={setMovieOne}
            movie={movieOne}
          />
          <SearchInput
            label="Movie 2"
            onSelect={setMovieTwo}
            movie={movieTwo}
          />

          {movieOne && movieTwo && (
            <SearchResults movieOneId={movieOne.id} movieTwoId={movieTwo.id} />
          )}
        </div>
      </main>
    </>
  );
}
