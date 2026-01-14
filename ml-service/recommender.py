import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from tmdb import get_movie, discover_movies


def safe_text(value):
    if value is None:
        return ""
    if isinstance(value, str):
        return value
    return ""


def build_tags(movie):
    if not movie or "title" not in movie:
        return "movie"

    title = safe_text(movie.get("title"))
    overview = safe_text(movie.get("overview"))

    genres = ""
    if isinstance(movie.get("genres"), list):
        genres = " ".join(
            g.get("name", "") for g in movie.get("genres", [])
        )

    text = f"{title} {overview} {genres}".strip()
    return text if text else "movie"

def build_tags_from_client(movie):
    return f"{movie.title} {movie.overview} {' '.join(movie.genres)}".strip()


def recommend_movies(favourites, top_n=10):
    try:
        fav_texts = [
            build_tags_from_client(m)
            for m in favourites[:3]
        ]

        discovered = []
        for page in range(1, 4):  
            discovered.extend(discover_movies(page))

        candidate_tags = []
        candidate_ids = []

        for m in discovered:
            candidate_ids.append(m["id"])
            candidate_tags.append(
                f"{m.get('title','')} {m.get('overview','')}"
            )

        corpus = fav_texts + candidate_tags
        corpus = [c if c.strip() else "movie" for c in corpus]

        vectorizer = TfidfVectorizer(stop_words="english")
        vectors = vectorizer.fit_transform(corpus)

        user_vector = np.asarray(
            vectors[:len(fav_texts)].mean(axis=0)
        )

        similarities = cosine_similarity(
            user_vector, vectors[len(fav_texts):]
        )[0]

        ranked = np.argsort(similarities)[::-1][:top_n]
        return [candidate_ids[i] for i in ranked]

    except Exception as e:
        print("ML ERROR:", e)
        return [m["id"] for m in discover_movies(page=1)[:top_n]]
