// import { StatusBar } from 'expo-status-bar';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import initializeStore from "./src/store"

const store = initializeStore()

export default function App() {
  return (
    <Provider store={store}> 
      <Navigation/>
     </Provider> 
  );
}

