import React from 'react';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider,createMuiTheme } from '@material-ui/core/styles';


const InputItem = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#6c5ce7'
      }
    }
  });

  return (<div>
    <ThemeProvider theme={theme}>
        <TextField 
            id="outlined-basic" 
            label="Добавить новое дело" 
            variant="outlined"
            size="small"
            fullWidth
        />
    </ThemeProvider>
</div>);
}

export default InputItem;
