import { styled } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ROUTES } from './common/constants';
import Home from './screens/Home';
import AddBirthday from './screens/AddBirthday';
import Notifications from './screens/Notifications';
import Footer from './components/Footer/Footer';

const AppWrapper = styled.div`
  height: 100vh;
  min-height: 100vh; 
  margin:0;
`;

const AppContainer = styled.div`
  overflow-y: scroll;
  padding: 2rem;
  max-width: 1200px;
  height: calc(100% - 90.5px);
  margin: 0 auto;
  -ms-overflow-style: none;  //For hiding scroll bars in IE and Edge
  scrollbar-width: none; //For hiding scroll bars in Firefox

  //For hiding scrollbar in Chrome, Safari and Opera
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 501px){
    display: flex;
    justify-content: center;
  }
`;

function App() {
  const { HOME, ADD_BIRTHDAY, NOTIFICATIONS } = ROUTES;
  return (
    <AppWrapper>
      <AppContainer>
        <Routes>
          <Route path={HOME} index element={<Home />} />
          <Route path={ADD_BIRTHDAY} element={<AddBirthday />} />
          <Route path={NOTIFICATIONS} element={<Notifications />} />
        </Routes>
      </AppContainer>
      <Footer />
    </AppWrapper>
  );
}

export default App;
