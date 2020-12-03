import React from "react";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";

const theme = createMuiTheme(
  /**
   * @see https://material-ui.com/customization/themes/#theme-configuration-variables
   */
  {
    // direction: "rtl",
    typography: {
      fontFamily: ["Mont", "sans-serif"].join(","),
      fontWeightBold: 800,
      fontWeightMedium: 600,
      fontWeightRegular: 400,
      fontWeightLight: 300,
      button: {
        fontSize: 12,
        fontWeight: 600,
        textTransform: "none"
      }
    },

    palette: {
      primary: {
        main: "#C38B54",
      },
      text:{
          primary: "#FFFFF"
      }
    },

    /**
     * @see https://material-ui.com/customization/globals/#default-props
     */
    
  }
);

export function MaterialThemeProvider(props) {
  const { children } = props;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}