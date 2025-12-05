import { createContext, useContext, useState, useEffect } from "react";

export const Themecontext = createContext({
  Thememode: "light",
  dark: () => {},
  light: () => {}
});

export const Themeprovider = ({ children }) => {
  const [Thememode, setThememode] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", Thememode);

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(Thememode);
  }, [Thememode]);

  const dark = () => setThememode("dark");
  const light = () => setThememode("light");

  return (
    <Themecontext.Provider value={{ Thememode, dark, light }}>
      {children}
    </Themecontext.Provider>
  );
};

export default function useTheme() {
  return useContext(Themecontext);
}