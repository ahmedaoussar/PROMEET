import {BarreNavigation} from "./Composants/BarreNavigation"
import {Accueil} from "./Pages/Accueil.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Backoffice} from "./Pages/Backoffice.jsx";


function App() {

    return (
        <div className={'w-10/12 md:container mx-auto'}>
            <BarreNavigation></BarreNavigation>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={Accueil}/>
                    {/*<Route path="/recherche" Component={}/> TODO*/}
                    {/*<Route path="/login" Component={}/> TODO*/}
                    <Route path="/" Component={Backoffice}/>
                </Routes>
            </BrowserRouter>
            <Backoffice></Backoffice>
        </div>
    )
}

export default App
