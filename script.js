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