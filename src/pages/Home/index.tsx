import React from 'react'
import { 
    Container,
    Content 
} from './styles'

import imgBottom from '../../assets/images/bg-pattern-mobile.svg'
import arrobaImg from '../../assets/images/illustration-box-desktop.svg'
import imgWoman from '../../assets/images/illustration-woman-online-mobile.svg'

const Home:React.FC = () => {
    return (
        <Container>
            <Content>
                <img src={imgWoman} alt="" className="img-woman"/>
                <img src={imgBottom} alt="" className="img-bottom"/>
            </Content>
        </Container>
    )
}

export default Home