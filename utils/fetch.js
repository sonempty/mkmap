const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const STRAPI_TOKEN = process.env.NEXT_PUBLIC_STRAPI_TOKEN;
//NEXT_PUBLIC_STRAPI_URL=http://localhost:1337/api

function transformArrayResponse(res) {
  const { data, error } = res;
  if (!data | error) return [];

  let results = [];
  if (data && data.length)
    data.forEach((item) => {
      results.push({ id: item.id, ...item.attributes });
    });

  return results;
}

function transformObjectResponse(res) {
  const { data, error } = res;
  if (!data || error) return null;

  let result = { id: data.id, ...data.attributes };
  return result;
}

export function createOne(path, data) {
  let newOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${STRAPI_TOKEN}`,
    },
    body: JSON.stringify(data),
  };
  return fetch(`${API_URL}${path}`, newOptions)
    .then((res) => res.json())
    .then((res) => transformObjectResponse(res));
}

export function updateOne(path, data) {
  let newOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${STRAPI_TOKEN}`,
    },
    body: JSON.stringify(data),
  };
  return fetch(`${API_URL}${path}`, newOptions)
    .then((res) => res.json())
    .then((res) => transformObjectResponse(res));
}

export function getOne(path) {
  let newOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${STRAPI_TOKEN}`,
    },
  };
  return fetch(`${API_URL}${path}`, newOptions)
    .then((res) => res.json())
    .then((res) => transformObjectResponse(res));
}

export function getMany(path) {
  let newOptions = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${STRAPI_TOKEN}`,
    },
  };
  return fetch(`${API_URL}${path}`, newOptions)
    .then((res) => res.json())
    .then((res) => transformArrayResponse(res));
}
