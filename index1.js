async function getData() {
  const weather = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=39.99657476719096&lon=116.48148321335883&appid=42a2d790bbeb87e5535cfe99a11a99a6&units=metric&lang=ru`
  );
  const weatherJson = await weather.json();
  console.log(weatherJson);
}
getData();
