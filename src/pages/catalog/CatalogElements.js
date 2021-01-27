import styled from 'styled-components';

export const Section = styled.section`
    padding: 80px 0;
    max-width: 1100px;
    min-height: 100vh;
    margin: 0 auto;
    position: relative;

`;

export const CatalogList = styled.div`
    display: grid;
    grid-gap: 10px; 
    grid-template-columns: repeat(3,33%);
 
    @media  (max-width: 867px) {
        grid-template-columns: repeat(2, 50%);
    }

      @media (max-width: 568px) {
        grid-template-columns:  100%;
      }  
`;

