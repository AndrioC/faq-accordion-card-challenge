import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  
  @media (max-width: 920px){
      display: flex;
      align-items: center;
      justify-content: center;
  }

`;

export const Content = styled.div`
   display: flex;
   align-items: center;
   flex-direction: row;
   background: #FFF;
   border-radius: 23px;

   width: 920px;
   height: 510px;
   overflow: hidden;

  
   img.img-woman-desktop{
   }

   img.img-box-desktop{
       margin-left: -450px;
       margin-top: 160px;
   }

   img.img-bottom-desktop{
       margin-left: -700px;
       margin-top: -150px;
   }

   img.img-woman-mobile{
    display: none;
   }

   img.img-bottom-mobile{
    display: none;
   }

   /* Mobile First */
   @media (max-width: 920px){
      overflow: visible;
      width: 327px;
      height: 535px;
      margin-top: 148px;
      flex-direction: column;

      img.img-box-desktop{
        display: none;
      }

      img.img-woman-desktop{
        display: none;
      }

      img.img-bottom-desktop{
       display: none;
      }  

      img.img-woman-mobile{
        display: block;
        margin-top: -108px;
        margin-right: 40px;
      }

      img.img-bottom-mobile{
        display: block;
        margin-top: -90px;
        margin-right: 20px;
      }

   }

`;

export const ImagesContent = styled.div`
    display: flex;
    align-items: center;
    margin-left: -100px;
    overflow: hidden;

    @media (max-width: 920px){
        display: flex;
        flex-direction: column;
        margin-left: 0px;
        overflow: visible;
    }

`;

export const FaqSection = styled.div`
    display: flex;
    flex-direction: column;
    
    margin-left: 180px;
    padding-top: 45px;

    h1 {
        margin-bottom: 30px;
    }

    @media (max-width: 920px){
        margin-top: 30px;
        margin-left: 0px;
    }

`;

export const QuestionsSection = styled.div`

    @media (max-width: 920px){
        margin-top: 39px;
    }
`;