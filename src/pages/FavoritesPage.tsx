import { Link } from "react-router-dom";
import { useStore } from "../store/store";



function FavoritesPage() {
  const {favorites, removeFavorite} = useStore();
  return (
    <>
    <h2>Favorites</h2>
    <ul>
      {favorites.map((photo) => (
        <li key={photo.id}>
          <img src={photo.thumbnailUrl} />
          <p>{photo.title}</p>
          <p>By User: <Link to={`/users/${photo.userId}`}>{photo.userId}</Link>
          </p>
          <button onClick={() => removeFavorite(photo.id)}>Remove</button>
        </li>
      ))}
    </ul>
    </>
  )
}

export default FavoritesPage