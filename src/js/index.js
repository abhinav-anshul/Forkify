import Search from "./models/Search";
import * as searchView from "./views/searchView";
import { elements } from "./views/base";

/* Global State of the app 
    -search object
    -current recipe object
    -shopping list object
    -Liked recipes object
*/
const state = {};

const controlSearch = async () => {
  // 1. get query from the view
  const query = searchView.getInput(); //TODO
  console.log(query);

  if (query) {
    // 2. New search object and add it to the state
    state.search = new Search(query);

    // 3. prepare UI for results
    searchView.clearInput();
    searchView.clearResults();

    // 4. Search for recipes

    await state.search.getResults();

    // 5. Render resuts on the UI
    searchView.renderResults(state.search.result);
  }
};

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});
