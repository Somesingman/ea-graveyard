import { useMemo, useState } from 'react'
import './App.css'

import List from './components/List';
import Filter from './components/Filter';
import { StudioObj } from './types/Studio';
import { SearchBox } from './components/SearchBar';
import { FilterType } from './types/Filter';

// data
import rawStudioData from './studios.json';

function App() {
  const [currentFilter, setFilter] = useState<FilterType>(FilterType.ALL)
  const [searchTag, setSearchTag] = useState('');

  const rawStudioList = rawStudioData.map(studioData => new StudioObj(studioData))

  const allSearchTags = new Set(rawStudioList.map(studio => studio.searchTags).flat());

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
    if (searchTag !== '') {
      return rawStudioList.filter(studio => {
        return studio.searchTags.includes(searchTag);
      })
    }
    return filteredStudioList;
  }, [currentFilter, searchTag])

  return (
    <>
      <h1 className="text-6xl text-center p-10">EA Graveyard</h1>
      <div className="flex flex-col lg:flex-row justify-center p-4 text-center gap-4">
        <SearchBox availableSearchTags={allSearchTags} setSearchTag={setSearchTag} />
        <Filter studios={rawStudioList} currentFilter={currentFilter} filterHandler={setFilter} />
      </div>
      <List studios={studioList} />
    </>
  )
}

export default App
