import { Dispatch, SetStateAction, useEffect, useMemo, useRef, useState } from "react";

interface SearchBoxProps {
    availableSearchTags: Set<string>;
    setSearchTag: Dispatch<SetStateAction<string>>;
}

export function SearchBox({availableSearchTags, setSearchTag}: SearchBoxProps) {
    const [searchValue, setSearchValue] = useState('');
    const [hasMatchingTags, setHasMatchingTags] = useState(false);
    const tagListRef = useRef<HTMLDivElement>(null);
    const searchBoxRef = useRef<HTMLDivElement>(null);

    const shownTags = useMemo(() => {
      return Array.from(availableSearchTags).filter(tag => {
        return tag.toLowerCase().includes(searchValue.toLowerCase());
      });
    }, [availableSearchTags, searchValue])

    const handleTagSelect = (tag: string) => {
      setSearchValue(tag);
      setSearchTag(tag);
      setHasMatchingTags(false);
    }

    const handleSearchBarFocus = () => {
      setSearchTag('');
      setSearchValue('');
    }

    const handleSearchTextChange = (searchBoxValue: string) => {
      setSearchValue(searchBoxValue);
      if (shownTags) {
        setHasMatchingTags(true);
        setSearchTag('');
      }
    }

    const handleOutsideClick = (event: MouseEvent) => {
      if (tagListRef.current && !tagListRef.current.contains(event.target as Node)
        && !searchBoxRef.current?.contains(event.target as Node)
      ) {
        setSearchTag('');
        setSearchValue('');
      }
    }

    useEffect(() => {
      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      }
    }, [tagListRef])

    const showMatchingTags = (searchValue !== '' && shownTags.length > 0 && hasMatchingTags);

    return (
      <div className="w-full lg:w-[400px]">
        <div ref={searchBoxRef}  className="w-full flex flex-row">
          <input
            id="studioSearchBox"
            placeholder="Search"
            type="text"
            value={searchValue}
            onFocus={() => handleSearchBarFocus()}
            onChange={(e: React.FormEvent<HTMLInputElement>) => handleSearchTextChange(e.currentTarget.value)}
            className="w-full rounded-md bg-white dark:bg-gray-700 px-3 py-2 text-lg text-gray-900 dark:placeholder-gray-400 dark:text-white shadow-xs dark:border-gray-600 ring-2 ring-black/5"
          />
        </div>
        <div id="studioSearchTagList" className="relative">
          {showMatchingTags && (
            <div ref={tagListRef} className="absolute z-3 w-full mt-2 py-1 lg:w-md origin-top-right rounded-lg bg-white dark:bg-gray-700 shadow-lg ring-1 ring-black/5 focus:outline-hidden text-left" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                {shownTags.map(tag => (
                  <a key={tag} href="#" className="block px-4 py-2 text-lg text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white hover:text-gray-900 hover:outline-hidden" role="menuitem"
                    onClick={() => handleTagSelect(tag)}
                  >  
                    {tag}
                  </a>
                ))}
            </div>
          )}
        </div>
      </div>
    )
}