const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send(null);
request.onload = function () {
  console.log(request.responseText);
  const countries = JSON.parse(request.responseText);
  console.log(countries);

  for (var country of countries) {
    const {
      flag,
      name: { common },
      region,
      subregion,
      population,
    } = country;
    console.log(
      flag,
      "--->",
      common,
      "--->",
      region,
      "--->",
      subregion,
      "--->",
      population
    );
  }
};

console.log(sum);
var sum;

sum = 100;
console.log(sum);
