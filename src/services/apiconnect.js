export const apiURI = 'http://localhost:3333/v1/'

export async function GET(apiDesc) {
  return await fetch(apiURI + apiDesc, {
    method: 'GET', headers: {
      "Content-type": "application/json",
      'authorization': `Bearer ${localStorage.getItem('TICKETPLACE@TOKEN')}`,
    },
  })
    .then(data => data.json())
}

export async function POST(apiDesc, dataSend) {
  return await fetch(apiURI + apiDesc, {
    method: 'POST', headers: {
      "Content-type": "application/json",
      'Authorization': `Bearer ${localStorage.getItem('TICKETPLACE@TOKEN')}`,
    },
    body: dataSend,
  })
    .then(data => data.json())
    .catch(err => console.log(err))
}

export async function PATCH(apiDesc, dataSend) {
  return await fetch(apiURI + apiDesc, {
    method: 'PATCH', headers: {
      "Content-type": "application/json",
      'authorization': `Bearer ${localStorage.getItem('TICKETPLACE@TOKEN')}`,
    }, body: dataSend
  })
    .then(data => data.json())
}

export async function DELETE(apiDesc, dataSend) {
  return await fetch(apiURI + apiDesc, {
    method: 'DELETE', headers: {
      "Content-type": "application/json",
      'authorization': `Bearer ${localStorage.getItem('TICKETPLACE@TOKEN')}`,
    }, body: dataSend
  })
    .then(data => data.json())
}