const button = document.getElementById("search-btn")
const input = document.getElementById("ingredient-input")
const results = document.getElementById("recipe-results")

function handleSearch() {
    const userInput = input.value.trim() //value reads live state of box

    if (userInput === "") return

    results.innerHTML = userInput //replaces html in results section
}

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
        console.log("Content-Type Header:", response.headers.get('content-type'));
        // console.log(data); // see what comes back first
    } catch (error) {
        console.error("Something went wrong:", error);
    }
}