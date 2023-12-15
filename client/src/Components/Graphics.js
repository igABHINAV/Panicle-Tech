import React, { useEffect, useState } from "react";
import { Chart } from "chart.js/auto";

const Graphics = ({ Data }) => {
  const [averageSalary, setAverageSalary] = useState(null);

  useEffect(() => {
    // Check if Data is available
    if (!Data || Data.length === 0) {
      return;
    }

    const labels = Data.map((user) => user.name);
    const salaries = Data.map((user) => user.salary);

    const data = {
      labels: labels,
      datasets: [
        {
          label: "Salary",
          backgroundColor: "rgba(250, 192, 192, 0.7)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          data: salaries,
        },
      ],
    };

    const ctx = document.getElementById("myChart").getContext("2d");

    const myChart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Calculate the average salary
    const totalSalary = salaries.reduce((acc, salary) => acc + salary, 0);
    const average = totalSalary / Data.length;
    setAverageSalary(average);

    return () => myChart.destroy();
  }, [Data]);

  return (
    <div
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2022/10/08/06/31/hungarian-parliament-building-7506436_1280.jpg')",
      }}
    >
      <h2 className="text-primary">Total Employee: {Data.length}</h2>
      <h2 className="text-warning">
        Average Salary: {averageSalary !== null ? `₹${averageSalary.toFixed(2)}` : "Calculating..."}
      </h2>
      <canvas id="myChart" className="text-success"></canvas>
    </div>
  );
};

export default Graphics;
