import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { StudioObj } from "../types/Studio";
import { FilterType } from "../types/Filter";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface FilterProps {
  studios: StudioObj[];
  currentFilter: FilterType;
  filterHandler: Dispatch<SetStateAction<FilterType>>;
}

export function Filter({studios, currentFilter, filterHandler}: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownButtonRef=useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  const handleOption = (option: FilterType) => {
    filterHandler(option);
    setIsOpen(false);
  }

  const handleOutsideClick = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)
      && !dropdownButtonRef.current?.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }

  type Option = {
    value: FilterType,
    label: string,
  }

  const options: Option[]= [
    {
      value: FilterType.ALL,
      label: `All Studios - ${studios.length}`,
    },
    {
      value: FilterType.EA,
      label: `EA Studios - ${studios.filter(studio => (studio.acquiredBy == 'EA' || studio.ownedBy == 'EA')).length}`,
    },
    {
      value: FilterType.OTHER,
      label: `Other Studios - ${studios.filter(studio => !(studio.acquiredBy == 'EA' || studio.ownedBy == 'EA')).length}`,
    }
  ]

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
  }, [dropdownRef])

  return (
    <div id="studioFilter" className="w-full lg:w-[215px]">
      <div ref={dropdownButtonRef}>
        <button type="button" onClick={handleToggle} className="inline-flex items-center w-full rounded-md bg-white pl-3 pr-1 py-2 text-lg text-gray-900 dark:bg-gray-700 dark:text-white shadow-xs ring-1 ring-gray-300 ring-inset capitalize hover:bg-gray-100 hover:dark:bg-gray-700 hover:text-gray-900 dark:hover:text-white hover:outline-hidden focus:outline-hidden">
          <div className="w-full text-left">
            <span>{options.find((option) => option.value === currentFilter)!.label}</span>   
          </div>
          <div className="flex flex-row ">
            <span className="flex box-border self-stretch w-[1px] bg-gray-300 my-1"/>
            <span className="flex text-gray-300 px-2 py-1"><ChevronDownIcon className="size-6"/></span>
          </div>
        </button>
      </div>
      <div id="studioFilterList" className="relative">
        {isOpen && (
          <div ref={dropdownRef} className="absolute w-full lg:w-[215px] mt-2 py-1 origin-top-right rounded-lg bg-white dark:bg-gray-700 shadow-lg ring-1 ring-black/5 focus:outline-hidden text-left" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
            {options.map(option => (
              <a key={option.value} href="#" className="block px-4 py-2 text-lg text-gray-700 dark:bg-gray-700 dark:text-white hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white hover:outline-hidden" role="menuitem"
                onClick={() => handleOption(option.value)}
              >  
                {option.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Filter;