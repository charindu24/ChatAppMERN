import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput"


const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 py-4 px-2 flex flex-col">
        <SearchInput />
        <div className="divider px-3"></div>
            <Conversations />
             <LogoutButton />
            
        

    </div>
  );
};

export default Sidebar;

//border-r border-slate-500 py-4 flex flex-col
//Starter code
/**
 * import Conversations from "./Conversations";
import SearchInput from "./SearchInput"


const Sidebar = () => {
  return (
    <div>
        <SearchInput />
        <div className="divider px-3"></div>
            <Conversations />
            
        

    </div>
  );
};

export default Sidebar;
 */