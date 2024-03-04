import { Outlet } from "react-router-dom"
import { NavBar } from "./NavBar"

export const Layout = ({ setHandleTheme, theme }) => {
  return (
    <>
    <NavBar setHandleTheme={setHandleTheme} theme={theme} />
    <Outlet />
    </>
  )
}
