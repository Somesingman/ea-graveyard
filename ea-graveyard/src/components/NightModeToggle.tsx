import { Dispatch, SetStateAction, useState } from "react";
import { SunIcon, MoonIcon  } from "@heroicons/react/24/solid";

interface ToggleProps {
    toggleDefaultState: boolean,
    toggleHandler: Dispatch<SetStateAction<boolean>>
}

export function NightModeToggle({toggleDefaultState, toggleHandler}: ToggleProps) {
    const [isChecked, setIsChecked] = useState(toggleDefaultState);

    const handleChange = () => {
        setIsChecked(!isChecked);
        toggleHandler(!isChecked);
    }

    return (
        <div className="flex select-none items-center justify-center py-2">
            <label className='cursor-pointer'>
                <div className='relative'>
                    <input
                        type='checkbox'
                        checked={isChecked}
                        onChange={handleChange}
                        className='sr-only'
                    />
                    <div className={`box block h-10 w-20 rounded-full ${isChecked ? 'dark:bg-gray-500' : 'bg-gray-800'}`} />
                    <div className={`absolute left-2 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-white transition ${isChecked ? 'translate-x-full' : ''}`} >
                        <SunIcon className={`${ isChecked ? 'hidden' : ''} w-7`}/>
                        <MoonIcon className={`${ isChecked ? '' : 'hidden'} w-6`}/>
                    </div>
                </div>
            </label>
        </div>
    )
}