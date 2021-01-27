import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs'; 
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {InfoTitle,Descr,BtnWrap, Wrapper,BlockPrice,Discount, BlocInfo,Price,PriceDiscount, InfoId, BtnBuy, BlockImage,Img, InfoWrap} from './ProductElement';
import {AiOutlineShoppingCart} from "react-icons/ai";

function TabPanel(props) {
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
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
    </>
  );
}



function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
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
    '& .MuiTypography-body1': {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
}

}));

function Product(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const priceDiscount = Math.round(props.price - (props.price*(props.percent/100)));

  return (
    <Wrapper>
      <AppBar position="static" className={classes.backgr}>
        <Tabs className={classes.flex} value={value} onChange={handleChange}>
          <Tab label="Главная" {...a11yProps(0)} />
          <Tab label="Описание" {...a11yProps(1)} />
          <Tab label="Видео" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel className={classes.tab} value={value} index={0}>
         <InfoWrap>
            <BlockImage>
                <Img src={props.imageUrl}/>
                {props.isDiscount && <Discount>-{props.percent}%</Discount>}
            </BlockImage>
            <BlocInfo>
                <InfoTitle>{props.title}</InfoTitle>
                <InfoId>Код: {props.id}</InfoId>
                <BlockPrice>
                    <Price discount={props.isDiscount}>{props.price}$</Price>
                    {props.isDiscount && <PriceDiscount>{priceDiscount}$</PriceDiscount>}
                </BlockPrice>
                <BtnWrap>
                <BtnBuy><AiOutlineShoppingCart style={{margin: '0 10px 0 0'}}/>Купить</BtnBuy>
                </BtnWrap>
            </BlocInfo>
         </InfoWrap>
      </TabPanel>
      <TabPanel className={classes.tab} value={value} index={1}>
        <Descr>{props.description}</Descr>
      </TabPanel>
      <TabPanel className={classes.tab} value={value} index={2}>
        видео
      </TabPanel>
    </Wrapper>
  );
}

export default Product; 