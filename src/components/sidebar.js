import SidebarItem from './sidebar-item';
import './sidebar.css';

function Sidebar(){
  return (
        
    <div className='sidebar'>
      <SidebarItem link={'TodoList'} />
      <SidebarItem link={'Todo List Projects'} />
    </div>
        
  );
}

export default Sidebar;
 