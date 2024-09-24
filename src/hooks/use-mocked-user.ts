import type { User } from "src/types/user";

export const useMockedUser = (): User => {
  // To get the user from the authContext, you can use
  // `const { user } = useAuth();`
  return {
    id: "1",
    avatar: "/assets/avatars/zach.png",
    name: "Zach Rahimi",
    email: "zach@relight.ca",
  };
};
