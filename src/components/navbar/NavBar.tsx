import Title from "../title/Title";
import Hamburger from "./Hamburger";
import NavLinks from "./NavLinks";

export default function NavBar() {
  return (
    <nav className="gap-4 capitalize bg-slate-700 flex justify-between items-center px-2 py-4">
      <Title />
      <div className="flex gap-2">
        <NavLinks className="hidden sm:[display:inline] gap-10" />
        <Hamburger className="sm:hidden" />
      </div>
    </nav>
  );
}
