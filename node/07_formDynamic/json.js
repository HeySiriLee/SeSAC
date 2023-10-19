const data = { name: "siri", gender: "w" };

const jsonData = JSON.stringify(data);

console.log("json: ", jsonData);
console.log("js object: ", JSON.parse(jsonData));
