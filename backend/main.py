from fastapi import HTTPException
from pydantic import BaseModel, EmailStr
from fastapi import FastAPI
from database import connect, initialize_db, recherche_dans_la_base, findUserById, createUser
from src.model.User import User
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 240

app = FastAPI()
conn = connect()
cursor = conn.cursor()

origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup_event():
    initialize_db()


@app.get("/recherche")
async def recherche(q: str):
    result = recherche_dans_la_base(q)
    return {'find': result}


@app.get("/users/{userId}")
async def create_user(userId: int):
    user = findUserById(userId)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@app.post("/create-users")
async def create(user: User):
    result = createUser(user)
    if result is False:
        raise HTTPException(status_code=401, detail="Unable to create user")
    return result
