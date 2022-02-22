import { Button } from './Button';

import '../styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  selectedGenreId: number;
  handleClickButton: Function;
  genres: GenreResponseProps[];
}

export function SideBar(props: SideBarProps){
  // Complete aqui

  return (
  <nav className="sidebar">
  <span>Watch<p>Me</p></span>

  <div className="buttons-container">
    {props.genres.map(genre => (
      <Button
        key={String(genre.id)}
        title={genre.title}
        iconName={genre.name}
        onClick={() => props.handleClickButton(genre.id)}
        selected={props.selectedGenreId === genre.id}
      />
    ))}
  </div>

</nav>
  )
}