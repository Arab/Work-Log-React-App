import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import MaterialUIForm, {messageMap, validators } from 'react-material-ui-form';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 0.5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});





function Register(props) {
  const { classes } = props;
  
  const [values, setValues] = useState({login:"", email:"", password:"",password2: ""});
  const [customValidations, setCustomValidations] = useState({customValidations: {}});

 
  

  
  const handleInputChange = changes => {
    
    const {login, email, password, password2} = changes;
    
    setValues({login, email, password,password2 }) 
  }
  
 
  
validators.isLogin = value => {
    if(value.length > 3 && value.length < 20){return true} else return false
  };

validators.isPassword = value => {  
        const pattern1 = new RegExp(/[0-9]+/);
        const pattern2 = new RegExp(/[A-Z]+/);
        const pattern3 = new RegExp(/[a-z]+/);
          if(values.password!==values.password2){
            
            setCustomValidations({customValidations:{
              password2: [{ message: 'Hasła muszą być identyczne, spróbuj jeszcze raz'}],
            }})
          } else {
            
            setCustomValidations({customValidations:{}})
          }  
          if(!pattern1.test(value)) {
            return false;
          }
          if(!pattern2.test(value)) {
            return false;
          }
          if(!pattern3.test(value)) {
            return false;
          }
          if(value.length < 8 || value.length > 20) {
            return false;
          }
      
        return true
      }
        
    
validators.isPassword2 = (value) => {
        
      if(values.password!==values.password2){
        
        setCustomValidations({customValidations:{
          password2: [{ message: 'Hasła muszą być identyczne, spróbuj jeszcze raz'}],
        }})
        return false
      } else {
          setCustomValidations({customValidations:{
            
          }})
      return true;
        }
    };
    

const customMessageMap = Object.assign(messageMap, {
isLogin: 'Login musi posiadać od 3 do 20 znaków!',
isEmail: 'To nie jest adres e-mail!',
isPassword: 'Hasło musi posiadać od 8 do 20 znaków, przynajmniej 1 cyfrę i jedną dużą literę!',
isPassword2: 'Podaj ponownie poprawne hasło!',
})



  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <MaterialUIForm className={classes.form} onSubmit={props.handleRegisterSubmit} validation={{
          messageMap: customMessageMap,
          validators,
        }}
        onValuesChange={handleInputChange}
        
        validations={customValidations.customValidations}
        >
        <FormControl margin="normal" required fullWidth data-validators="isLogin" >
            <InputLabel htmlFor="login">Enter Login</InputLabel>
            <Input id="login" name="login" autoComplete="login" autoFocus value={values.login} />
          </FormControl>
          <FormControl margin="normal" required fullWidth data-validators="isPassword" >
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" id="password" autoComplete="current-password" value={values.password}/>
          </FormControl>
          <FormControl margin="normal"  fullWidth data-validators="isPassword2" >
            <InputLabel htmlFor="password2">Re-enter Password</InputLabel>
            <Input name="password2" type="password" id="password2" value={values.password2}/>
          </FormControl>
          <FormControl margin="normal" required fullWidth data-validators="isEmail" >
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" value={values.email} />
          </FormControl>
          
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Send
          </Button>
        </MaterialUIForm>


        <Typography className={classes.submit} component="h6">
                Already had account?
            </Typography>
            <Button
            onClick={props.handleOnClickLogin}
            fullWidth
            variant="contained"
            color="primary"
        
          >
            Login
          </Button>
      </Paper>
    </main>
  );
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);