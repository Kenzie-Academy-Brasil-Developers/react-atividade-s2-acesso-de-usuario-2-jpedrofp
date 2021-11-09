import React from "react";
import { useParams, Link } from "react-router-dom";
import members from "../../components/Members";

const Company = () => {
    const params = useParams(); 
    const member = members.find( (memb) => {
        return memb.id = params.id
    })

    return (
        <>
        <h1>Detalhes da Empresa</h1>
        Nome da empresa: {member && member.name}
        <Link to="/">Voltar</Link>
        
        </>
    )
}
export default Company;