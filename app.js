const searchRecipes = document.querySelector('#getRecipe');
const search = document.querySelector('.btn');

search.addEventListener('click', async function () {
    const recipes = searchRecipes.value;

    try {
        const recipeLoad = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${recipes}`);
        const response = await recipeLoad.json();
        console.log(response);
    } catch (error) {
        console.error(`${error}`);
    }
});