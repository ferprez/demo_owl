export function makeLogin(data) {
  return fetch(`/login`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json, text/plain, */*',},
    body: JSON.stringify(data)
  });
};

export function registro(data) {
  return fetch('/registrar', {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json, text/plain, */*',},
    body: JSON.stringify(data)
  })
};