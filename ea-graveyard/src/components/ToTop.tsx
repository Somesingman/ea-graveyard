import { ArrowUpCircleIcon } from "@heroicons/react/24/solid"

interface toTopProps {
    isVisible: boolean;
    scrollHandler: () => void;
}

function ToTop({isVisible, scrollHandler}: toTopProps) {
    return (
        <button className={`${isVisible ? "" : "hidden"}  block rounded-full fixed bottom-20 right-20 z-10 cursor-pointer`} onClick={() => scrollHandler()}>
            <ArrowUpCircleIcon className="sm:w-[40px] lg:w-[80px] rounded-full bg-white dark:bg-gray-800 fill-gray-800 hover:fill-gray-600 dark:fill-white dark:hover:fill-gray-200 shadow-lg" />
        </button>
    )
}

export default ToTop;