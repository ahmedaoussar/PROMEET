import {BarreNavigation} from "./Composants/BarreNavigation"
import {Accueil} from "./Pages/Accueil.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Recherche} from "./Pages/Recherche.jsx";
import { Footer } from "./Composants/Footer.jsx";


function App() {

    return (
        <div className={'w-10/12 md:container mx-auto'}>
            <BarreNavigation></BarreNavigation>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Accueil}/>
                    {<Route path="/recherche" Component={Recherche}/> }
                    {/*<Route path="/login" Component={}/> TODO*/}
                </Routes>
            </BrowserRouter>
            <Footer></Footer>
        </div>
    )
}

export default App
