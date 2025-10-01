// import logo from "../../assets/shadow_proxy_text_color.svg";

export default function Header() {
  return (
    <>
      <div className="c-logo col-start-1 row-start-1 min-h-[3rem] min-w-fit">
        <header className="h-12 flex items-center px-2 text-center">
          {/* <img
            src={logo}
            alt="Shadow Proxy Logo"
            className="w-full h-full object-cover object-[50%_42%] "
          /> */}


          <h1 className="w-full text-center text-xl font-bold bg-gradient-to-r from-[#22c55e] to-[#86efac] bg-clip-text text-transparent ">
            SHADOW PROXY
          </h1>

        </header>
      </div>
      <div className='col-start-2 row-start-1 min-h-[3rem] min-w-0 '>
            
      </div>

    </>

  );
}