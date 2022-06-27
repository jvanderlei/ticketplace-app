export const apiURI = 'http://localhost:3333/v1/'

export async function GET(apiDesc) {
    return fetch(apiURI + apiDesc, {method: 'GET'})
    .then(data => data.json())
}

export async function POST(apiDesc, dataSend) {
    return fetch(apiURI + apiDesc, {method: 'POST', body: dataSend})
    .then(data => data.json())
}

export async function PATCH(apiDesc, dataSend) {
    return fetch(apiURI + apiDesc, {method: 'PATCH', body: dataSend})
    .then(data => data.json())
}

export async function DELETE(apiDesc, dataSend) {
    return fetch(apiURI + apiDesc, {method: 'DELETE', body: dataSend})
    .then(data => data.json())
}