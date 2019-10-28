import axios from "axios";

async function getResults(query) {
  //const proxy = "https://cors-anywhere.herokuapp.com/";
  const key = "3bc9402e572e7d4fb0424c5da6749516";
  try {
    const res = await axios(
      `https://www.food2fork.com/api/search?key=${key}&q=${query}`
    );
    const recipes = res.data.recipes;
    console.log(recipes);
  } catch (error) {
    alert(error);
  }
}

getResults("tomato pasta");
