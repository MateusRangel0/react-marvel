import { Outlet } from "react-router-dom";
import Header from "../Header";

export default function RootLayout() {
  return (
    <>
      <div className="grid min-h-screen grid-cols-1">
        <div className="grow bg-black">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  )
}
