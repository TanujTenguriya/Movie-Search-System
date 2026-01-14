from fastapi import FastAPI
from pydantic import BaseModel
from recommender import recommend_movies

app = FastAPI()


class Movie(BaseModel):
    title: str
    overview: str = ""
    genres: list[str] = []

class RecommendRequest(BaseModel):
    favourites: list[Movie]

@app.get("/")
def root():
    return {"status": "ML Service Running"}


@app.post("/recommend")
def recommend(req: RecommendRequest):
    try:
        return recommend_movies(req.favourites)
    except Exception as e:
        print("API ERROR:", e)
        return []


