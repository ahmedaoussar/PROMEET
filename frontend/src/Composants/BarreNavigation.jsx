import React from "react";
import {
    Navbar,
    Typography,
    Button, MobileNav, IconButton,
} from "@material-tailwind/react";

export function BarreNavigation() {
    // State pour gérer l'ouverture/fermeture de la navigation sur mobile
    const [openNav, setOpenNav] = React.useState(false);

    // Effet pour fermer la navigation lorsque la largeur de la fenêtre dépasse 1000px
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 1000 && setOpenNav(false),
        );
    }, []);

    return (
        // Barre de navigation principale
        <Navbar className="mx-auto px-4 py-2 lg:px-8 lg:py-4 shadow-none">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo ou nom de votre site */}
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 cursor-pointer py-1.5 font-bold text-xl text-bleuFonce"
                >
                    ProMEET
                </Typography>
                <div className="flex items-center gap-x-4">
                    <Button
                        size="sm"
                        className=" bg-bleuFonce hidden lg:inline-block">
                        <span className="text-white">Recherche</span>
                    </Button>
                    {/* Bouton pour se connecter */}
                    <Button
                        size="sm"
                        className=" bg-bleuFonce hidden lg:inline-block"
                    >
                        <span className="text-white">Login</span>
                    </Button>
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-bleuFonce hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={3}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                <div className="container mx-auto mt-5">
                    <div className="flex items-center gap-x-5">
                        <Button fullWidth variant="filled" size="sm" className="bg-bleuFonce text-white">
                            <span>Recherche</span>
                        </Button>
                        {/* Bouton pour se connecter */}
                        <Button fullWidth variant="filled" size="sm" className="bg-bleuFonce text-white">
                            <span>Login</span>
                        </Button>
                    </div>
                </div>
            </MobileNav>
        </Navbar>
    );
}
