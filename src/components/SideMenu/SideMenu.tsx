import MenuList from './MenuList';

const SideMenu = ({ menus = [] }) => {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
};

export default SideMenu;
