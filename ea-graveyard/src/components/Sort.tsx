import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { SortType } from "../types/Sort";
import { ArrowUpIcon, ArrowDownIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

enum ChronologicalOrder {
  UP = "up",
  DOWN = "down"
}

interface SortProps {
  currentSort: SortType;
  sortHandler: Dispatch<SetStateAction<SortType>>;
}

export function Sort({currentSort, sortHandler}: SortProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentOrder, setOrder] = useState(ChronologicalOrder.DOWN)
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownButtonRef=useRef<HTMLDivElement>(null);

  type Option = {
    value: SortType,
    order: ChronologicalOrder,
    label: string,
  }

  const options: Option[]= [
    {
      value: SortType.ReverseDateClosed,
      order: ChronologicalOrder.DOWN,
      label: 'Date Closed',
    },
    {
      value: SortType.DateClosed,
      order: ChronologicalOrder.UP,
      label: 'Date Closed',
    },
    {
      value: SortType.ReverseDateFounded,
      order: ChronologicalOrder.DOWN,
      label: 'Date Founded',
    },
    {
      value: SortType.DateFounded,
      order: ChronologicalOrder.UP,
      label: 'Date Founded',
    },
    {
      value: SortType.ReverseDateAcquired,
      order: ChronologicalOrder.DOWN,
      label: 'Date Acquired',
    },
    {
      value: SortType.DateAcquired,
      order: ChronologicalOrder.UP,
      label: 'Date Acquired',
    }
  ]

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  const handleOption = (option: Option) => {
    sortHandler(option.value);
    setOrder(option.order);
    setIsOpen(false);
  }

  const handleOutsideClick = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)
      && !dropdownButtonRef.current?.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
  }, [dropdownRef])

  return (
    <div id="studioSort" className="w-full lg:w-[215px]">
      <div ref={dropdownButtonRef}>
        <button type="button" onClick={handleToggle} className="inline-flex items-center w-full rounded-md bg-white pl-3 pr-1 py-2 text-lg text-gray-900 dark:bg-gray-700 dark:text-white shadow-xs ring-1 ring-gray-300 ring-inset capitalize hover:bg-gray-100 hover:text-gray-900 hover:dark:bg-gray-700 dark:hover:text-white hover:outline-hidden focus:outline-hidden">
          <div className="w-full text-left flex flex-row gap-1">
            <span>{options.find((option) => option.value === currentSort)!.label}</span>
            {currentOrder === ChronologicalOrder.DOWN ? (
                <ArrowDownIcon className="self-center size-5" /> 
              ) : (
                <ArrowUpIcon className="self-center size-5" />
              )
            }
          </div>
          <div className="flex flex-row">
            <span className="flex box-border self-stretch w-[1px] bg-gray-300 my-1"/>
            <span className="flex text-gray-300 px-2 py-1"><ChevronDownIcon className="size-6"/></span>
          </div>
        </button>
      </div>
      <div id="studioSortList" className="relative">
        {isOpen && (
          <div ref={dropdownRef} className="absolute z-3 w-full lg:w-[215px] mt-2 py-1 origin-top-right rounded-lg bg-white dark:bg-gray-700 shadow-lg ring-1 ring-black/5 focus:outline-hidden text-left" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
            {options.map(option => (
              <a key={option.value} href="#" className="flex flex-row gap-1 px-4 py-2 text-lg text-gray-700 dark:bg-gray-700 dark:text-white hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white hover:outline-hidden" role="menuitem"
                  onClick={() => handleOption(option)}
              >
                <span>
                  {option.label}
                </span>
                {option.order === ChronologicalOrder.DOWN ? (
                    <ArrowDownIcon className="self-center size-5" /> 
                  ) : (
                    <ArrowUpIcon className="self-center size-5" />
                  )
                }
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Sort;