import React from 'react';
import styled from 'styled-components'

const ContainerCardGrande = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`;
const ContainerCardGrandeImagem = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`;
const ContainerCardGrandeNome = styled.h4 `
    margin-bottom: 15px;
`;
const ContainerCardGrandeDiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`;

function CardGrande(props) {
    return (
        <ContainerCardGrande>
            <ContainerCardGrandeImagem img src={ props.imagem } />
            <ContainerCardGrandeDiv>
                <ContainerCardGrandeNome>
                <h4>{ props.nome }</h4>
                </ContainerCardGrandeNome>
                <p>{ props.descricao }</p>
            </ContainerCardGrandeDiv>
        </ContainerCardGrande>
    )
}

export default CardGrande;