import Buttom from "../components/Buttom";
import Logo from "../components/Logo";
import NavbarItem from "../components/NavbarItem";

export default function index() {
  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className=" flex bg-blue-500 items-center">
            <div className=" w-3/12 uppercase text-2xl text-white font-semibold">
              <Logo />
            </div>
            <div className=" w-6/12">
              <ul className="flex justify-center space-x-10 py-20">
                <NavbarItem>Home</NavbarItem>
                <NavbarItem>Skills</NavbarItem>
                <NavbarItem>Project</NavbarItem>
                <NavbarItem>Contact</NavbarItem>
              </ul>
              {/* <Nav/> */}
            </div>
            <div className="w-3/12">
              <Buttom>Donwload</Buttom>
            </div>
          </div>
        </div>
        <div className=" text-center">
          <h1>
            Saya seorang front-end engineer, dan juga UI
            designer
          </h1>
        </div>
      </div>
    </>
  );
}
