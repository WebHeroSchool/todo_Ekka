import React from 'react';
import TextField from '@material-ui/core/TextField';
import { ThemeProvider } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';

class InputItem extends React.Component {
    state = {
        inputValue: ''
    };

    onButtonClick = () => {
        this.props.onClickAdd(this.state.inputValue);
        this.setState({
            inputValue: ''
        });
    }
    
    render() { 
        return (<ThemeProvider theme={this.props.theme}>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                <TextField 
                    id="outlined-basic" 
                    label={ this.props.error ? "Введи что-нибудь" : "Добавить новое дело" }
                    color={ this.props.error ? "secondary" : "primary" }
                    variant="outlined"
                    size="small"
                    value={this.state.inputValue}
                    onChange={ e => this.setState({ inputValue: e.target.value.toUpperCase() }) }
                    onKeyDown={ e => { if(e.keyCode === 13) this.onButtonClick() } }
                />
                <Fab 
                    color="primary" 
                    aria-label="add" 
                    size="small"
                    onClick={() => this.onButtonClick()}
                >
                    <AddIcon />
                </Fab>
            </Grid>
        </ThemeProvider>);
    }
}

export default InputItem;
