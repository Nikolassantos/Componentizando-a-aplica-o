import { MovieProps } from '../App';
import { MovieCard } from './MovieCard';

type IContentProps = {
  data: MovieProps[];
};

export function Content(props: IContentProps) {
  const { data } = props;

  return (
    <main>
      <div className="movies-list">
        {data.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            runtime={movie.Runtime}
            rating={movie.Ratings[0].Value}
          />
        ))}
      </div>
    </main>
  );
}
