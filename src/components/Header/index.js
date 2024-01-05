
import {HeaderContainer,Heading,NavigatorContainer,Navigator} from './styledComponents'

const Header = () => (
    <HeaderContainer>
        <Heading>Madelyn Torff</Heading>
        <NavigatorContainer>
            <Navigator to="/">About</Navigator>
            <Navigator to="/project">Project</Navigator>
            <Navigator to="/contact">Contact</Navigator>
        </NavigatorContainer>
    </HeaderContainer>
)

export default Header
