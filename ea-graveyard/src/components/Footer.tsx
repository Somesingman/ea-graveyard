
export function Footer() {
    
  return (
    <footer className="bg-red-400 mt-10 h-[510px] w-full text-slate-50">
      <div className="flex flex-col py-5 w-[650px] self-center text-center mx-auto py-10 gap-y-5">
        <h1 className="text-6xl">EA Graveyard</h1>
        <div className="flex flex-col text-lg gap-y-10">
          <p>
            EA Graveyard is an open source digital graveyard for video game studios that have been closed. Initially created to track EA acquired and created studios that have been shut down, it has been expanded to include other beloved game studios that have passed away. The project aims to be a source of factual information tracking dying and dead video game studios.
          </p>
          <p>
            Have any suggestions or news about a game studio closure? Join the project on <a href="https://github.com/Somesingman/ea-graveyard" className="underline decoration-dashed" target="_blank" rel="noopener noreferrer">GitHub</a>. A project by <a href="https://github.com/Somesingman" className="underline decoration-dashed">Somesingman</a>.
          </p>
        </div>
        <div>
          <p className="text-s"><a href="https://github.com/Somesingman/ea-graveyard/blob/main/LICENSE" className="underline decoration-dashed">&copy; 2025 Somesingman</a></p>
        </div>
        <div className="flex flex-row text-center self-center gap-4">
          <a href="">
            <img src="./socials/bluesky_logo.svg" alt="BlueSky" className="h-[48px] w-[48px] fill-white" />
          </a>
          <a href="">
            <img src="./socials/github_mark_white.svg" alt="Github" width="48" height="48" />
          </a>
        </div>
      </div>
    </footer>
  )
}