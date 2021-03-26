import React, { useState } from 'react'


import FaqQuestion from '../../components/FaqQuestion'
import { 
    Container,
    Content,
    ImagesContent,
    FaqSection, 
    QuestionsSection
} from './styles'

/* Image for mobile */
import imgBottomMobile from '../../assets/images/bg-pattern-mobile.svg'
import imgWomanMobile from '../../assets/images/illustration-woman-online-mobile.svg'

/* Image for desktop */
import imgBoxDesktop from '../../assets/images/illustration-box-desktop.svg'
import imgBottomDesktop from '../../assets/images/bg-pattern-desktop.svg'
import imgWomanDesktop from '../../assets/images/illustration-woman-online-desktop.svg'

const Home:React.FC = () => {

    return (
        <Container>
            <Content>
                <ImagesContent>
                    <img src={imgWomanMobile} alt="" className="img-woman-mobile"/>
                    <img src={imgBottomMobile} alt="" className="img-bottom-mobile"/>
                    
                    <img src={imgWomanDesktop} alt="" className="img-woman-desktop"/>
                    <img src={imgBoxDesktop} alt="" className="img-box-desktop"/>
                    <img src={imgBottomDesktop} alt="" className="img-bottom-desktop"/>
                </ImagesContent>
                <FaqSection>
                    <h1>FAQ</h1>

                    <QuestionsSection>
                        <FaqQuestion />
                    </QuestionsSection>
                </FaqSection>
            </Content>
        </Container>
    )
}

export default Home