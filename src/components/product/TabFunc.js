import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

export function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export   function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
        <>
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography component={'span'}>{children}</Typography>
          </Box>
        )}
      </div>
      </>
    );
  }

 export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper
    },
    backgr: {
        background: '#291e6a',
        width: '100%'
    },
    flex: {
        width: '100%', 
        '& .MuiTabs-flexContainer': {
          display: 'flex',
          justifyContent: 'space-around'
      }
    },
    tab: {
       '& .MuiBox-root ': {
        fontFamily: '"Courgette", "cursive"'
       }
    }
  
  
  }));
  