import CustomTabs from './CustomTabs';
import './styles.css';

function RandomComponent() {
  return <h1>Some random content </h1>;
}

const TabTest = () => {
  const tabs = [
    {
      label: 'Tab 1',
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: 'Tab 2',
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: 'Tab 3',
      content: <RandomComponent />,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <CustomTabs tabsContent={tabs} onChange={handleChange} />;
};

export default TabTest;
