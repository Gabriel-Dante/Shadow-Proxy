// import logo from "";
import logo from "../../assets/shadow_proxy_text_color.svg";

export default function Header() {
  return (
    <>
      <div className="c-logo col-start-1 row-start-1 min-h-[3rem] min-w-fit">
        <header className="h-12 flex items-center px-2 text-center">
          <img
            src={logo}
            alt="Shadow Proxy Logo"
            className="w-full h-full object-cover object-[50%_40%]"
          />
          {/* <h1 className=" w-full text-center text-green-500 text-xl">Shadow</h1> */}
        </header>
      </div>
      <div className='col-start-2 row-start-1 min-h-[3rem] min-w-0'>

      </div>

    </>

  );
}