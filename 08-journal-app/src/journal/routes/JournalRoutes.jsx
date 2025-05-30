import { Navigate, Route, Routes } from "react-router-dom"
import { JournalApp } from "../../JournalApp"
import { JournalPage } from "../pages"

export const JournalRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<JournalPage/>}/>
    <Route path="/*" element={<Navigate to='/'/>}/>
   </Routes>
  )
}
