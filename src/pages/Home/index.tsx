import React from 'react'


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
    return (
        <Container>
            <Content>
                <img src={imgWoman} alt="" className="img-woman"/>
                <img src={imgBottom} alt="" className="img-bottom"/>

                <FaqSection>
                    <h1>FAQ</h1>

                    <QuestionsSection>
                        <FaqQuestion 
                            title="How many team members can I invite?"
                            description="Ahhhhhhh"
                            selected={true}
                        />
                        <FaqQuestion 
                            title="What is the maximum file upload size?"
                            description="Ahhhhhhh"
                            selected={true}
                        />
                        <FaqQuestion 
                            title="How do I reset my password?"
                            description="Ahhhhhhh"
                            selected={true}
                        />
                        <FaqQuestion 
                            title="Can I cancel my subscription?"
                            description="Ahhhhhhh"
                            selected={true}
                        />
                        <FaqQuestion 
                            title="Do you provide additional support?"
                            description="Ahhhhhhh"
                            selected={true}
                        />
                    </QuestionsSection>
                </FaqSection>
            </Content>
        </Container>
    )
}

export default Home