import { socialLinks } from "../data";
import Sociallink from "./Sociallink";

const Sociallinkgroup = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        return <Sociallink id={link.id} {...link} itemClass={itemClass} />;
      })}
    </ul>
  );
};
export default Sociallinkgroup;
