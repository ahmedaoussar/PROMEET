from http.client import HTTPException
from pydantic import BaseModel, EmailStr
from fastapi import FastAPI
from database import connect, initialize_db, create_user

app = FastAPI()
conn = connect()
cursor = conn.cursor()

class User(BaseModel):
    name: str
    age: int

@app.on_event("startup")
async def startup_event():
    initialize_db()

@app.post("/users/")
async def add_user(user: User):
    user_id = create_user(user.name, user.age)
    if user_id:
        return {"id": user_id, "name": user.name, "age": user.age}
    else:
        raise HTTPException(status_code=400, detail="User not created")