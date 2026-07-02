
interface nav {
  title: string,
  path:string | null
}

export const NavbarLinks: nav[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Catalog",
    path: null,
  },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
];
