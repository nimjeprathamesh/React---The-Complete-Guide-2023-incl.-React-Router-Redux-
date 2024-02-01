import { RouterProvider } from 'react-router-dom';
import router from './components/Router.jsx';
import { DestinationProvider } from './store/DestinationContext.jsx';
import { PackageProvider } from './store/PackagesContext.jsx';

function App() {
  return (
    <PackageProvider>
      <DestinationProvider>
        <RouterProvider router={router} />
      </DestinationProvider>
    </PackageProvider>
  );
}

export default App;
