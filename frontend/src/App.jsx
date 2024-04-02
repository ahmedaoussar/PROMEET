import {BarreNavigation} from "./Composants/BarreNavigation"
import {Accueil} from "./Pages/Accueil.jsx";


function App() {

    return (
        <div className={'w-10/12 md:container mx-auto'}>
            <BarreNavigation></BarreNavigation>
            <Accueil></Accueil>
        </div>
    )
}

export default App
