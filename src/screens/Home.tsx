
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { SearchButton } from "../components/SearchButton";
import { useGithub } from "../hooks/useGithub";

export function Home(){
    const { userData } = useGithub();

    return(
        <>
            <Header/>
            <SearchButton/>
            {userData.name ? <Card/> : undefined}
        </>
    );
}