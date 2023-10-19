import Home from "@pages/home";

const routes = [
  {
    id: 1,
    path: "/",
    component: Home,
  },
  {
    id: 3,
    path: "/dashboard",
    requireAuth: true,
    // component: Dashboard,
  },
];

export default routes;
