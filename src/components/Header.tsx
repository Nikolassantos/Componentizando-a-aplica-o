export type IHeaderProps = {
  selectedGenre: string;
};

export function Header(props: IHeaderProps) {
  const { selectedGenre } = props;

  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre}</span>
      </span>
    </header>
  );
}
