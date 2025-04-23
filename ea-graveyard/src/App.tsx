import { useState } from 'react'
import './App.css'

import List from './components/List';
import { StudioObj } from './types/Studio';
import { FilterType } from './types/Filter';

// data
import rawStudioData from './studios.json';

function App() {
  // const [count, setCount] = useState(0)
  const [currentFilter, updateFilter] = useState<FilterType>(FilterType.ALL)

  let studioList: StudioObj[] = rawStudioData.map(studioData => new StudioObj(studioData));
 

  return (
    <>
      <h1 className="text-6xl text-center p-10">EA Graveyard</h1>
      <div className="p-4 text-center"> Search and Filter placeholder </div>
      <List studios={studioList} />
      {/* <div className="flex justify-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
