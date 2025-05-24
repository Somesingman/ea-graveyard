import { useMemo, useState } from 'react'
import './App.css'

import List from './components/List';
import Filter from './components/Filter';
import Sort from './components/Sort';
import { StudioObj } from './types/Studio';
import { SearchBox } from './components/SearchBar';
import { FilterType } from './types/Filter';
import { SortType } from './types/Sort';
import { Footer } from './components/Footer';
import { NightModeToggle } from './components/NightModeToggle';

// data
import rawStudioData from './studios.json';

declare global {
  interface Window {
    umami?: any;
  }
}


function App() {
  const [currentFilter, setFilter] = useState<FilterType>(FilterType.ALL)
  const [currentSort, setSort] = useState<SortType>(SortType.ReverseDateClosed)
  const [searchTag, setSearchTag] = useState('');
  const [nightModeOn, setNightMode] = useState(localStorage.getItem("nightMode") === 'dark' || !('nightMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

  const rawStudioList = rawStudioData.map(studioData => new StudioObj(studioData))

  const allSearchTags = new Set(rawStudioList.map(studio => studio.searchTags).flat());

  const farFuture = new Date("3000-01-01");
  const sortStudios = (studioList: StudioObj[]) => {
    switch (currentSort) {
      case SortType.DateClosed:
        studioList.sort((a, b) => {
          const dateA = a.dateClosed ? a.dateClosed : farFuture
          const dateB = b.dateClosed ? b.dateClosed : farFuture
          return dateA.getTime() - dateB.getTime()
        });
        break;
      case SortType.ReverseDateClosed:
        studioList.sort((a, b) => {
          const dateA = a.dateClosed ? a.dateClosed : farFuture
          const dateB = b.dateClosed ? b.dateClosed : farFuture
          return dateB.getTime() - dateA.getTime()
        });
        break;
      case SortType.DateFounded:
        studioList.sort((a, b) => a.dateFounded.getTime() - b.dateFounded.getTime())
        break;
      case SortType.ReverseDateFounded:
        studioList.sort((a, b) => b.dateFounded.getTime() - a.dateFounded.getTime())
        break;
      case SortType.DateAcquired:
        studioList.sort((a, b) => {
          const dateA = a.dateAcquired ? a.dateAcquired : farFuture
          const dateB = b.dateAcquired ? b.dateAcquired : farFuture
          return dateA.getTime() - dateB.getTime()
        });
        break;
      case SortType.ReverseDateAcquired:
        studioList.sort((a, b) => {
          const dateA = a.dateAcquired ? a.dateAcquired : farFuture
          const dateB = b.dateAcquired ? b.dateAcquired : farFuture
          return dateB.getTime() - dateA.getTime()
        });
        break;
    }
    return studioList
  }

  const studioList: StudioObj[] = useMemo(() => {
    let processedStudioList = currentFilter === FilterType.ALL ? rawStudioList :
      rawStudioList.filter(studio => {
        if (currentFilter == FilterType.EA) {
          return (studio.acquiredBy == 'EA' || studio.ownedBy == 'EA');
        } else if (currentFilter == FilterType.OTHER) {
          return (studio.acquiredBy != 'EA' && studio.ownedBy != 'EA');
        }
        return true;
      })
    if (searchTag !== '') {
      if (process.env.NODE_ENV == 'production') {
        window.umami.track('search-tag', {tag: searchTag});
      }
      processedStudioList = rawStudioList.filter(studio => {
        return studio.searchTags.includes(searchTag);
      })
    }
    return sortStudios(processedStudioList);
  }, [currentFilter, currentSort, searchTag, rawStudioList])

  return (
    <div className={`${nightModeOn ? "dark" : "light"} dark:bg-gray-800  min-h-dvh flex flex-col justify-between`}>
      <div className="max-w-[1600px] pb-10 mx-auto">
        <h1 className="text-6xl text-center p-10 dark:text-white">
          { currentFilter == FilterType.EA ? (
              'EA Graveyard'
            ) : (
              'Game Studio Graveyard'
            )
          }
        </h1>
        <NightModeToggle toggleDefaultState={nightModeOn} toggleHandler={setNightMode} />
        <div className="flex flex-col lg:flex-row justify-center items-center py-4 px-10 text-center gap-4">
          <SearchBox availableSearchTags={allSearchTags} setSearchTag={setSearchTag} />
          <Filter studios={rawStudioList} currentFilter={currentFilter} filterHandler={setFilter} />
          <Sort currentSort={currentSort} sortHandler={setSort}/>
        </div>
        <List studios={studioList} />
      </div>
      <Footer />
    </div>
  )
}

export default App