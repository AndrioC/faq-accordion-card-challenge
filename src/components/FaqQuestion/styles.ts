import styled from 'styled-components'

export const Container = styled.div`
    
    & + div {
        margin-top: 36px;
    }


    @media (max-width: 900px){
        span {
            display: block;
            font-size: 13px;
            color: #4B4C5F;
            position: relative;
            max-width: 270px;
            cursor: pointer;

            img {
                position: absolute;
                right: -20px;
                cursor: pointer;
                top: 2px;
                transition: filter 0.2s;

                :hover{
                    filter: brightness(0.72);
                }
            }

            ::after{
                content: '';
                height: 1px;
                border-radius: 3px 3px 0 0;
                width: 110%;
                position: absolute;
                top: 24px;
                left: 0px;
                background: #E8E8EA;  
            }
        }
    }
`;