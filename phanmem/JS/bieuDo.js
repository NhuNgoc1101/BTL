const myNodeList = document.querySelectorAll('p');

const ctx = document.getElementById('myChart').getContext('2d');
const data = {
    labels: [],
    datasets: [
        {
            type: 'line',
            label: 'Temp',
            data: [],
            backgroundColor: '#EE5C42',
            borderColor: '#EE5C42',
        },
        {
            type: 'line',
            label: 'Hum',
            data: [],
            backgroundColor: '#53868B',
            borderColor: '#53868B',
        },
        {
            type: 'line',
            label: 'Light',
            data: [],
            backgroundColor: '#2E8B57',
            borderColor: '#2E8B57',
        },
    ],
};

const config = {
    type: 'line',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Sensors Line Chart',
            },
        },
    },
};
Chart.defaults.color = '#000';
const sensorsChart = new Chart(ctx, config);
const handlingData = arr => {
  const dataSS = arr.map(data => Number(data));
 
  data.datasets[0].data.push(dataSS[0]);
  data.datasets[0].data.length === 13 && data.datasets[0].data.shift();
  data.datasets[1].data.push(dataSS[1]);
  data.datasets[1].data.length === 13 && data.datasets[1].data.shift();
  data.datasets[2].data.push(dataSS[2]);
  data.datasets[2].data.length === 13 && data.datasets[2].data.shift();
  myNodeList[0].textContent = dataSS[0];
  myNodeList[1].textContent = dataSS[1];
  myNodeList[2].textContent = dataSS[2];

fsRandomNhietDo()
fsRandomDoAm()
fsRandomAnhSang()
  const day = new Date();
  let time = `${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`;
  data.labels.push(time);
  data.labels.length === 13 && data.labels.shift();
  sensorsChart.update();
};



