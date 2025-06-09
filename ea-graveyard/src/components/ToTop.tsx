import { ArrowUpCircleIcon } from "@heroicons/react/24/solid"

interface toTopProps {
    isVisible: boolean;
    scrollHandler: () => void;
}

function ToTop({isVisible, scrollHandler}: toTopProps) {
    return (
        <button className={`${isVisible ? "" : "hidden"} block rounded-full fixed bottom-10 sm:bottom-20 right-10 sm:right-10 z-10 cursor-pointer`} onClick={() => scrollHandler()}>
            <ArrowUpCircleIcon className="w-[60px] md:w-[70px] lg:w-[80px] rounded-full bg-white dark:bg-gray-800 fill-gray-800 hover:fill-gray-600 dark:fill-white dark:hover:fill-gray-200 shadow-lg" />
        </button>
    )
}

export default ToTop;