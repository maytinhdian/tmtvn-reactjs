import { createTheme } from "@mui/material";

const tmtBlue = "#432ace";
const tmtOrange = "#FFBA60";

const theme = createTheme({
    palette:{
        mode:'light',
        common:{
            blue:`${tmtBlue}`,
            orange:`${tmtOrange}`,
        },
        primary: {
            main: `${tmtBlue}`,
            // light: will be calculated from palette.primary.main,
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
          },
          secondary: {
            main: `${tmtOrange}`,
            // light: "#F5EBFF",
            // dark: will be calculated from palette.secondary.main,
            // contrastText: "#47008F",
          },
    }
});

export default theme;
