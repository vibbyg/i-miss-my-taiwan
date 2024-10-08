import 'styled-components';
import { lightTheme, darkTheme } from '@/app/theme';

type CustomTheme = typeof lightTheme;

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {
    name: string,
    colors: {
      gradientBackground: string,
      solidBackground: string,
      primary: string,
      red: string
    },
    fontSize: {
      mp: string,
      p: string,
      h3: string,
      h2: string,
      h1: string
    }
  }
}