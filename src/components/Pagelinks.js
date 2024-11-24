import { pageLinks } from "../data";
import PageLink from "./PageLink";

const Pagelinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id='nav-links'>
      {pageLinks.map((Pagelink) => {
        return (
          <PageLink key={Pagelink.id} {...Pagelink} itemClass={itemClass} />
        );
      })}
    </ul>
  );
};
export default Pagelinks;
