import "./styles.css";
import iconGitHub from "./gitHub-black.svg";

const BtnGitHub = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={iconGitHub} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
