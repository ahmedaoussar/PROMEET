from fastapi import HTTPException
from pydantic import BaseModel, EmailStr
from fastapi import FastAPI
from database import connect, initialize_db, recherche_dans_la_base,findUserById
from src.model.User import User
from fastapi.middleware.cors import CORSMiddleware

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
    return  user
