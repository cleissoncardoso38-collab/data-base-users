import { Background } from "./styles";
import ImageUsers from '../../assets/users.png'


function TopBackground (children, ...props){


    return (

        <Background {...props}>
            <img src={ImageUsers} alt="image-users" />
        </Background>
    )
    DefaultButton.proptypes = {
        children: PropTypes.node.isRequired,
    }
}

export default TopBackground