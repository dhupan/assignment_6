

const loadAllpets = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => displayAllpets(data.category))
    .catch((error) => console.log(error));
};

// const displayAllpets = () => {
//     fetch("https://openapi.programming-hero.com/api/peddy/pets")
//     .then((res) => res.json())
//     .then((data) => {
//        data.forEach((pet) => {
//          console.log(`${pet.name} is a ${pet.type}`);
//        });
//      })
//     .catch((error) => console.log(error));
// };


// function displayAllpets(pets) {


//     pets.forEach((element) => {
//         console.log(element);

//     });  main
   
// 01322908497
// }

const displayAllpets = (pets) => {


    const categoryContainer=document.getElementById("uppersect")

    pets.forEach((element) => {
        console.log(element);


        const btn=document.createElement("button");
        btn.classList="btn btn-primary";
        btn.innerText=element.category;

        // add button category

        categoryContainer.append(btn)
    });
}

loadAllpets();

// displayAllpets();