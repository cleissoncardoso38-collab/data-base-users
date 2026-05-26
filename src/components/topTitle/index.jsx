import { Title } from "./styles";



function TopTitle ({children, ...props}) {


    return (

        <Title {...props} > {children} </Title>
    )
    DefaultButton.proptypes = {
        children: PropTypes.node.isRequired,
    }
}

export default TopTitle