import members from "../../components/Members";
import {Link} from "react-router-dom"
import "./styles.css"

const Home = () => {
  return (
    <>
      <ul>
        {members.map((member) => (
          <li key="member.id">
              {member.type === "pj" ? 
              <Link to={`/company/${member.id}`}> {member.name} </Link> : 
              <Link to={`/customer/${member.id}`}> {member.name} </Link>
              }
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
