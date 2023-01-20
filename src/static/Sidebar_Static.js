import CreateNewProduct from "../admin-sidebar-components/create-product/CreateNewProduct";
import AllProduct from "../admin-sidebar-components/all-products/AllProducts";
export const SIDEBAR_STATIC_DATA = [
  {
    id: 0,
    sidebarTitle: "Dashboard",
    icon: "",
    route: "dashboard",
    component: "",
  },
  {
    id: 1,
    sidebarTitle: "New product",
    icon: "",
    route: "newproduct",
    component: <CreateNewProduct />,
  },
  {
    id: 2,
    sidebarTitle: "All products",
    icon: "",
    route: "allproducts",
    component: <AllProduct />,
  },

  {
    id: 3,
    sidebarTitle: "All products",
    icon: "",
    route: "dashboard",
    component: "",
  },
  {
    id: 4,
    sidebarTitle: "All products",
    icon: "",
    route: "dashboard",
    component: "",
  },
];
