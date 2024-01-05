
// import {Lint} from 'react-router-dom'
import {Component} from 'react'
import {ImageContainer,DescriptionContainer,Role,Name,Description,AboutBtn,AboutContainer,ImgLady,FormHeading,HorizontalLine,InputContainer,TotalAboutContainer, FormContainer,InputElement,LabelInput, TextAreaElement, AddBtn,FooterImg} from './styledComponents'

class About extends Component {
    state = {projectName: "", projectLink: "", description: ""}

    render() {
        return(
            <TotalAboutContainer>
                <AboutContainer>
                    <DescriptionContainer>
                        <Role>UI/UX DESIGNER</Role>
                        <Name>Hello, my name <br />is Madelyn Torff</Name>
                        <Description>Short text with details about you, what you do or your professional career.You can add more information on the about page</Description>
                        <>
                            <AboutBtn type="button" outline={true}>Projects</AboutBtn>
                            <AboutBtn type="button" outline={false}>LinkedIn</AboutBtn>
                        </>
                    </DescriptionContainer>
                    <ImageContainer>
                        <ImgLady src="https://res.cloudinary.com/dj6c4lrt9/image/upload/v1704461145/pexels-artem-beliaikin-1832323-removebg-preview_ajodwi.png" alt="profile" />
                    </ImageContainer>
                </AboutContainer>
                <FormContainer>
                    <div>
                        <FormHeading>Add Project</FormHeading>
                        <HorizontalLine />
                    </div>
                    <InputContainer>
                        <LabelInput htmlFor="name">Project Name</LabelInput>
                        <InputElement id="name" />
                    </InputContainer>
                    <InputContainer>
                        <LabelInput htmlFor="link">Project Link</LabelInput>
                        <InputElement id="link" />
                    </InputContainer>
                    <InputContainer>
                        <LabelInput htmlFor="descriptuon">Description</LabelInput>
                        <TextAreaElement rows={5} cols={8} id="description" />
                    </InputContainer>
                    <AddBtn type="button">Add</AddBtn>
                </FormContainer>
                <div>
                    <FooterImg src="https://res.cloudinary.com/dj6c4lrt9/image/upload/v1704475732/Vector_e1wyfl.png" alt="footer" />
                </div>
            </TotalAboutContainer> 
        )
    }
}

export default About
