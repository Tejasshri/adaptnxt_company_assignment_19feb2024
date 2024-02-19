import { createContext } from "react";

const ReactContext = createContext({
  theme: "light",
  changeTheme: () => {},
});

export default ReactContext;
