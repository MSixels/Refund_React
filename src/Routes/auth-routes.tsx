import { Routes, Route } from "react-router";

import { SigIn } from "../pages/SigIn";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SigIn/>} />
    </Routes>
  )
}