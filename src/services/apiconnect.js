export const apiURI = 'http://localhost:3333/v1/'

export async function GET(apiDesc) {
    return fetch(apiURI + apiDesc, {
        method: 'GET', headers: {
            "Content-type": "application/json",
            'authorization': `Bearer ${localStorage.getItem('TICKETPLACE@TOKEN')}`,
        },
    })
        .then(data => data.json())
}

export async function POST(apiDesc, dataSend) {
    return fetch(apiURI + apiDesc, {
        method: 'POST', headers: {
            "Content-type": "application/json",
            'authorization': `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkxZmM4ZTBmLWZiZWEtNGZhMi1hNjNmLTdiMWEyNTczNjQ5YSIsImlhdCI6MTY1NjQ5NTYyNSwiZXhwIjoxNjU2NTgyMDI1fQ.tLROAUH79V1bdSNIbVc79vRTde4MfwXx_KEuSpfCst0"}`,
        },
        body: dataSend
    })
        .then(data => data.json())
}

export async function PATCH(apiDesc, dataSend) {
    return fetch(apiURI + apiDesc, {
        method: 'PATCH', headers: {
            "Content-type": "application/json",
            'authorization': `Bearer ${localStorage.getItem('TICKETPLACE@TOKEN')}`,
        }, body: dataSend
    })
        .then(data => data.json())
}

export async function DELETE(apiDesc, dataSend) {
    return fetch(apiURI + apiDesc, {
        method: 'DELETE', headers: {
            "Content-type": "application/json",
            'authorization': `Bearer ${localStorage.getItem('TICKETPLACE@TOKEN')}`,
        }, body: dataSend
    })
        .then(data => data.json())
}