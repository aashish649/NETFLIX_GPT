

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOWEyM2VhNTRjNTU4MzA5ZTYyM2QzMDVjYjMwMjY0ZSIsIm5iZiI6MTcyMDE2MzU0Mi41MTU5NTUsInN1YiI6IjY2N2E4NThmM2ZmZjRjZWI2ZmY5YmQ4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BrPwISGhT4Yz7S9d24iXpj4qq-w5t05F-MIM4figa9M',
  }
};


export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";



export const BG_URL = "../assets/background.jpg";


export const SUPPORTED_LANGUAGES = [
  {identifier: "en", name: "English"},
  {identifier: "hindi", name: "Hindi"},
  {identifier: "spanish", name: "Spanish"},
];


export const OPEN_AI_URL = process.env.REACT_APP_OPENAI_API_KEY;
