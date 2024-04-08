import {useEffect, useState} from "react";
import {Avatar, Button, Chip, Input, Textarea, Typography} from "@material-tailwind/react";
import {authStore} from "../store/authStore.js";
import Select from "react-tailwindcss-select";
import {userProfileStore} from "../store/userProfilStore.js";
import axios from "axios";
import {toast} from "react-toastify";
import {useParams} from "react-router-dom";
import {updateProfileStore} from "../store/updateProfilStore.js";

export function InfoProfil() {
    const {id} = useParams();
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

    const {
        lists,
        setLists
    } = updateProfileStore();

    const {auth} = authStore();

    useEffect(() => {
        axios.get(`http://localhost:8000/users/${id}`)
            .then(response => {
                setNom(response.data.nom)
                setPrenom(response.data.prenom)
                setEmail(response.data.email)
                setTelephone(response.data.telephone)
                setDescription(response.data.description)
                setDomaine({value: response.data.domaine, label: response.data.domaine})
                setSousDomaine({value: response.data.sous_domaine, label: response.data.sous_domaine})
                setProfession({value: response.data.profession, label: response.data.profession})
                setEntreprise({value: response.data.entreprise, label: response.data.entreprise})

                let competences = response.data.competences.filter((x, i) => response.data.competences.indexOf(x) === i)
                competences = competences.map(competence => {
                    return {value: competence, label: competence}
                })
                setCompetences(competences)

            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });

        axios.get('http://localhost:8000/lists')
            .then((response) => {
                for (let key in response.data) {
                    response.data[key] = response.data[key].map((value) => {
                        return {value: value[0], label: value[0]}
                    })
                }
                setLists(response.data)
            })
            .catch(error => {
                console.error('Error fetching lists:', error);
                if (error.response.status === 403) {
                    auth.logout()
                }
            });


    }, []);

    function handleUpdate() {
        console.log(user)
        if (auth.isAuthenticated) {
            if (user.email !== "" && user.nom !== "" && user.prenom !== "" && user.telephone !== "" && user.description !== "" && user.domaine.value !== "" && user.sous_domaine.value !== "" && user.profession.value !== "" && user.competences.value !== []) {

                let formatedUser = {
                    nom: user.nom,
                    prenom: user.prenom,
                    email: user.email,
                    telephone: user.telephone,
                    description: user.description,
                    domaine: user.domaine.value,
                    sous_domaine: user.sous_domaine.value,
                    profession: user.profession.value,
                    entreprise: user.entreprise.value,
                    competences: user.competences.map(competence => competence.value)
                }
                toast.promise(axios.put('http://localhost:8000/update-users/' + auth.user.id, formatedUser, {
                        headers: {
                            'Content-Type': 'application/json',
                            "Authorization": `Bearer ${auth.token}`
                        }
                    }),
                    {
                        pending: 'Mis à jour en cours... 🕒',
                        success: 'Mis à jour effectuée avec succès 🎉',
                        error: "Une erreur s'est produite lors de la mise à jour ❌"
                    }
                )
            }
        }
    }

    function renderCompetences() {
        if (user.competences.length > 0) {
            return user.competences.map((competence, index) => {
                if (competence.value === "") {
                    return null
                } else {
                    return <Chip key={index} className={"bg-bleuFonce"} value={competence.value}/>
                }
            })
        } else {
            return <Typography variant="paragraph" className="text-bleuFonce">
                Aucune compétence renseignée
            </Typography>
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
                                    value={user.nom}
                                    required={true}
                                ></Input>
                                <Input
                                    onChange={(e) => setPrenom(e.target.value)}
                                    label={"Prénom"}
                                    value={user.prenom}
                                    required={true}
                                ></Input>
                            </div>
                            <div className={'w-full flex flex-col gap-4'}>
                                <Input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type={"email"}
                                    label={"Mail"}
                                    value={user.email}
                                    required={true}
                                ></Input>
                                <Input
                                    onChange={(e) => setTelephone(e.target.value)}
                                    label={"Téléphone"}
                                    value={user.telephone}
                                    required={true}
                                ></Input>
                            </div>
                        </div>

                        :
                        <div className={"grid grid-cols-1 md:grid-cols-2 "}>
                            <Typography variant="h4" className="text-bleuFonce">
                                {user.prenom}
                            </Typography>
                            <Typography variant="paragraph" className="text-bleuFonce">
                                {user.email}
                            </Typography>
                            <Typography variant="h4" className="text-bleuFonce">
                                {user.nom}
                            </Typography>
                            <Typography variant="paragraph" className="text-bleuFonce">
                                {user.telephone}
                            </Typography>
                        </div>
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
                                    value={user.description}
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
                                            value={user.entreprise}
                                            required={true}
                                        >
                                        </Input>
                                        :
                                        <Select
                                            value={user.entreprise}
                                            onChange={(value) => {
                                                setEntreprise(value)
                                            }}
                                            isSearchable={true}
                                            required={true}
                                            options={lists.entreprise}
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
                                    isSearchable={true}
                                    required={true}
                                    options={lists.domaine}
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
                                    options={lists.sous_domaine}
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
                                    options={lists.profession}
                                    classNames={'overflow-y-scroll h-40'}
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
                                    options={lists.competences}
                                    classNames={'overflow-y-scroll h-40'}
                                />
                            </div>
                            <Button onClick={handleUpdate} variant={"filled"} className={"bg-bleuFonce text-white"}>Enregistrer
                                le
                                profil</Button>
                        </>
                        :
                        <>
                            <div className="mb-8">
                                <h1 className="text-bleuFonce font-semibold mb-2">Description</h1>
                                <Typography variant="paragraph" className="text-bleuFonce">
                                    {user.description === "" ? "Aucune description renseignée" : user.description}
                                </Typography>
                            </div>
                            <div className="mb-16">
                                <h3 className="text-bleuFonce font-medium mb-2">Domaine : </h3>
                                <Chip value={user.domaine?.value ?? "aucun domaine saisi"}
                                      className={'bg-bleuFonce w-fit'}/>
                            </div>
                            <div className="mb-16">
                                <h3 className="text-bleuFonce font-medium mb-2">Sous Domaine
                                    : </h3>
                                <Chip value={user.sous_domaine?.value ?? "aucun sous domaine saisi"}
                                      className={'bg-bleuFonce w-fit'}/>
                            </div>
                            <div className="mb-16">
                                <h3 className="text-bleuFonce font-medium mb-2">Profession
                                    : </h3>
                                <Chip value={user.profession?.value ?? "aucune profession saisi"}
                                      className={'bg-bleuFonce w-fit'}/>
                            </div>
                            <div className="mb-16">
                                <h3 className="text-bleuFonce font-medium mb-2">Compétences : </h3>
                                <div className="flex flex-wrap gap-2">
                                    {renderCompetences()}
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}
