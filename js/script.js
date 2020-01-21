let chartData = [

    300000,
    322815,
    346972,
    372544,
    399604,
    428233,
    458513,
    490532,
    524381,
    560157,
    597961,
    637899,
    680083,
    724630,
    771664,
    821313,
    873713,
    929008,
    987346,
    1048886,
    1113792,
    1182238,
    1179430,
    1176629,
    1173834,
    1171047,
    1168265,
    1165491,
    1162723,
    1159961,
    1157206,
    1154458,
    1151716,
    1148981,
    1146252,
    1143530,
    1140814,
    1138104,
    1135401,
    1132705,
    1130015,
    1127331,
    1124653,
    1121982,
    1119318,
    1116659,
    1114007,
    1111361,
    1108722,
    1106089,
    1103462
];
let chartLabels = [2020, 2022, 2024, 2026, 2028, 2030, 2032, 2034, 2036, 2038, 2040, 2042, 2044, 2046, 2048, 2050, 2052, 2054, 2056, 2058, 2060, 2062, 2064, 2066, 2068, 2070];
let chartType = 'line';
let chartMainData = {
    labels: chartLabels,
    datasets: [
        {
            label: 'Start Balance',
            data: chartData,
            fill: false,
            borderColor: '#4F81BD',
            borderWidth: 2,
            pointStyle: 'circle',
            pointBackgroundColor: '#4F81BD'
        },

    ],
};
let chartOptions = {
    scales: {
        yAxes: [{
            ticks: {
                // max: 5,
                min: 200000,
                stepSize: 200000,
                callback: function (value) {
                    return (value < 1000000) ? value / 1000 + 'K' : value / 1000000 + 'M';
                }
            }
        }]
    },
    layout: {
        padding: {
            left: 30,
            right: 30,
            bottom: 20,
        }
    }
}






let canvas_chart = document.querySelector('#canvas_chart').getContext('2d');


Chart.defaults.global.legend.display = false;
let startChart = new Chart(canvas_chart, {
    type: chartType,
    data: chartMainData ,
    options: chartOptions
}
    )

function updateChartType() {
    // Since you can't update chart type directly in Charts JS you must destroy original chart and rebuild
     startChart.destroy();
     startChart = new Chart(canvas_chart, {
       type: document.getElementById("chartType").value,
       data:chartMainData,
       options: chartOptions,
     });

  };



















function inputControl(form) {
    let salaryInt = Number(form.salary.value);
  //  (salaryInt == 0) ? 0 + salaryInt : salaryInt;
    let rate1 = Number(form.rate1.value);
    let rate2 = Number(form.rate2.value);
    let rate3 = Number(form.rate3.value);
    let rate4 = Number(form.rate4.value);
    let rate5 = Number(form.rate5.value);
    let rate6 = Number(form.rate6.value);


    // all value here below
    let salaryValue = ((isNaN(salaryInt)) ? 0 : salaryInt);
    let rate1Value = ((isNaN(rate1)) ? 0 : (salaryInt * rate1) / 100);
    let rate2Value = ((isNaN(rate2)) ? 0 : (salaryInt * rate2) / 100)
    let rate3Value = ((isNaN(rate3)) ? 0 : (salaryInt * rate3) / 100)
    let rate4Value = ((isNaN(rate4)) ? 0 : (salaryInt * rate4) / 100)
    let rate5Value = ((isNaN(rate5)) ? 0 : (salaryInt * rate5) / 100)
    let rate6Value = ((isNaN(rate6)) ? 0 : (salaryInt * rate6) / 100)
    

    // total value here below;
    let totalValue = salaryValue - (rate1Value + rate2Value + rate3Value + rate4Value + rate5Value + rate6Value);
   //   console.log(totalValue);

    let newChartData = chartData.map(i => i + totalValue);

    startChart.data.datasets[0].data = newChartData;
    console.log(newChartData);
    startChart.update();
}




    // startChart.update();