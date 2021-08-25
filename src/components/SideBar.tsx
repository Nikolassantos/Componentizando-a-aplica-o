import { GenreResponseProps } from '../App';
import { Button } from './Button';

type ISidebarProps = {
  data: GenreResponseProps[];
  selectedGenreId: number;
  handleClickButton(id: number): void;
};

export function SideBar(props: ISidebarProps) {
  const { data, selectedGenreId, handleClickButton } = props;

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {data.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
