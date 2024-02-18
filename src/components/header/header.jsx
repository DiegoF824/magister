import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustonLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 gap-5 bg-black text-white">
      <h1>Magister</h1>

      <nav>
        <ul className="flex gap-5">
          <CustonLink to="/magister/">Home</CustonLink>
          <CustonLink to="/magister/personagens">Personagens</CustonLink>
          <CustonLink to="/magister/reinos">Reinos</CustonLink>
          <CustonLink to="/magister/magia">Magia</CustonLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
