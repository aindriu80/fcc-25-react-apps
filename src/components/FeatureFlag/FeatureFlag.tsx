import ShowLightAndDarkMode from '../Accordian/Accordian';
import TickTacToe from '../TickTacToe/TickTacToe';
import RandomColourGenerator from '../RandomColour/RandomColour';
import Accordian from '../Accordian/Accordian';
import { useContext } from 'react';
import { FeatureFlagsContext } from './Context';

const FeatureFlag = () => {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);
  const componentsToRender = [
    {
      key: 'showLightAndDarkMode',
      component: <ShowLightAndDarkMode />,
    },
    {
      key: 'showTickTackToeBoard',
      component: <TickTacToe />,
    },
    {
      key: 'randomColourGenerator',
      component: <RandomColourGenerator />,
    },
    {
      key: 'showAccordian',
      component: <Accordian />,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading data! Please wait....</h1>;

  return (
    <div>
      <h1>FeatureFlag</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null,
      )}
    </div>
  );
};

export default FeatureFlag;
