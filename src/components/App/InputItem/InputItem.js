import React from 'react';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from '@material-ui/core/styles';


const InputItem = ({theme}) => (<div>
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

export default InputItem;
