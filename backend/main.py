from http.client import HTTPException
from pydantic import BaseModel, EmailStr
from fastapi import FastAPI
from database import connect, initialize_db
from src.model.User import User

app = FastAPI()
conn = connect()
cursor = conn.cursor()

@app.on_event("startup")
async def startup_event():
    initialize_db()

@app.post("/users/")
async def add_user(user: User):
    user_id = False
    if user_id:
        return {"success": true}
    else:
        return {"success": false}
