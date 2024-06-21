import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="  p-10 flex flex-col">
      <SearchInput />
      <div className="divider px-1"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};
export default Sidebar;
