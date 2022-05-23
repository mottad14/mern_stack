import './App.css';
import { Paper, TextField } from '@mui/material';
import { Button, FormControl, RadioGroup, Radio, FormControlLabel, Typography, Rating, InputLabel,
    OutlinedInput } from '@mui/material';
const styles = {
    paper: {
        width: "20rem", padding: "1rem"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}

function App() {
  return (
    <div className="App">
      <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      
      <Paper elevation={3} style={styles.paper}>
            <h2>Login Form</h2>
            <form>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Username</InputLabel>
                    <OutlinedInput type="text"/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>E-mail</InputLabel>
                    <OutlinedInput type="email"/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput type="password"/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput type="password"/>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">
                    Register
                </Button>
            </form>
        </Paper>

    </div>
  );
}

export default App;
