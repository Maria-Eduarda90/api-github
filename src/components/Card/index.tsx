import { useGithub } from '../../hooks/useGithub';
import { Container, ContainerImg, Img, Name, Username, Bio, NumberContainer, ContainerNumber, ConatainerBackgorund } from './styles';

export function Card(){
    const { userData } = useGithub();

    return(
        <Container>
            <ConatainerBackgorund>
                <ContainerImg>
                    <Img src={userData.avatar_url} alt={userData.name}/>
                </ContainerImg>
                <Name>{userData.name}</Name>
                <Username>{userData.login}</Username>
                <Bio>{userData.bio}</Bio>
                <ContainerNumber>
                    <NumberContainer>
                        <h1>{userData.public_repos}</h1>
                        <h2>repositórios</h2>
                    </NumberContainer>

                    <NumberContainer>
                        <h1>{userData.followers}</h1>
                        <h2>Seguidores</h2>
                    </NumberContainer>

                    <NumberContainer>
                        <h1>{userData.following}</h1>
                        <h2>Seguindo</h2>
                    </NumberContainer>
                </ContainerNumber>
            </ConatainerBackgorund>
        </Container>
    );
}