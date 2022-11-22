import React from "react";
import styled from "styled-components";

const ContainerArmazenarDados = styled.div`
   display: flex;
   border: 1px solid black;
   align-items: center
`;

const ContainerArmazenarDadosImg = styled.img `
    border-radius: 50px;
    width: 100px;
    padding: 15px 30px;
    margin: 0;
    justify-content: space-around;
`;


function ArmazenarDados(props) {
    return (
    <ContainerArmazenarDados>
           <ContainerArmazenarDadosImg img src={props.imagem}/>
            <h4>{props.email}</h4>
            <h4>{props.endereco}</h4>
    </ContainerArmazenarDados>

    )
}

export default ArmazenarDados