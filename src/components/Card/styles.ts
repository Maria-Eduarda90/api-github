import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const ConatainerBackgorund = styled.div `
    background: #6ea2d0;
    width: 600px;
    padding: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
`;

export const ContainerImg = styled.div `
    padding: 4px;
    background: linear-gradient(100deg, #1397ef 0%, #4850a6 100%);
    border-radius: 50%;
    line-height: 0;
    margin-bottom: 20px;
`;

export const Img = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 50%;
`;

export const Name = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    color: white;
    font-family: 'Poppins', sans-serif;
`;

export const Username = styled.h2`
    font-family: 'Poppins', sans-serif;
    width: 100%;
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    color: white;
    padding: 5px;
`;

export const Bio = styled.p`
    width: 500px;
    margin: 10px 0;
    font-size: 20px;
    text-align: justify;
    color: white;
    line-height: 1.3;
    overflow: hidden;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 430px){
        width: 250px;
    }
`;

export const ContainerNumber = styled.div`
    height: 80px;
    padding: 0 16px;
    display: flex;
    align-items: center;
`;

export const NumberContainer = styled.div`
    width: 120px;
    height: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;

    h1 {
        font-size: 25px;
        text-align: center;
        color: #00000a;
    }

    h2 {
        font-size: 15px;
        text-align: center;
        color: #00000a;
    }
`;