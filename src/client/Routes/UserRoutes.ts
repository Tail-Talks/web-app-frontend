import { UserRoutes } from "../../types/types";
import SignUp from "../../pages/SignUp/SignUp";

export const userRoutes: UserRoutes[] = [
  {
    id: 2,
    path: `/signup`,
    Component: SignUp,
    title: "SignUp",
  },
];
