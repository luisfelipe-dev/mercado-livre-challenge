import React from 'react';

import Loading from '../components/Loading';
import { LoadingProvider } from './loadingContext';

// import colors from '../styles/colors';
// import sizes from '../styles/sizes';

// import { ThemeProvider } from './Themes';
// import { HeroesProvider } from './heroesContext';

// const theme = {
//   colors,
//   sizes,
// };

const AppProvider: React.FC = ({ children }) => (
  <LoadingProvider Component={Loading}>{children}</LoadingProvider>
);

export default AppProvider;
