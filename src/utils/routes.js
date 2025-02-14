import { Suspense } from "react";


//pages
import MainLayout from "../components/MainLayout/MainLayout";
import { ROUTES } from "./constants/constants";
import Dashboard from "../components/features/Dashboard/Dashboard";


const AppRoutes = [
  {
    index: 1,
    path: ROUTES.ROOT_PATH,
    Component: () => (
      <Suspense>
        <MainLayout
          isSidebar={true}
          isTopNavigation={true}
          childComponent={<Dashboard />}
        />
      </Suspense>
    ),
  },

];

export default AppRoutes;
