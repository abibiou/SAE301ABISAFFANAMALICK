const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
  type: 'bar',
  data: {
      labels: [
          'Bacillus subtilis',
          'Bacillus thuringiensis',
          'Lecanicillium muscarium',
          'Phosphate ferrique ',
          'Savon ',
          'Encarsia formosa',
          'Eretmocerus erimicus',
          'Trichogrammes',
          'Macrolophus pygmaeus',
          'Laminarine ',
          'Coniothyrium minitans',
          'Hydrogénocarbonate de potassium',
          'Soufre',
          'Stimulateur des défenses',
          'Phéromone lépidoptères ',
          'Syrphes',
          'Aphidius colemani',
          'Alysson maritime ',
          'Bacillus amyloliquefaciens ',
          'Lecanicillium muscarium',

      ],
      datasets: [{
          label: 'Taux de satisfaction par sous methode',
          data: [50, 36, 46, 62, 25, 70, 70, 70,55,40,10,70,70,70,10,60,70,70,70,40 ],
          backgroundColor: [
              'rgb(97, 115, 92)',
          ],
          hoverOffset: 4
      }]
  }
});