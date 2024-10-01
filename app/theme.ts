import {
  MD3LightTheme as DefaultTheme,
  type MD3Theme,
} from "react-native-paper";

export const theme: MD3Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};
