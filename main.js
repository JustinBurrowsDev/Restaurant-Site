$(document).ready(function() {
    $.get("https://obscure-tundra-54269.herokuapp.com/fine-dining", function(
        data
    ) {
        //appetizers
        let menu = data.appetizers
            .map(function(menus) {
                return `
              <div class="menus">
                <p class="title">${menus.name}</p>
                  <p class="price">${menus.price}</p>
                <p class="description">${menus.description}</p>
                <p class="dietary">
                ${(menus.extra.spicy &&
                  '<i class="fas fa-pepper-hot">Spicy</i>') ||
                  ""} 
                ${(menus.extra.glutenfree &&
                  '<i class="fas fa-bread-slice">Gluten Free</i>') ||
                  ""}
                ${(menus.extra.vegetarian &&
                  '<i class="fas fa-seedling">Vegetarian</i>') ||
                  ""} </p>
              </div>`
            })
            .join("")
        $(".appetizersContainer").html(menu)
            //entrees
        let menu2 = data.entrees
            .map(function(menus2) {
                return `
              <div class="menus">
                <p class="title">${menus2.name}</p>
                <p class="price">${menus2.price}</p>
                <p class="description">${menus2.description}</p>
                <p class="dietary2">
                ${(menus2.extra.spicy &&
                  '<i class="fas fa-pepper-hot">Spicy</i>') ||
                  ""} 
                  ${(menus2.extra.glutenfree &&
                    '<i class="fas fa-bread-slice">Gluten Free</i>') ||
                    ""}
                  ${(menus2.extra.vegetarian &&
                    '<i class="fas fa-seedling">Vegetarian</i>') ||
                    ""} </p>
              </div>`
            })
            .join("")
        $(".entreesContainer").html(menu2)
            //desserts
        let menu3 = data.desserts
            .map(function(menus3) {
                return `
            <div class="menus">
              <p class="title">${menus3.name}</p>
              <p class="price">${menus3.price}</p>
              <p class="description">${menus3.description}</p>
              <p class="dietary3">
              ${(menus3.extra.spicy &&
                '<i class="fas fa-pepper-hot">Spicy</i>') ||
                ""} 
              ${(menus3.extra.glutenfree &&
                '<i class="fas fa-bread-slice">Gluten Free</i>') ||
                ""}
              ${(menus3.extra.vegetarian &&
                '<i class="fas fa-seedling">Vegetarian</i>') ||
                ""} 
              </p>
            </div>`
            })
            .join("")
        $(".dessertsContainer").html(menu3)
        $(".slider").slick({
            centerMode: true,
            slidesToShow: 5,
            dots: true
        })
    })
})