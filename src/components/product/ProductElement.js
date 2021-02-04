import styled from 'styled-components';


export const Wrapper =  styled.div`
   /*  max-width: 1100px; */
   /*  margin: 50px auto 10px auto; */
    width: 100%;
    background: #fff;
     margin-bottom: 100px; 
    /* border-bottom: 1px solid #291e6a; */
`;

export const InfoWrap = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;

        @media (max-width: 568px) {
            flex-direction:  column;
        }
`;

export const InfoId = styled.div`
    font-size: 20px;
    margin-top: 30px;

    @media (max-width: 568px) {
        font-size: 15px;
    }
`;

export const BlocInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const InfoTitle = styled.h3`
    font-size: 26px;

`;

export const BlockPrice = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Price = styled.div`
    font-size:${({discount}) => (discount ? '30px' : '40px')};
    margin-top: 30px;
    color: ${({discount}) => (discount ? '#7c7c7c' : '#000')};
    text-decoration: ${({discount}) => (discount ? 'line-through' : 'none')};

`;

export const PriceDiscount = styled.div`
    font-size: 40px;
    color: #ff1313;
`;

export const Discount = styled.span`
    position: absolute;
    background: red;
    top: 25px;
    right: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 25px;
    height: 40px;
    width: 70px;
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BtnBuy = styled.button`
    width: 250px;
    height: 50px;
    border-radius: 40px;
    background: #291e6a;
    border: none;
    outline: none;
    color: #fff;
    font-size: 25px;
    cursor: pointer;
    margin-top: 20px;
`;

export const BlockImage = styled.div`
    height: 300px;
    width: 300px;
    position: relative;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
`;

export const  Descr = styled.p`
    font-size: 30px;
    line-height: 30px;
`;