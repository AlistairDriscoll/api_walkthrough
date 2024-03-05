const API_KEY = "qa2z-NmwniK8eA5vWxu2v_rlojg"
const API_URL = "https://ci-jshint.herokuapp.com/api"
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"))

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json()

    if (response.ok) {
        displayStatus(data);
    } else {
        throw new Error(data.error);
    }
}

function displayStatus(data) {

    let heading = "API Key Status"
    let results = `Your key is valid until`
    results += `<div>${data.expiry}</div>`

    document.getElementById("resultsModalTitle").innerText = heading
    document.getElementById("results-content").innerHTML = results

    resultsModal.show()
}