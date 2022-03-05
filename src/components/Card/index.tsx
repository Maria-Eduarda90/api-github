import { useContext } from 'react';
import { GithubContext } from '../../context/github';
import { Container, ContainerImg, Img, Name, Username, Bio, NumberContainer, ContainerNumber, ConatainerBackgorund } from './styles';

export function Card(){
    const context = useContext(GithubContext);

    return(
        <Container>
            <ConatainerBackgorund>
                <ContainerImg>
                    <Img src={context.userData.avatar_url} alt={context.userData.name}/>
                </ContainerImg>
                <Name>{context.userData.name}</Name>
                <Username>{context.userData.login}</Username>
                <Bio>{context.userData.bio}</Bio>
                <ContainerNumber>
                    <NumberContainer>
                        <h1>{context.userData.public_repos}</h1>
                        <h2>repositórios</h2>
                    </NumberContainer>

                    <NumberContainer>
                        <h1>{context.userData.followers}</h1>
                        <h2>Seguidores</h2>
                    </NumberContainer>

                    <NumberContainer>
                        <h1>{context.userData.following}</h1>
                        <h2>Seguindo</h2>
                    </NumberContainer>
                </ContainerNumber>
            </ConatainerBackgorund>
        </Container>
    );
}