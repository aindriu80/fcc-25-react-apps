import { useState } from 'react';
import MenuList from './MenuList';
import { FaMinus, FaPlus } from 'react-icons/fa';
import './style.css';

interface MenuItemProps {
  item: Array;
}
const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleChildren(getCurrentLevel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLevel]: !displayCurrentChildren[getCurrentLevel],
    });
    console.log('children:- ', displayCurrentChildren);
  }

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label] ? <FaMinus /> : <FaPlus />}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
