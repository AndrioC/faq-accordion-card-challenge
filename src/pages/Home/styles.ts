import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
  
  @media (max-width: 900px){
      display: flex;
      align-items: center;
      justify-content: center;
  }

`;

export const Content = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
   background: #FFF;
   width: 327px;
   height: 535px;
   border-radius: 23px;
   margin-top: 148px;

   /* Mobile First */
   @media (max-width: 900px){

      img.img-woman{
         margin-top: -108px;
      }

      img.img-bottom{
         margin-top: -90px;
         margin-left: 30px;
      }

   }

`;