import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"

// const TMBD_TOKEN = import.meta.env.VITE_APP_TMDB_MOVIE_TOKEN;
const TMBD_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWVlZmViZWRmNjE4ODA4NWU0MDdlNjMyNTgwNjI3MSIsInN1YiI6IjY0ZjYxZmViZTBjYTdmMDEwZGU2MGRjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.15_gsNGRerRQB5EeZzbGe-BEkmD_gJq9BvrY-n82brg";

const headers ={
    Authorization : "bearer " + TMBD_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;

    } catch (err){
        console.log(err);
        return err
    }
}