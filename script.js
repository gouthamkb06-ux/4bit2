// Change movie title

const title =
document.getElementById("title");

title.addEventListener("click",()=>{

    title.textContent =
    "Top Rated Movies";

});

// Play Button

document.querySelector(".play-btn")
.addEventListener("click",()=>{

    alert("Movie Playing...");

});

// Movie Click

const cards =
document.querySelectorAll(".movie-card");

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        alert("Movie Selected");

    });

});