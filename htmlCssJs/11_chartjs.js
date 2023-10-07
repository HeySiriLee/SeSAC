document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("LineChart").getContext("2d");

  const chartData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 15, 50, 55, 70, 25, 30, 17, 96, 100, 77, 61],
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      xAxis: {
        display: true,
        title: {
          display: true,
          text: "Month",
        },
      },
      yAxis: {
        display: true,
        title: {
          display: true,
          text: "Value",
        },
        beginAtZero: true,
      },
    },
  };

  const chart = new Chart(ctx, {
    type: "line",
    data: chartData,
    options: chartOptions,
  });
});
