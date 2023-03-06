import Image from "next/image";
const LiveSearch = ({
  movies,
  onSelect,
}: {
  movies: any[];
  onSelect: (movie: any) => void;
}) => {
  //TODO: Figure out a better image loading mechanism so it's less jumpy
  return (
    <div className="bg-white text-black divide-y h-96 overflow-scroll w-auto">
      <ul>
        {movies.map((m) => (
          <li
            key={m.id}
            className="mt-2 mb-2 cursor-pointer"
            onClick={() => onSelect(m)}
          >
            <div className="flex items-center">
              <div className="mr-1 ml-1">
                {m.poster_path ? (
                  <Image
                    placeholder="blur"
                    blurDataURL="https://via.placeholder.com/10x10/cccccc/1a1717.jpg?text=Film"
                    src={`https://image.tmdb.org/t/p/original${m.poster_path}`}
                    alt={m.title}
                    width="50"
                    height="75"
                  />
                ) : (
                  <Image
                    src="https://via.placeholder.com/50x75/cccccc/1a1717.jpg?text=Film"
                    width="50"
                    height="75"
                    alt="placeholder when no image is returned"
                  />
                )}
              </div>

              <div className="flex flex-col">
                <span className="mw-250">{m.title}</span>
                <span>{m.release_date}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveSearch;
