from passlib.context import CryptContext
from pydantic import BaseModel


class User(BaseModel):
    nom: str
    prenom: str
    email: str
    mdp: str
    telephone: str
    description_profil: str
    profession_id: int
    sous_domaine_id: int
    entreprise: int


def get_password_hash(password):
    pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
    return pwd_context.hash(password)


def verify_password(plain_password, hashed_password):
    pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
    return pwd_context.verify(plain_password, hashed_password)
