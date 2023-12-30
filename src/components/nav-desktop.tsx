import { routes } from "../routes";

export const NavDesktop = () => {
  return (
    <div>
      <ul className="hidden lg:flex lg:items-center gap-5 text-sm"> desktop</ul>
      {routes.map((route) => {
        const { Icon, href, title } = route;
        return (
          <li key={title}>
            <a href={href}>
              {" "}
              <Icon /> {title}
            </a>
          </li>
        );
      })}
    </div>
  );
};
