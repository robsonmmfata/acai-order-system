import React, { useState, useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, BarController, BarElement, Title } from 'chart.js';

// Registrar os componentes necessários do Chart.js
Chart.register(CategoryScale, LinearScale, BarController, BarElement, Title);

function AdminDashboard() {
  const [chart, setChart] = useState(null);
  const chartRef = useRef(null); // Ref para o canvas

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Limpar o gráfico existente se houver
    if (chart) {
      chart.destroy();
    }

    // Criar um novo gráfico
    const newChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
          label: 'Pedidos',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Meses',
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Número de Pedidos',
            },
          },
        },
      },
    });

    setChart(newChart);

    // Limpar a instância do gráfico ao desmontar o componente
    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [chart]); // Adicione o `chart` como dependência para garantir que o gráfico seja recriado corretamente

  return (
    <div>
      <h1>Dashboard do Administrador</h1>
      <canvas ref={chartRef} id="myChart" />
    </div>
  );
}

export default AdminDashboard;
