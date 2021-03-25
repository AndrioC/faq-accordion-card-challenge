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
         margin-right: 40px;
      }

      img.img-bottom{
         margin-top: -90px;
         margin-right: 20px;
      }

   }

`;

export const FaqSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    h1 {

    }

`;

export const QuestionsSection = styled.div`
    margin-top: 39px;

`;