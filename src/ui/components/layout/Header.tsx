// import logo from "../../assets/shadow_proxy_text_color.svg";

export default function Header() {
  return (
    <>
      <div className="c-logo col-start-1 row-start-1 min-h-[3rem] min-w-fit">
        <header className="h-12 flex items-center justify-center px-3 select-none">
          <h1 className="text-lg font-semibold tracking-wide bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-200 bg-clip-text text-transparent drop-shadow-sm">
            SHADOW PROXY
          </h1>
        </header>
        <div className="absolute right-0 top-0 h-full -z-40 w-1/4 bg-gradient-to-l from-emerald-400/20 via-emerald-400/5 to-transparent pointer-events-none" />
      </div>
      <div className='col-start-2 row-start-1 min-h-[3rem] min-w-0 '>

      </div>

    </>

  );
}