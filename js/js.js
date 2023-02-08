// const requestURL = 'https://jsonplaceholder.typicode.com/photos'
//
//
// const xhr = new XMLHttpRequest()
// xhr.open('GET', requestURL)
//
//
// xhr.onload = () => {
//     console.log(JSON.parse(xhr.response))
// };
//
// xhr.onerror = function () {
//     console.log(xhr.response)
// };
//
// xhr.onprogress = function (event) {
//     console.log(`Загружено ${event.loaded} из ${event.total}`)
// }
//
//
// xhr.send()

function useRequest(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (xhr.response !== 200) {
            console.log(`Статус ответа ${xhr.status}`)
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result)
            }
        }
    }
    xhr.onerror = () => {
        console.log(`Ошибка! Статус ответа: ${xhr.status}`)
    };

    xhr.send();
}

const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('.j-btn-request');


function displayResult(apiData) {
    let cards = '';
    apiData.forEach(item => {
        const cardBlock = `
        <div class="card">
        <img src="${item.url}"
        class="card-image"/>
        <p>${item.title}</p>
        </div>
        `;
        cards = cards + cardBlock
    });
    console.log(cards)
    resultNode.innerHTML = cards;
}

btnNode.addEventListener('click', () => {
    useRequest('https://jsonplaceholder.typicode.com/photos', displayResult);
})

