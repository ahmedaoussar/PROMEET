import React, { useState } from "react";

export function FormConnexion() {
    const [showInscription, setShowInscription] = useState(false);

    const toggleInscription = () => {
        setShowInscription(!showInscription);
    };

    const InscriptionForm = () => {
        return (
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-8 space-y-4 md:space-y-6 sm:p-8 bg-nuanceBlanc">
                        <form className="space-y-6 md:space-y-10" action="#">
                            <div>
                                <input
                                    type="text"
                                    name="nom"
                                    id="nom"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Nom *"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="prenom"
                                    id="prenom"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Prénom *"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Email *"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Mot de passe *"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    placeholder="Confirmer le mot de passe *"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <button
                                    type="button"
                                    onClick={toggleInscription}
                                    className="p-2 text-sm font-medium border border-gray-300 rounded-lg text-bleuFonce px-5 py-2.5 hover:underline dark:text-bleuFonce"
                                >
                                    Annuler
                                </button>
                                <button
                                    type="submit"
                                    className="text-white bg-bleuFonce hover:bg-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Enregistrer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            {showInscription ? (
                <InscriptionForm />
            ) : (
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-8 space-y-4 md:space-y-6 sm:p-8 bg-nuanceBlanc">
                            <form className="space-y-6 md:space-y-10" action="#">
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Email *"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Mot de passe *"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div className="flex justify-between items-center">
                                    <button
                                        type="button"
                                        onClick={toggleInscription}
                                        className="p-2 text-sm font-medium border border-gray-300 rounded-lg text-bleuFonce px-5 py-2.5 hover:underline dark:text-bleuFonce"
                                    >
                                        S'inscrire
                                    </button>
                                    <button
                                        type="submit"
                                        className="text-white bg-bleuFonce hover:bg-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Se connecter
                                    </button>
                                </div>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                        Mot de passe oublié ?
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
