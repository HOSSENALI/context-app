import logo from './logo.svg';
import './App.css';
import { ContextProvider } from './context/context';
import User from './User/User';
import UserForm from './UserForm/UserForm';

function App() {
  return (
    <ContextProvider>
      
      <UserForm/>
      <User />
    </ContextProvider>
  );
}

export default App;
