import React from "react";
import {useParams,Link} from "react-router-dom";
import members from "../../components/Members";

const Costumer = () => {
const params = useParams();
const member = members.find((member) => {
    return member.id === params.id
})

return (<>
    <h1>Detalhes do cliente</h1>
    Nome: {member && member.name}
    <Link to ="/">Voltar</Link>
</>)
};

export default Costumer;