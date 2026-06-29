const button = document.getElementById("search-btn")
const input = document.getElementById("ingredient-input")
const results = document.getElementById("recipe-results")

button.addEventListener("click", handleSearch)

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") handleSearch()
})

async function handleSearch() {
    const userInput = input.value.trim();
    if (userInput === "") return;

    try {
        const response = await fetch(
            `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${userInput}&number=10&apiKey=${RECIPE_FINDER_API_KEY}`
        );
        const data = await response.json();
        console.log(data); // see what comes back first

        let htmlStr = `<div class="scrollable">`

        data.forEach(recipe => {
            htmlStr += `
                <div class="card">
                    <img src="${recipe.image}">
                    <h3>${recipe.title}</h3>
                </div>
                `
        });

        htmlStr += `</div>`
        results.innerHTML = htmlStr
        
    } catch (error) {
        console.error("Something went wrong:", error);
    }
}