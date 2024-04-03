import SearchBar from '../Composants/SearchBar.jsx';
import {HeadAfterBNav} from "../Composants/HeadAfterBNav.jsx"; // Importez le composant de barre de recherche
import { Footer } from "../Composants/Footer"
import { Formulaire } from "../Composants/Formulaire"

export const Accueil = () => {
    return (
        <div>
            <HeadAfterBNav></HeadAfterBNav>
            <SearchBar search={false}/>
            <Formulaire/>
            <Footer/>
        </div>
    )
}
