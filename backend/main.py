from http.client import HTTPException
from pydantic import BaseModel, EmailStr
from fastapi import FastAPI,HTTPException
from database import connect, initialize_db, recherche_dans_la_base
from src.model.User import User
from fastapi import HTTPException

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
@app.post("/users/")
async def add_user(user: User):
    user_id = create_user(user.name, user.age)
    if user_id:
        return {"success": True}
    else:
        return {"success": False}


from database import get_user_profile_by_id
@app.get("/profile/{user_id}")
async def get_profile(user_id: int):
    profile_data = get_user_profile_by_id(user_id)
    if profile_data:
        return profile_data
    else:
        raise HTTPException(status_code=404, detail="Profil non trouvé")