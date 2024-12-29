const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
  type: 'polarArea',
  data: {
    labels: ['Abrioculture', 'Cultures tropicales', 'Grandes cultures', 'Horiculture', 'légumes', 'Viticulture'],
    datasets: [{
      label: 'Nombre de filières',
      data: [0, 0, 0, 0, 65, 0],
      backgroundColor: [
        'rgb(45, 64, 40,  0.75)',
        'rgb(97, 115, 92,  0.75)',
        'rgb(164, 176, 156, 0.75)',
        'rgb(146, 114, 166, 0.75)',
        '    rgb(109, 47, 127, 0.75)',
        '    rgb(68, 12, 83, 0.75)'
    ]
    }]
  },
  options: {
    responsive: true,
  }
});