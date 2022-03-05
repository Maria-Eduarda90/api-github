import { useContext, useState } from 'react';
import { GithubContext } from '../../context/github';
import { api } from '../../services/api';

import { Button, Container, Input } from './styles';

export function SearchButton(){
    const ctx = useContext(GithubContext);
    const [ searchGithub, setSearchGithub ] = useState<string>('');

    async function handleGithubData(){
        const response = await api.get(`/${searchGithub}`)
        ctx.setUserData(response.data);
        console.log(response.data);
    }

    return(
        <Container>
            <Input value={searchGithub} onChange={(e) => setSearchGithub(e.target.value)}></Input>
            <Button onClick={handleGithubData}>search</Button>
        </Container>
    );
}