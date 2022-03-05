import { createContext, ReactNode, useState } from 'react';

type UserType = {
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
    followers: number;
    following: number;
    public_repos: number;
}

type testeProps = {
    userData: UserType;
    setUserData: (value: object) => void;
}

export const GithubContext = createContext({} as testeProps);

type GithubContextType = {
    children: ReactNode;
}

export function GithubtProvider(props: GithubContextType){
     const [userData, setUserData] = useState<any>({});
    
    return(
        <GithubContext.Provider value={{userData, setUserData}}>
            {props.children}
        </GithubContext.Provider>
    );
}