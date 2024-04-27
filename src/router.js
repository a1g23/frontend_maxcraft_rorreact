import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import Index from "./pages/Index"
import Update from "./pages/Update";
import ShowOne from "./pages/Show";
import Create from "./pages/Create"
import { productLoader, showLoader } from "./loader";
import { createAction, updateAction, deleteAction } from "./actions";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Index/>} loader={productLoader}/>
            <Route path=":id" element={<ShowOne/>} loader={showLoader}/>
            <Route path=":id/update" element={<Update/>} loader={showLoader}/>
            <Route path="new" element={<Create/>}/>
            <Route path="create" action={createAction}/>
            <Route path="update/:id" action={updateAction}/>
            <Route path="delete/:id" action={deleteAction}/>         
        </Route>
    )
    
)

export default router