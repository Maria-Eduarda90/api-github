import { useState } from 'react';
import { useGithub } from '../../hooks/useGithub';
import { api } from '../../services/api';

import { Button, Container, Input } from './styles';

export function SearchButton(){
    const { setUserData } = useGithub();
    const [ searchGithub, setSearchGithub ] = useState<string>('');

    async function handleGithubData(){
        const response = await api.get(`/${searchGithub}`)
        setUserData(response.data);
        console.log(response.data);
    }

    return(
        <Container>
            <Input value={searchGithub} onChange={(e) => setSearchGithub(e.target.value)}/>
            <Button onClick={handleGithubData}>search</Button>
        </Container>
    );
}