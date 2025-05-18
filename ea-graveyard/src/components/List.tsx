import { Status, StudioObj } from "../types/Studio"
import { NewspaperIcon } from "@heroicons/react/24/outline";
import {AcquiredBadge, StatusBadge} from "./Badges";
import GameOverIcon from '../../public/icons/game-over.svg?react';
import HalfHealthIcon from '../../public/icons/life.svg?react';

interface ListProps {
  studios: StudioObj[],
}

function List({studios}: ListProps) {

  const getIcon = (status: Status) => {
    switch (status) {
      case Status.CLOSED:
        return (
          <GameOverIcon className="aspect-square max-w-[80px] h-auto dark:fill-white dark:stroke-white" />
        )
      case Status.DECLINING:
        return (
          <HalfHealthIcon className="aspect-square max-w-[80px] dark:fill-white dark:stroke-white" />
        )
      case Status.REVIVED:
        return (
          <></>
        )
    }
  }

  return (
    <ul id="studioList" className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-2 mx-auto px-10">
      {studios.map(studio => (
        <li key={studio.name} className="flex flex-row gap-4 px-7 pt-6 pb-4 mt-5">
          <div>
            {/* <img className="aspect-square max-w-[80px]" src={studio.logo}/> */}
            {getIcon(studio.status)}
            <div className="flex justify-around text-sm my-2 dark:text-white">
              <time dateTime={studio.dateFounded.toString()} title={`${studio.dateFounded.toString()}`}>
                {studio.dateFounded.getFullYear()}
              </time>
              {` - `}
              { studio.dateClosed ? (
                  <time dateTime={studio.dateClosed.toString()} title={`${studio.dateClosed.toString()}`}>
                      {studio.dateClosed.getFullYear()}
                  </time>
                ) : (
                  <span className="w-[30.2px]" />
                ) 
              }
            </div>
            <div className="text-center mt-2">
              <StatusBadge status={studio.status} />
            </div>
          </div>
          <div className="flex flex-col items-start dark:text-white">
              <h2 key={studio.key} className="text-3xl mb-1">
                {studio.name}
              </h2>
              {studio.acquiredBy && (
                <AcquiredBadge company={studio.acquiredBy} acquiredDate={studio.dateAcquired!}/>
              )}
              <p>{studio.description}</p>
              <div className="flex flex-row self-end mt-auto">
                <button role="link" type="button" aria-labelledby="latest news button" className="rounded-md bg-gray-200 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-400 px-2 m-2 py-1.5">
                  <a href={studio.link} className="flex flex-row mx-auto" target="_blank" rel="noopener noreferrer">
                    <span className="pr-1">Latest news</span>
                    <NewspaperIcon className="size-6.5 dark:stroke-white"/>
                  </a>
                </button>
                {/* <button role="button" type="button" aria-labelledby="open obtiuary button" className="hidden rounded-lg px-5 m-2 py-1.5 bg-gray-100 hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-400 focus:ring-4 focus:ring-sky-300 focus:outline-none">Obituary</button> */}
              </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;