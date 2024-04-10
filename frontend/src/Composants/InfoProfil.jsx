import React, {useEffect, useState} from "react";
import {Avatar, Button, Input, Textarea, Typography} from "@material-tailwind/react";
import {authStore} from "../store/authStore.js";
import Select from "react-tailwindcss-select";
import {userProfileStore} from "../store/userProfilStore.js";
import axios from "axios";
import {toast} from "react-toastify";

export function InfoProfil() {
    const [notEntreprise, setNotEntreprise] = useState(false);
    const {
        user,
        setNom, setPrenom, setEmail,
        setTelephone,
        setDescription,
        setDomaine,
        setSousDomaine,
        setProfession,
        setEntreprise,
        setCompetences
    } = userProfileStore();
    const {auth} = authStore();

    function handleUpdate() {
        if (auth.isAuthenticated) {
            if (user.email !== "" && user.nom !== "" && user.prenom !== "" && user.telephone !== "" && user.description !== "" && user.domaine !== "" && user.sous_domaine !== "" && user.profession !== "" && user.competences !== []) {
                toast.promise(axios.put('http://localhost:3001/update-users/' + auth.user.id, {}),
                    {
                        pending: 'Mis à jour en cours... 🕒',
                        success: 'Mis à jour effectuée avec succès 🎉',
                        error: "Une erreur s'est produite lors de la mise à jour ❌"
                    }
                )
            }
        }
    }

    return (
        <div className={' my-5 md:my-36'}>
            <div className="flex flex-col md:flex-row gap-6 items-center w-full">
                <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" size="xxl"/>
                <div className="border border-bleuFonce p-4 rounded-md flex-1 bg-nuanceBlanc w-full">
                    {auth.isAuthenticated ?
                        <div className={"flex flex-col md:flex-row justify-between gap-10"}>
                            <div className={'w-full flex flex-col gap-4'}>
                                <Input
                                    onChange={(e) => setNom(e.target.value)}
                                    label={"Nom"}
                                    required={true}
                                ></Input>
                                <Input
                                    onChange={(e) => setPrenom(e.target.value)}
                                    label={"Prénom"}
                                    required={true}
                                ></Input>
                            </div>
                            <div className={'w-full flex flex-col gap-4'}>
                                <Input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type={"email"}
                                    label={"Mail"}
                                    required={true}
                                ></Input>
                                <Input
                                    onChange={(e) => setTelephone(e.target.value)}
                                    label={"Téléphone"}
                                    required={true}
                                ></Input>
                            </div>
                        </div>

                        :
                        <>
                            <Typography variant="h4" className="text-bleuFonce">
                                Nom Prenom
                            </Typography>
                            <Typography variant="paragraph" className="text-bleuFonce">
                                Mail Tel
                            </Typography>
                        </>
                    }
                </div>
            </div>

            <div className="mx-auto w-full mt-10">
                <div className="border border-bleuFonce p-4 rounded-xl bg-nuanceBlanc">
                    {auth.isAuthenticated ?
                        <>
                            <div className="mb-4">
                                <h1 className="text-bleuFonce font-semibold mb-2">Description</h1>
                                <Textarea
                                    label="Description"
                                    required={true}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div className="mb-4 ">
                                <h3 className="text-bleuFonce font-medium mb-2">Entreprise : </h3>
                                <div className={"flex flex-col md:flex-row gap-4"}>
                                    {notEntreprise ?
                                        <Input
                                            label={"Entreprise"}
                                            onChange={(e) => setEntreprise(e.target.value)}
                                            required={true}
                                        >
                                        </Input>
                                        :
                                        <Select
                                            value={user.entreprise}
                                            onChange={(value) => {
                                                setEntreprise(value)
                                            }}
                                            required={true}
                                            options={[
                                                {value: "fox", label: "🦊 Fox"},
                                                {value: "Butterfly", label: "🦋 Butterfly"},
                                                {value: "Honeybee", label: "🐝 Honeybee"}
                                            ]}
                                        />
                                    }
                                    <Button onClick={() => setNotEntreprise(!notEntreprise)}
                                            className={`text-white ${notEntreprise ? "bg-red-500" : "bg-bleuFonce"}`}
                                            size={"sm"}>
                                        {notEntreprise ? "Annuler" : "Ajouter une entreprise"}
                                    </Button>
                                </div>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-bleuFonce font-medium mb-2">Domaine : </h3>
                                <Select
                                    value={user.domaine}
                                    onChange={(value) => {
                                        setDomaine(value)
                                    }}
                                    required={true}
                                    options={[
                                        {value: "fox", label: "🦊 Fox"},
                                        {value: "Butterfly", label: "🦋 Butterfly"},
                                        {value: "Honeybee", label: "🐝 Honeybee"}
                                    ]}
                                />
                            </div>
                            <div className="mb-4">
                                <h3 className="text-bleuFonce font-medium mb-2">Sous Domaine : </h3>
                                <Select
                                    value={user.sous_domaine}
                                    onChange={(value) => {
                                        setSousDomaine(value)
                                    }}
                                    required={true}
                                    options={[
                                        {value: "fox", label: "🦊 Fox"},
                                        {value: "Butterfly", label: "🦋 Butterfly"},
                                        {value: "Honeybee", label: "🐝 Honeybee"}
                                    ]}
                                />
                            </div>
                            <div className="mb-4">
                                <h3 className="text-bleuFonce font-medium mb-2">Profession : </h3>
                                <Select
                                    value={user.profession}
                                    onChange={(value) => {
                                        setProfession(value)
                                    }}
                                    required={true}
                                    options={[
                                        {value: "fox", label: "🦊 Fox"},
                                        {value: "Butterfly", label: "🦋 Butterfly"},
                                        {value: "Honeybee", label: "🐝 Honeybee"}
                                    ]}
                                />
                            </div>
                            <div className="mb-4">
                                <h3 className="text-bleuFonce font-medium mb-2">Compétences : </h3>
                                <Select
                                    value={user.competences}
                                    onChange={(value) => {
                                        setCompetences(value)
                                    }}
                                    required={true}
                                    isMultiple={true}
                                    options={[
                                        {value: "fox", label: "🦊 Fox"},
                                        {value: "Butterfly", label: "🦋 Butterfly"},
                                        {value: "Honeybee", label: "🐝 Honeybee"}
                                    ]}
                                />
                            </div>
                            <Button onClick={handleUpdate} variant={"filled"} className={"bg-bleuFonce text-white"}>Enregistrer
                                le
                                profil</Button>
                        </>
                        :
                        <>
                            <div className="mb-16">
                                <h1 className="text-bleuFonce font-semibold mb-2">Description</h1>
                                <Typography variant="p" className="text-bleuFonce">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae distinctio earum
                                    error eum explicabo harum illo ipsam labore mollitia odio, quaerat quasi saepe
                                    veritatis. Dicta enim error odit. Placeat, quisquam!
                                </Typography>
                            </div>
                            <div className="mb-16">
                                <h3 className="text-bleuFonce font-medium mb-2">Domaine : </h3>
                            </div>
                            <div className="mb-16">
                                <h3 className="text-bleuFonce font-medium mb-2">Sous Domaine : </h3>
                            </div>
                            <div className="mb-16">
                                <h3 className="text-bleuFonce font-medium mb-2">Profession : </h3>
                            </div>
                            <div className="mb-16">
                                <h3 className="text-bleuFonce font-medium mb-2">Compétences : </h3>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}
