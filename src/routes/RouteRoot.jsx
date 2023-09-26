import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route
} from "react-router-dom";
import About from '../Pages/About';
import TechStack from "../Pages/TechStack";
import Contact from "../Pages/Contact";
import RootLayout from "../Layout/RootLayout";
import App from "../App";
import Error from '../components/common/Error';
import Detail from '../Pages/Detail';

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<App />} />
            <Route path="about" element={<About />} />
            <Route path="techstack" element={<TechStack />} />
            <Route path="contact" element={<Contact />} />
            <Route path="detail/:userid" element={<Detail />} />
            <Route path="*" element={<Error />} />
        </Route>)
)

const RouteRoot = () => {
    return <RouterProvider router={Router} />
}

export default RouteRoot;