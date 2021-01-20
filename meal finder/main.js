let food;
//let APIKEY = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`
const foodContainer= document.getElementById("foodContainer");
let toggle=0;
let remove = 1;

function meal(API){
    let i =-1;
    fetch(API)
    .then((res) => res.json())
    .then((date) =>{ 
        if(toggle == remove){
            foodContainer.innerHTML = "";
            document.getElementById("recipeContainer").innerText ="";
            remove++;
        };
            toggle++;
        console.log(date)
        date.meals.forEach(()=>{
        i++;
        const {strMeal , strArea ,strMealThumb , strInstructions} = date.meals[i];
        //
        title = document.createElement('h2');
        title.id = "foodName"
        title.textContent = strMeal;
        //
        let img = document.createElement('img');
        img.src = `${strMealThumb}`
        img.id = "foodPhoto"
        //
        recipeContainer = document.createElement('div');
        recipeContainer.id = "recipe"
        //
        recipeContainer.appendChild(title);
        recipeContainer.appendChild(img);
        foodContainer.appendChild(recipeContainer);

        img.addEventListener('click', ()=>{
            // recipeTitle = document.createElement('h1');
            // recipeTitle.id = "recipeTitle";

            document.getElementById("recipeTitle").innerText= "Recipe";
            console.log("ar trebuii sa mearga")
            document.getElementById("recipeContainer").innerText =  `${strInstructions}`;
        })
        })
    })
}

const searchBut = document.getElementById("searchBut")

searchBut.addEventListener('click',()=>{
    document.getElementById("recipeTitle").innerText= "";
    food = document.getElementById("search").value.trim();
    let APIKEY = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`
    meal(APIKEY)
})