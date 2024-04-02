import {Formulaire} from "../Composants/Formulaire"
import SearchBar from '../Composants/SearchBar.jsx';
import {HeadAfterBNav} from "../Composants/HeadAfterBNav.jsx"; // Importez le composant de barre de recherche
import{CarouselDefault} from "../Composants/Carousel"

export const Accueil = () => {
    return (
        <div>
            <HeadAfterBNav></HeadAfterBNav>
            <SearchBar/>
            <CarouselDefault></CarouselDefault>
            <Formulaire/>
        </div>
    )
}

