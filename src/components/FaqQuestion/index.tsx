import React from 'react'
import { 
    Container 
} from './styles'

import iconArrow from '../../assets/images/icon-arrow-down.svg'

import data from '../../assets/data/faqData'

const FaqQuestion:React.FC = () => {
    return (
        <>
        {data.map((item) => (
            <Container>
                <span>{item.title} <img src={iconArrow} alt="icon-arrow"/></span>
            </Container>
        ))}
        
        </>
    )
}

export default FaqQuestion