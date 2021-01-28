import Typography from '@material-ui/core/Typography'

function Footer() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'جميع الحقوق محفوظة © '}
        
         مهرجان مصراتة 
       
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  export default Footer