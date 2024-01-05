import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeaderContainer = styled.div`
height: 12vh;
width: 100%;
display: flex;
justify-content: space-between;
`

export const Heading = styled.p`
color: #25282B;
font-family: Comfortaa;
font-size: 13px;
font-weight: 700;
line-height: 32px;
letter-spacing: 0px;
text-align: left;
@media (min-width: 768px) {
    font-size: 18px;
    margin-left: 30px;
}

`

export const NavigatorContainer = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
background-color: #FDC435;
height: 100%;
width: 39.2%;
`

export const Navigator = styled(Link)`
width: Hug (69px);
height: Hug (28px);
gap: 2px;
text-decoration: none;
margin-left: 30px;
margin-right: 10px;
font-size: 13px;
@media (min-width: 768px) {
    margin-left: 50px;
    margin-right: 22px;
    font-size: 18px;
}
`