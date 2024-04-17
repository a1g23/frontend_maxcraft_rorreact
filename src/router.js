import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import ShowAll from "./pages/Index"
import Update from "./pages/Update";
import ShowOne from "./pages/Show";
import Create from "./pages/Create"
import { productLoader, showLoader } from "./loader";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<ShowAll/>} loader={productLoader}/>
            <Route path=":id" element={<ShowOne/>} loader={showLoader}/>
            <Route path=":id/update" element={<Update/>} loader={showLoader}/>
            <Route path="new" element={<Create/>}/>           
        </Route>
    )
    
)

export default router