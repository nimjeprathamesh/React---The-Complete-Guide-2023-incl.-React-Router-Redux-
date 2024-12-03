import { CSSReset, ColorModeProvider, ThemeProvider, theme } from "@chakra-ui/react";
import { RouterProvider } from 'react-router-dom';
import router from './components/Router.jsx';
import { DestinationProvider } from './store/DestinationContext.jsx';
import { PackageProvider } from './store/PackagesContext.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <PackageProvider>
          <DestinationProvider>
            <RouterProvider router={router} />
          </DestinationProvider>
        </PackageProvider>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
