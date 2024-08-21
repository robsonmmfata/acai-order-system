import React, { useState, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

// Certifique-se de registrar todos os componentes necessários do Chart.js
Chart.register(...registerables);

function AdminDashboard() {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d');

    // Verifica se o gráfico já foi criado e o destrói se necessário
    if (chart) {
      chart.destroy();
    }

    // Cria o novo gráfico
    const newChart = new Chart(ctx, {
      type: 'bar', // Tipo de gráfico
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
          label: 'Sales',
          data: [12, 19, 3, 5, 2, 3, 7],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem) {
                return tooltipItem.dataset.label + ': ' + tooltipItem.raw;
              }
            }
          }
        }
      }
    });

    setChart(newChart);

    // Função de limpeza para destruir o gráfico quando o componente for desmontado
    return () => {
      if (newChart) {
        newChart.destroy();
      }
    };
  }, [chart]); // Dependência do estado chart para garantir a destruição do gráfico anterior

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-purple-600">Admin Dashboard</h2>
      <canvas id="myChart" />
    </div>
  );
}

export default AdminDashboard;
