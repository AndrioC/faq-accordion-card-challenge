import React, { useState } from 'react'


import FaqQuestion from '../../components/FaqQuestion'
import { 
    Container,
    Content,
    FaqSection, 
    QuestionsSection
} from './styles'

import imgBottom from '../../assets/images/bg-pattern-mobile.svg'
import imgWoman from '../../assets/images/illustration-woman-online-mobile.svg'

const Home:React.FC = () => {

    const [click, setClick] = useState(false)

    function handleClick(){
        setClick(!click)
    }

    return (
        <Container>
            <Content>
                <img src={imgWoman} alt="" className="img-woman"/>
                <img src={imgBottom} alt="" className="img-bottom"/>

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