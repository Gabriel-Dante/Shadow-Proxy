
export default function Sidebar() {
  return (
    <aside className='col-start-1 row-start-2 row-end-3 min-w-fit min-h-0'>
      <div className="h-full flex flex-col bg-surface-800 pt-2 rounded-md  bg-[#0a0909] ">
        <div className="flex flex-col justify-between items-center gap-2 min-h-0 w-full flex-1">

          <div className="flex-1 flex flex-col items-center gap-2 overflow-y-auto scrollbar-hide">
            <div className="w-48 bg-surface-800 rounded-md" >
              {/*pode remover esse elemento para reutilização: */}
             
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}