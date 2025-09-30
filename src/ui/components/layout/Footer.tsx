
export default function Footer() {

   return (
      <div className="col-start-1 row-start-3 col-span-full bg-[#161B22] shadow-md rounded-md">
         <div className="w-full relative">
            <div className="overflow-hidden flex flex-col rounded-[0.25rem] shadow-md bg-surface-0 dark:bg-surface-800 text-surface-700 dark:text-surface-0" >
               <div className="flex flex-col" >
                  <div className="p-0" >
                     <div className="flex h-10 gap-1 items-center">
                        <div className="h-full bg-success-400 flex text-surface-900 justify-center items-center w-10" ><i className="fa-solid fa-link"></i></div>
                        <div className="flex-1 flex p-1 gap-1 items-center">
                           <button type="button" aria-label="v0.1.0"
                              className="relative items-center inline-flex text-center align-bottom justify-center leading-[normal] text-sm py-1.5 px-3 gap-2 rounded-md 
                              bg-transparent border-transparent text-surface-900 dark:text-surface-300 focus:outline-none focus:outline-offset-0 focus:ring-1 
                              focus:ring-surface-500 dark:focus:ring-surface-0 hover:bg-surface-900/10 dark:hover:bg-[rgba(255,255,255,0.03)] opacity-60 
                              pointer-events-none transition duration-200 ease-in-out cursor-pointer overflow-hidden select-none ">
                              <span className="duration-200 font-medium flex-1" >v0.1.0 (Latest)</span>
                              </button>
                           <button type="button" aria-label="Commands">
                              <span className="duration-200 font-medium flex-1" >Commands</span></button>
                           <button type="button" aria-label="Logs" className="!border-transparent relative items-center inline-flex text-center align-bottom justify-center leading-[normal] text-sm py-1.5 px-3 gap-2 rounded-md bg-transparent  text-surface-900 dark:text-surface-300 border border-surface-900 dark:border-surface-600 focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-surface-500 dark:focus:ring-surface-0 hover:bg-surface-900/10 dark:hover:bg-[rgba(255,255,255,0.03)] transition duration-200 ease-in-out cursor-pointer overflow-hidden select-none [&amp;>[data-pc-name=badge]]:min-w-4 [&amp;>[data-pc-name=badge]]:h-4 [&amp;>[data-pc-name=badge]]:leading-4" data-pc-section="root"><span className="fas fa-file-lines !mr-0 text-base leading-4 mx-0 " data-pc-section="icon"></span>
                              <span className="duration-200 font-medium flex-1">Logs</span>
                           </button>
                           <div className="flex justify-between items-center gap-2 min-w-0 h-full max-w-xs ml-3">
                              <div className="flex-1 flex items-center gap-2 overflow-x-auto scrollbar-hide"></div>
                           </div>
                           <div className="flex-1"></div>

                           <button type="button" aria-label="Learn About Projects">
                              <span className="duration-200 font-medium flex-1">Learn About Projects</span></button>
                           <button type="button" aria-label="Send Feedback" >
                              <span className="duration-200 font-medium flex-1" >Send Feedback</span>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>)
}