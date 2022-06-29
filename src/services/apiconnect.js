export const apiURI = 'http://localhost:3333/v1/'

export async function GET(apiDesc) {
  return await fetch(apiURI + apiDesc, {
    method: 'GET', headers: {
      "Content-type": "application/json;",
      'authorization': `Bearer ${localStorage.getItem('TICKETPLACE@TOKEN')}`,
    },
  })
    .then(data => data.json())
}

export async function POST(apiDesc, dataSend) {
  return await fetch(apiURI + apiDesc, {
    method: 'POST', headers: {
      "Content-type": "application/jso;",
      'authorization': `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg5NzdhNDc2LTkxNGEtNDk3My05ZWIyLTAzYzE4OWI3ZjY0ZSIsImlhdCI6MTY1NjQ5MjY1NywiZXhwIjoxNjU2NTc5MDU3fQ.czw40LKOXuLmgW5pYUM2PMDIXkwxaw3YcFjChyspWn0"}`,
    },
    body: JSON.stringify(dataSend),
  })
    .then(data => data.json())
}

export async function PATCH(apiDesc, dataSend) {
  return await fetch(apiURI + apiDesc, {
    method: 'PATCH', headers: {
      "Content-type": "application/json;",
      'authorization': `Bearer ${localStorage.getItem('TICKETPLACE@TOKEN')}`,
    }, body: dataSend
  })
    .then(data => data.json())
}

export async function DELETE(apiDesc, dataSend) {
  return await fetch(apiURI + apiDesc, {
    method: 'DELETE', headers: {
      "Content-type": "application/json;",
      'authorization': `Bearer ${localStorage.getItem('TICKETPLACE@TOKEN')}`,
    }, body: dataSend
  })
    .then(data => data.json())
}