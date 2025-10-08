
export default function Footer() {

   return (
      <div className="col-start-1 row-start-3 text-sm col-span-full bg-bgprimary shadow-md rounded-md">
         <div className="w-full relative">
            <div className="overflow-hidden flex flex-col rounded-[0.25rem] shadow-md bg-surface-0 dark:bg-surface-800 text-surface-700 dark:text-surface-0" >
               <div className="flex flex-col" >
                  <div className="p-0" >
                     <div className="flex h-10 gap-1 items-center">
                        <div className="h-full bg-success-400 flex text-surface-900 justify-center items-center w-5" />
                        <div className="flex-1 flex p-1 gap-1.5 items-center">
                           <button type="button" aria-label="v0.1.0"
                              className="text-gray-500 px-3 py-1.5">
                              <span className="duration-200 font-medium flex-1" >v0.1.0 (Latest)</span>
                           </button>
                           <button
                              type="button"
                              aria-label="Commands"
                              className="px-3 py-1.5 rounded-xl hover:cursor-pointer text-gray-400 font-medium 
                              shadow-md hover:outline  
                              transition-transform duration-200 flex items-center gap-2">
                              <span className="duration-200  flex-1" >Commands</span>
                           </button>
                           <button
                              type="button"
                              aria-label="Logs"
                              className="px-3 py-1.5 rounded-xl hover:cursor-pointer text-gray-400 font-medium 
                              shadow-md hover:outline  
                              transition-transform duration-200 flex items-center gap-2"
                           >
                              <span className="duration-200 flex-1">Logs</span>
                           </button>
                           <div />
                           <div className="flex-1"></div>

                           <button
                              type="button"
                              aria-label="Learn About Projects"
                              className="px-3 py-1.5 rounded-xl hover:cursor-pointer text-gray-400 font-medium 
                              shadow-md hover:outline  
                              transition-transform duration-200 flex items-center gap-2"
                           >
                              <span className="flex-1">Learn About Projects</span>
                           </button>

                           <button
                              type="button"
                              aria-label="Send Feedback"
                              className="px-3 py-1.5 rounded-xl hover:cursor-pointer text-gray-400 font-medium 
                              shadow-md hover:outline  
                              transition-transform duration-200 flex items-center gap-2"
                           >
                              <span className="flex-1">Send Feedback</span>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>)
}