import { useMemo, useState } from 'react'
import './App.css'

import List from './components/List';
import Filter from './components/Filter';
import { StudioObj } from './types/Studio';
import { FilterType } from './types/Filter';

// data
import rawStudioData from './studios.json';

function App() {
  const [currentFilter, setFilter] = useState<FilterType>(FilterType.ALL)
  const [searchTag, setSearchTag] = useState('');

  const rawStudioList = rawStudioData.map(studioData => new StudioObj(studioData))

  const studioList: StudioObj[] = useMemo(() => {
    const filteredStudioList = currentFilter === FilterType.ALL ? rawStudioList :
      rawStudioList.filter(studio => {
        if (currentFilter == FilterType.EA) {
          return (studio.acquiredBy == 'EA' || studio.ownedBy == 'EA');
        } else if (currentFilter == FilterType.OTHER) {
          return (studio.acquiredBy != 'EA' && studio.ownedBy != 'EA');
        }
        return true;
      })
    return filteredStudioList;
  }, [currentFilter, searchTag])

  return (
    <>
      <h1 className="text-6xl text-center p-10">EA Graveyard</h1>
      <div className="p-4 text-center">
        Search and Filter placeholder
        <Filter studios={rawStudioList} currentFilter={currentFilter} filterHandler={setFilter} />
      </div>
      <List studios={studioList} />
    </>
  )
}

export default App
