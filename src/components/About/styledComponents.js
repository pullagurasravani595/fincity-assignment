import styled from 'styled-components'

export const ImageContainer = styled.div`
background-image: url(https://res.cloudinary.com/dj6c4lrt9/image/upload/v1704461204/yellow-bg_ukbmfy.png);
background-size: cover;
width: 360px;
height: 360px;
`

export const DescriptionContainer = styled.div`
width: 40%;
padding: 40px;
`

export const Role = styled.p`
font-family: Nunito;
font-size: 26px;
font-weight: bold;
line-height: 27px;
letter-spacing: 0em;
text-align: left;
color: #FDC435;
`

export const Name = styled.h1`
font-family: Playfair Display;
font-size: 34px;
font-weight: bold;
letter-spacing: 0em;
text-align: left;
color: #333333;
`

export const Description = styled.p`
font-family: Nunito;
font-size: 20px;
font-weight: 400;
line-height: 36px;
letter-spacing: 0em;
text-align: left;
color: #828282;
`

export const AboutBtn = styled.button`
width: Hug (115px);
height: Hug (43px);
padding: 8px, 24px, 8px, 24px;
border-radius: 8px;
background-color: ${props => props.outline ? "#FDC435" : "transparent"};
font-family: Roboto;
font-size: 18px;
font-weight: 500;
line-height: 27px;
letter-spacing: 0em;
text-align: left;
color: #25282B;
border: ${props => props.outline ? "none" : "1px solid #25282B"};
margin-right: 8px;
`

export const AboutContainer = styled.div`
display:flex;
justify-content: space-between;
`

export const ImgLady = styled.img`
width: 60%;
height: 60%;
margin-left: 95px;
margin-top: 75px;
`

export const FormHeading = styled.h2`
font-family: Playfair Display;
font-size: 24px;
font-weight: bold;
letter-spacing: 0em;
text-align: center;
color: #25282B;
`
export const HorizontalLine = styled.hr`
background: #FDC435;
height: 2px;
width: 26%;
`

export const InputContainer = styled.div`
display: flex;
flex-direction: column;
width: 70%;
margin-bottom: 5px;
`

export const TotalAboutContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
min-height: 100vh;
width: 100%;
`

export const FormContainer = styled.form`
display: flex;
flex-direction: column;
align-self: center;
width: 50%;
height: 200px;
`

export const InputElement = styled.input`
border: 1.5px solid #E8ECF4;
width: 400px;
height: 30px;
border-radius: 8px;
margin-top: 6px;
`

export const LabelInput = styled.label`
font-family: Nunito;
font-size: 18px;
font-weight: 600;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
color: #25282B;
`

export const TextAreaElement = styled.textarea`
width: 400px;
height: 160px;
border-radius: 8px;
border: 1.5px solid #E8ECF4;
`

export const AddBtn = styled.button`
width: 45px;
height: 45px;
background: #FDC435;
line-height: 2;
border-width: 0px;
margin-left: 320px;
margin-top: 5px;
margin-bottom: 4px;
`
export const FooterImg = styled.img`
margin-top: 230px;
width: 100%;
`