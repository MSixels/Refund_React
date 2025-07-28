import { Routes, Route } from "react-router";

import { AuthLayout } from "../components/AuthLayout";
import { SigIn } from "../pages/SigIn";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
      <Route path="/" element={<SigIn/>} />
      </Route>
    </Routes>
  )
}