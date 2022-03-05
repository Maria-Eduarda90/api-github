import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { SearchButton } from "../components/SearchButton";

export function Home(){
    return(
        <>
            <Header/>
            <SearchButton/>
            <Card/>
        </>
    );
}