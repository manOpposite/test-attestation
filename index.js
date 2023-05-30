import _ from 'lodash'

const minNum = (arr) => {
  let min = arr[0];
  for (const item of arr) {
    if (item < min) {
      min = item
    }
  }
  return min;
};

const maxNum = (arr) => {
  let max = arr[0];
  for (const item of arr) {
    if(item > max) {
      max = item
    }
  }
  return max;
}

export default function solution(content){
  // BEGIN
//console.log(content);
  const data = content.split('\n').slice(1, -1);
  //console.log(data);
  const count = data.length;
  console.log(`Count: ${count}`);
  //const arr = data.split(',');
  const ArrayOfCities = data.map((elem) => elem.split(',').at(7));
  const cities = _.uniq(ArrayOfCities).sort();
  //console.log(cities.join(', '));
  const stringCities = cities.join(', ');
  console.log(`Cities: ${stringCities}`);
  const ArrayOfHumidity = data.map((elem) => elem.split(',').at(3));
  //console.log(typeof(ArrayOfHumidity.join()));
  const MaxHumidity = maxNum(ArrayOfHumidity);
  const MinHumidity = minNum(ArrayOfHumidity);
  //console.log(MaxHumidity);
  //console.log(MinHumidity);
  console.log(`Humidity: Min: ${MinHumidity}, Max: ${MaxHumidity}`);
  const maxTemperature = maxNum(data.map((elem) => elem.split(',').at(1)));
  //console.log(maxTemperature);
  const cityOfMaxTemperature = data.filter((elem) => elem.split(',').at(1) === maxTemperature);
  //console.log(cityOfMaxTemperature);
  const dayOfMaxTemp = cityOfMaxTemperature.join().split(',').at(0);
  const cityOfMaxTemp = cityOfMaxTemperature.join().split(',').at(7);
  console.log(`HottestDay: ${dayOfMaxTemp} ${cityOfMaxTemp}`);
  //END

}