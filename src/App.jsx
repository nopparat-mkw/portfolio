import { useCallback, useState } from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Profile from "./components/Profile";
import Skill from "./components/Skill";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTab = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <Profile />;
      case 1:
        return <Skill />;
      case 2:
        return <WorkExperience />;
      case 3:
        return <Education />;
      default:
        return <Profile />;
    }
  };

  return (
    <Container>
      <Header activeTab={activeTab} changeTab={changeTab} />

      {renderContent()}
    </Container>
  );
};

const Container = styled.div`
  max-width: 1040px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  font-size: 1.05em;
`;


export default App;
