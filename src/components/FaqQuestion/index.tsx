import React, { useState } from 'react'
import { 
    Container 
} from './styles'

import iconArrow from '../../assets/images/icon-arrow-down.svg'

import data from '../../assets/data/faqData'

const FaqQuestion:React.FC = () => {
    const [click, setClick] = useState(false)

    const [selectedId, setSelectedId] = useState(0)

    const handleClick = (itemId: number) => {
        setSelectedId(itemId)
        setClick(!click)
    }

    return (
        <>
        {data.map((item, index) => (
            <Container isSelected={click} idItem={selectedId} indexItem={index}>
                
                <span onClick={() => handleClick(item.id)}>{item.title} 
                    <button onClick={() => handleClick(item.id)}>
                        <img src={iconArrow} alt="icon-arrow"/>
                    </button>
                </span>
                <p>Algo aqui</p>
            </Container>
        ))}
        
        </>
    )
}

export default FaqQuestion