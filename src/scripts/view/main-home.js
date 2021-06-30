const main = () => {
    const baseUrl = "https://www.themealdb.com/api/json/v1/1/categories.php"
    const getCategory = () => {
        fetch(`${baseUrl}/list`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponseMessage(responseJson.message);
                } else {
                    renderAllCategories(responseJson.categories);
                }
            })
            .catch(error => {
                showResponseMessage(error);
            })
    };
    const renderAllCategories = (categories) => {
        const listCategoryElement = document.querySelector("content-list .card-deck");
        listCategoryElement.innerHTML = "";

        categories.forEach(category => {
            listCategoryElement.innerHTML += `
                <style>
                    content-list .card-deck{
                        margin: 20px 50px;
                    }
                </style>
                <div class="col-md-4">
                    <div class="card mb-3">
                        <img class="card-img-top" src="${category.strCategoryThumb}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${category.strCategory}</h5>
                            <p class="card-text text-justify">${category.strCategoryDescription}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    };
    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };
    document.addEventListener("DOMContentLoaded", () => {
        getCategory();
    });
}

export default main;