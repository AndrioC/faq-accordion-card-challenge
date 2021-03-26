import styled from 'styled-components'


interface ContainerProps {
    isSelected: boolean;
    idItem: number;
    indexItem: number;
}

export const Container = styled.div<ContainerProps>`
    
    & + div {
        margin-top: 36px;
    }

    span {
            display: block;
            font-size: 13px;
            color: #4B4C5F;
            position: relative;
            max-width: 500px;
            font-weight: ${props => props.isSelected && (props.idItem === props.indexItem + 1) ? 'bold' : 'normal'};
            cursor: pointer;

            button {
                border: none;
                img {
                    position: absolute;
                    right: -72px;
                    cursor: pointer;
                    top: 2px;
                    transition: filter 0.2s;
                    transition: transform .3s;
                    transform: ${props => props.isSelected && (props.idItem === props.indexItem + 1) ? 'rotate(180deg)' : 'rotate(0deg)'};

                    :hover{
                        filter: brightness(0.72);
                    }
                }
            }

            ::after{
                content: '';
                height: 1px;
                border-radius: 3px 3px 0 0;
                width: 132%;
                position: absolute;
                transition: top 0.2s;
                top: ${props => props.isSelected && (props.idItem === props.indexItem + 1) ? '60' : '24'}px;
                left: 0px;
                background: #E8E8EA;  
            }
        }


        p {
            display: ${props => props.isSelected && (props.idItem === props.indexItem + 1) ? 'block' : 'none'};
            font-size: 12px;
            color: #787887;
            margin-top: 12px;
            line-height: 18px;
            margin-left: 6px;
        }

    @media (max-width: 920px){
        span {

            button {
                img {
                    right: -20px;
                }
            }

            ::after{
                width: 110%;
            }
        }
    }
`;