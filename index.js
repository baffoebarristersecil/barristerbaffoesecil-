function saveData() {
    location.reload(true);
    var food = parseFloat(document.getElementById("food").value);
    var clothing = parseFloat(document.getElementById("clothing").value);
    var saving = parseFloat(document.getElementById("saving").value);
    var rent = parseFloat(document.getElementById("rent").value);
  
    localStorage.setItem("food", food);
    localStorage.setItem("clothing", clothing);
    localStorage.setItem("saving", saving);
    localStorage.setItem("rent", rent);
    updateChart();
  }
  
  function updateChart() {
    var food = parseFloat(localStorage.getItem("food")) || 0;
    var clothing = parseFloat(localStorage.getItem("clothing")) || 0;
    var saving = parseFloat(localStorage.getItem("saving")) || 0;
    var rent = parseFloat(localStorage.getItem("rent")) || 0;
  
    var ctx = document.getElementById("barChart").getContext("2d");
    var myBarChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Food", "Clothing", "Saving", "Rent"],
        datasets: [
          {
            label: "Spending",
            backgroundColor: [
              "rgba(75, 192, 192, 0.7)",
              "rgba(255, 99, 132, 0.7)",
              "rgba(54, 162, 235, 0.7)",
              "rgba(255, 206, 86, 0.7)",
            ],
            borderColor: [
              "rgba(75, 192, 192, 1)",
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            data: [food, clothing, saving, rent],
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: "#555",
              font: {
                size: 14,
              },
            },
            grid: {
              color: "#ccc",
            },
          },
          x: {
            ticks: {
              color: "#555",
              font: {
                size: 14,
              },
            },
            grid: {
              color: "#ccc",
            },
          },
        },
      },
    });
  }
  
  function cancel() {
    document.getElementById("spendingForm").reset();
  }
  
  updateChart();
  