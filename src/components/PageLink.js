const PageLink = ({ href, itemClass, text }) => {
  return (
    <li>
      <a href={href} className={itemClass}>
        {text}
      </a>
    </li>
  );
};
export default PageLink;

// So I need to do this but also do the socail links in such a way that I can pass through the class names
