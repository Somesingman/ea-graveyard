import { useState } from 'react'
import { Status, StudioObj } from "../types/Studio"
import { ArrowPathIcon, NewspaperIcon } from "@heroicons/react/24/outline";
import { AcquiredBadge, StatusBadge } from "./Badges";
import GameOverIcon from '../../public/icons/game-over.svg?react';
import HalfHealthIcon from '../../public/icons/life.svg?react';

interface ListItemProps {
  studio: StudioObj,
  logoMode: boolean,
}

function ListItem({studio, logoMode}: ListItemProps) {
  const [logoVisibility, setLogoVisibility] = useState(true);

  const getIcon = (status: Status) => {
    switch (status) {
      case Status.CLOSED:
        return (
          <GameOverIcon className="aspect-square w-[80px] h-auto dark:fill-white dark:stroke-white" />
        )
      case Status.DECLINING:
        return (
          <HalfHealthIcon className="aspect-square w-[80px] dark:fill-white dark:stroke-white" />
        )
      case Status.REVIVED:
        return (
          <></>
        )
    }
  }

  const logoClass = () => {
    if (logoMode) {
      if (logoVisibility) {
        return 'opacity-100'
      } else {
        return 'opacity-0'
      }
    }
    return 'opacity-0'
  }

  const onHover = (newVisibility:boolean) => {
    if (logoMode) {
      setLogoVisibility(newVisibility);
    }
  }

  const showLogo = () => {
    setLogoVisibility(!logoVisibility);
  }

  return (
    <li className="relative flex flex-row gap-4 sm:px-7 pt-6 pb-4 mt-5">
      {studio.logo &&
        <>
          <div className={`${logoClass()} absolute flex justify-around left-0 right-0 top-0 bottom-0 px-7 pt-6 pb-4 mt-5 transition duration-750 ease-in-out`}>
              <img className="" src={studio.logo ? studio.logo : "https://placehold.co/200x220"} />
          </div>
          <button onClick={() => showLogo()} className="[@media(hover:hover)]:hidden absolute min-w-[60px] min-h-[60px] right-0 z-3 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full">
            <ArrowPathIcon className={`${logoVisibility ? 'rotate-0' : 'rotate-180'} transition duration-500 dark:stroke-white max-w-[40px]`} />
          </button>
        </>
      }
      <div className={`${(logoMode && logoVisibility && studio.logo) ? "opacity-0" : "opacity-100"} transition duration-750 ease-in-out z-2 flex flex-row gap-4`}
        onMouseEnter={() => onHover(false)}
        onMouseLeave={() => onHover(true)}
      >
        <div>
          {getIcon(studio.status)}
          <div className="flex justify-around text-sm my-2 dark:text-white">
            <time dateTime={studio.dateFounded.toString()} title={`${studio.dateFounded.toString()}`}>
              {studio.dateFounded.getFullYear()}
            </time>
            {` - `}
            { studio.dateClosed ? (
                <time dateTime={studio.dateClosed.toString()} title={`${studio.dateClosed.toString()}`}>
                    {studio.status == Status.REVIVED ? (
                        <s className="decoration-2">{studio.dateClosed.getFullYear()}</s>
                      ) : (
                        <>{studio.dateClosed.getFullYear()}</>
                      )
                    }
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
            <h2 className="text-3xl mb-1">
              {studio.name}
            </h2>
            {studio.acquiredBy && (
              <AcquiredBadge company={studio.acquiredBy} acquiredDate={studio.dateAcquired!}/>
            )}
            <p className="py-2">{studio.description}</p>
            <div className="flex flex-row self-end mt-auto">
              <button role="link" type="button" aria-labelledby="latest news button" className="group rounded-md bg-gray-200 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-400 dark:hover:text-black px-2 m-2 py-1.5">
                <a href={studio.link} className="flex flex-row mx-auto" target="_blank" rel="noopener noreferrer">
                  <span className="pr-1">Latest news</span>
                  <NewspaperIcon className="size-6.5 dark:stroke-white group-hover:dark:stroke-black"/>
                </a>
              </button>
              {/* <button role="button" type="button" aria-labelledby="open obtiuary button" className="hidden rounded-lg px-5 m-2 py-1.5 bg-gray-100 hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-400 focus:ring-4 focus:ring-sky-300 focus:outline-none">Obituary</button> */}
            </div>
        </div>
      </div>
    </li>
  );
}

export default ListItem;