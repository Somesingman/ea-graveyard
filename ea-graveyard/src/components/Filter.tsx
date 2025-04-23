import { Dispatch, SetStateAction, useState } from "react";
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

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    const handleOption = (option: FilterType) => {
        filterHandler(option);
        setIsOpen(false);
    }

    type Option = {
        value: FilterType,
        label: string,
    }

    const options: Option[]= [
        {
            value: FilterType.ALL,
            label: `All`,
        },
        {
            value: FilterType.EA,
            label: `EA Studios`,
        },
        {
            value: FilterType.OTHER,
            label: `Other Studios`,
        }

    ]

    return (
        <div className="w-full lg:w-md">
            <div>
                <button type="button" onClick={handleToggle} className="inline-flex items-center w-full rounded-md bg-white px-3 py-2 text-lg text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset capitalize hover:bg-gray-100 hover:text-gray-900 hover:outline-hidden">
                    <div className="w-full text-left">
                        <span>{options.find((option) => option.value === currentFilter)!.label}</span>   
                    </div>
                    <div className="flex flex-row">
                        <span className="flex box-border self-stretch w-[1px] bg-gray-300 my-1"/>
                        <span className="flex text-gray-300 p-1"><ChevronDownIcon className="size-6"/></span>
                    </div>

                </button>
            </div>
            <div className="relative">
                {isOpen && (
                    <div className="absolute w-full mt-2 py-1 lg:w-md origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-gray-300 ring-black/5 focus:outline-hidden text-left" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                            {options.map(option => (
                                <a href="#" className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:outline-hidden" role="menuitem"
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

// {options.map((option) => (
//     <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"
//         onClick={() => handleOption(FilterType.ALL)}
//     >  
//         {FilterType.ALL}
//     </a>
//         // <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"
//         //     onClick={() => handleOption(FilterType.EA)}
//         // >
//         //     {FilterType.EA}
//         // </a>
// )}

export default Filter;