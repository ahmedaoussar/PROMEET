import React from 'react';
import {
    Card,
    Input,
    Button,
    Typography, Textarea,
} from "@material-tailwind/react";

export function Formulaire() {
    return (
        <div className="container mx-auto px-4 lg:px-8">
            <Card color="#002C77" shadow={false} className="p-8">
                <Typography variant="h4" className="text-center mb-8 text-bleuFonce">
                    Un problème ? Une idée ?
                </Typography>
                <div
                    className="border border-bleuFonce p-4 rounded-xl bg-nuanceBlanc">
                    <form className="mt-8">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <Typography variant="h6" className="text-bleuFonce mb-3">Nom</Typography>
                                <Input
                                    size="lg"
                                    className="border-t-blueGray-300 focus:border-t-blueGray-500"
                                    label="Nom"
                                />
                            </div>
                            <div>
                                <Typography variant="h6" className="text-bleuFonce mb-3">Prénom</Typography>
                                <Input
                                    size="lg"
                                    className="!border-t-blueGray-300 focus:!border-t-blueGray-500"
                                    label="Prénom"
                                />
                            </div>
                            <div>
                                <Typography variant="h6" className="text-bleuFonce mb-3">Email</Typography>
                                <Input
                                    size="lg"
                                    className="!border-t-blueGray-300 focus:!border-t-blueGray-500"
                                    label="Email"
                                />
                            </div>
                            <div>
                                <Typography variant="h6" className="text-bleuFonce mb-3">Téléphone portable</Typography>
                                <Input
                                    size="lg"
                                    className="!border-t-blueGray-300 focus:!border-t-blueGray-500"
                                    label="Téléphone portable"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <Typography variant="h6" className="text-bleuFonce mb-3">Votre message</Typography>
                            <Textarea label="Votre message"
                                      className="px-3 py-2 border border-blue-gray-300 bg-nuanceBlanc rounded w-full"
                                      rows={4}
                            />
                        </div>
                        <Button
                            size="sm"
                            color="blueFonce"
                            buttonType="filled"
                            ripple="light"
                            className="float-right bg-bleuFonce hidden lg:inline-block"
                        >
                            Envoyer
                        </Button>
                    </form>
                </div>
            </Card>
        </div>
    );
}
