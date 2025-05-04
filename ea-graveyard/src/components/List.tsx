import { StudioObj } from "../types/Studio"
import { NewspaperIcon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/outline";
import {AcquiredBadge, StatusBadge} from "./Badges";

interface ListProps {
    studios: StudioObj[],
}

function List({studios}: ListProps) {
    
    return (
        <ul id="studioList" className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-2 mx-auto">
            {studios.map(studio => (
                <li key={studio.name} className="flex flex-row gap-4 px-7 pt-6 pb-4 hover:rounded-xl hover:outline hover:outline-black/5 hover:shadow-lg mt-5">
                    <div>
                        {/* <img className="aspect-square max-w-[80px]" src={studio.logo}/> */}
                        <XCircleIcon className="w-[80px]" />
                        <div className="flex justify-around text-sm my-2">
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
                    <div className="flex flex-col items-start">
                        <h2 key={studio.key} className="text-3xl">
                            {studio.name}
                        </h2>
                        {studio.acquiredBy && (
                            <AcquiredBadge company={studio.acquiredBy} acquiredDate={studio.dateAcquired!}/>
                        )}
                        <p>{studio.description}</p>
                        <div className="flex flex-row self-end mt-auto">
                            <button role="link" type="button" aria-labelledby="latest news button" className="size-9 rounded-md bg-gray-100 hover:bg-gray-500 focus:ring-4 px-1 m-2 py-0.5">
                                <a href={studio.link} target="_blank" rel="noopener noreferrer">
                                    <NewspaperIcon className="size-6 mx-auto"/>
                                </a>
                            </button>
                            <button role="button" type="button" aria-labelledby="open obtiuary button" className="hidden rounded-lg px-5 m-2 py-1.5 bg-gray-100 hover:bg-gray-500 focus:ring-4 focus:ring-sky-300 focus:outline-none">Obituary</button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default List;