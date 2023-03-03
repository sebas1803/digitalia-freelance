export const createReceipt = async (body) => {
  await fetch(process.env.REACT_APP_BASE_URL + `Receipts`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      console.log(response)
    })
    .catch((err) => {
      console.log(err.message);
    });
};