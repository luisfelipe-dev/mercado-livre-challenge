import 'styled-components';
import { theme } from 'styles/theme';

declare module 'styled-components' {
  export type DefaultTheme = theme;
}

// interferĂȘncia de tipos
type theme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
