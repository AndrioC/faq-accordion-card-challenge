import React from 'react'
import { 
    Container 
} from './styles'

import iconArrow from '../../assets/images/icon-arrow-down.svg'

interface FaqQuestionProps{
    title: string;
    description: string;
    selected: boolean;
}



const FaqQuestion:React.FC<FaqQuestionProps> = ({title, description, selected}) => {
    return (
        <Container>
            <span>{title} <img src={iconArrow} alt="icon-arrow"/></span>
        </Container>
    )
}

export default FaqQuestion