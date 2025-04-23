import { useEffect, useRef, useState } from 'react'
import './App.css'

import List from './components/List';
import { StudioObj } from './types/Studio';
import { FilterType } from './types/Filter';

// data
import rawStudioData from './studios.json';

function App() {
  const [currentFilter, setFilter] = useState<FilterType>(FilterType.ALL)
  const [searchTag, setSearchTag] = useState('');

  const rawStudioList = rawStudioData.map(studioData => new StudioObj(studioData))
  let studioList = useRef<StudioObj[]>(rawStudioList);

  useEffect(() => {
    const filteredStudioList = currentFilter === FilterType.ALL ? rawStudioList :
      rawStudioList.filter(studio => {
        if (currentFilter == FilterType.EA) {
          return studio.acquiredBy == 'EA';
        } else if (currentFilter == FilterType.OTHER) {
          return studio.acquiredBy != 'EA';
        }
        return true;
      }) 
    if (searchTag === '') {
      studioList.current = filteredStudioList;
    }
  })

  return (
    <>
      <h1 className="text-6xl text-center p-10">EA Graveyard</h1>
      <div className="p-4 text-center"> Search and Filter placeholder </div>
      <List studios={studioList.current} />
    </>
  )
}

export default App
