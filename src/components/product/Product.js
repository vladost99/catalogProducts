import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs'; 
import Tab from '@material-ui/core/Tab';
import {InfoTitle,Descr,BtnWrap, Wrapper,BlockPrice,Discount, BlocInfo,Price,PriceDiscount, InfoId, BtnBuy, BlockImage,Img, InfoWrap} from './ProductElement';
import {AiOutlineShoppingCart} from "react-icons/ai";
import YouTube from 'react-youtube';
import {YOUTUBE_KEY} from '../../Environment/Youtube';
import searchYoutube from 'youtube-api-v3-search';
import {a11yProps, TabPanel, useStyles} from './TabFunc';



function Product(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [movieUrl, setMovieUrl] = useState('');
  const opts = {
    height: '590',
    width: '100%',
    playerVars: {
        autoplay: 1
    } 
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  useEffect( async () => {
    const options = {
      q: props.title,
      type: 'video',
      part: 'snippet'
  };
    let result = await searchYoutube(YOUTUBE_KEY,options);
  /*  console.log(result); */
  setMovieUrl(result.items[0].id.videoId); 
  }, [movieUrl]);
  

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
      <TabPanel   className={classes.tab} value={value} index={2}>
      <YouTube videoId={movieUrl} opts={opts}/>
      </TabPanel>
    </Wrapper>
  );
}

export default Product; 