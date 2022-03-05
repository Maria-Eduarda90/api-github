import { useContext } from "react";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { SearchButton } from "../components/SearchButton";
import { GithubContext } from "../context/github";

export function Home(){
    const context = useContext(GithubContext);

    return(
        <>
            <Header/>
            <SearchButton/>
            {context.userData.name ? <Card/> : undefined}
        </>
    );
}