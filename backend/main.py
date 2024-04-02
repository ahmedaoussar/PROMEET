from http.client import HTTPException
from pydantic import BaseModel, EmailStr
from fastapi import FastAPI
from database import connect, initialize_db, recherche_dans_la_base
from src.model.User import User

app = FastAPI()
conn = connect()
cursor = conn.cursor()

@app.on_event("startup")
async def startup_event():
    initialize_db()

@app.get("/recherche")
async def recherche(q: str):
    result = recherche_dans_la_base(q)
    return {'find': result}
