import { createTheme } from "@mui/material/styles";
import { purple, orange, red } from "@mui/material/colors"

const primaryColor = purple[500]
const secondaryColor = orange[600]
const dangerColor = red[900]


//Theme Variable wird erzeugt 

export const theme = createTheme({
    palette: {  // Palette wird creiert  
      primary: {
        main: primaryColor,
      },
      secondary: {
      
        main: secondaryColor,
    
      },
      error: {
          main: dangerColor
      }
     
    },

  });

