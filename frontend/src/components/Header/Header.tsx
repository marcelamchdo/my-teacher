import { HeaderDocker, Logo } from "./Header.style";

const Header = () => {
    return (
        <div>
            <HeaderDocker>
                <div>
                    <Logo src="images/myteacher.png"/>
                </div>

                <p>Encontre o professor perfeito!</p>
            </HeaderDocker>
        </div> 
    )
}

export default Header;