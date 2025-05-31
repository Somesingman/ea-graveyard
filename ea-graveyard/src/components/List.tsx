import { StudioObj } from "../types/Studio"
import ListItem from "./ListItem";

interface ListProps {
  studios: StudioObj[],
  logoMode: boolean,
}

function List({studios, logoMode}: ListProps) {

  return (
    <ul id="studioList" className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-2 mx-auto px-10">
      {studios.map(studio => (
        <ListItem key={studio.key} studio={studio} logoMode={logoMode} />
      ))}
    </ul>
  );
}

export default List;