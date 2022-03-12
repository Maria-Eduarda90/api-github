import { useContext } from "react";
import { GithubContext } from '../context/github';

export function useGithub(){
    const value = useContext(GithubContext);

    return value;
}