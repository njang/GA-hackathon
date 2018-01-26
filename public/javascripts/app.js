
$(document).ready(function() {
  // Initial render of clients
	console.log('app is loaded');


// $('#searchMain').submit((event) => {
// 	event.preventDefault();
// 	console.log('Searching');
// });

    

Chart.defaults.global.animation.duration = 1700;
Chart.defaults.scale.ticks.beginAtZero =true;
/////////GENDER////////////////
const donut = document.getElementById('donutChart');



let donutChart = new Chart (donut, {
 type: "doughnut",
 data: {
     labels: ["Female", "Male", "Chose Not To Identify"],
     datasets: [
       {
         label: "Points",
         backgroundColor: ['#EBB407', '#193669', '#269479'],
         data: [10, 70, 20]
       }
     ]
   }

});

const bar = document.getElementById("barChart");


let barChart = new Chart (bar, {
 type: "bar",
 data: {
   labels: ["Female", "Male", "Chose Not To Identify"],
   datasets: [
     {
       label: ["Percentage of Gender"],
       data: [10, 70, 20],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(175, 116, 255, 0.2)'
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'purple'

          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }
  }

});

/////////Ethnicity////////////////


const etDonut = document.getElementById('etDonutChart');

let etDonutChart = new Chart (etDonut, {
 type: "doughnut",
 data: {
     labels: ["Non-Hispanic White", "African American", "Native American", "White", "Asian", "South Asian"],
     datasets: [
       {
         label: "Points",
         backgroundColor: ['#EBB407', '#193669', 'green', 'purple', 'blue', 'pink'],
         data: [10, 70, 20, 90, 50, 60]
       }
     ]
   }

});

const etBar = document.getElementById("etBarChart");


let etBarChart = new Chart (etBar, {
 type: "bar",
 data: {
   labels: ["Non-Hispanic White", "African American", "Native American", "White", "Asian", "South Asian"],
   datasets: [
     {
       label: ["Percentage of Different Ethnicities"],
       data: [10, 70, 20, 90, 50, 60],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(109, 255, 181, 0.2)',
            'rgba(175, 116, 255, 0.2)',
            'rgba(255, 179, 113, 0.2)',
            'rgba(255, 116, 147, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(109, 255, 181, 1)',
            'rgba(175, 116, 255, 1)',
            'rgba(255, 179, 113, 1)',
            'rgba(255, 116, 147, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }
  }

});

/////////Salaries////////////////




const salBar = document.getElementById("salBarChart");


let salBarChart = new Chart (salBar, {
 type: "horizontalBar",
 data: {
   labels: ["$20,000-$29,0000", "$30,000-$39,0000", "$40,000-$49,0000", "$50,000-$59,0000", "$60,000-$69,0000", "$70,000-$79,0000"],
   datasets: [
     {
       label: ["Percentage of Men's Salaries"],
       data: [10, 70, 20, 90, 50, 60],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(109, 255, 181, 0.2)',
            'rgba(175, 116, 255, 0.2)',
            'rgba(255, 179, 113, 0.2)',
            'rgba(255, 116, 147, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(109, 255, 181, 1)',
            'rgba(175, 116, 255, 1)',
            'rgba(255, 179, 113, 1)',
            'rgba(255, 116, 147, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }
  }

});






const salWomenBar = document.getElementById("salWoBarChart");


let salWoBarChart = new Chart (salWomenBar, {
 type: "horizontalBar",
 data: {
   labels: ["$20,000-$29,0000", "$30,000-$39,0000", "$40,000-$49,0000", "$50,000-$59,0000", "$60,000-$69,0000", "$70,000-$79,0000"],
   datasets: [
     {
       label: ["Percentage of Women's Salaries"],
       data: [10, 30, 20, 40, 50, 20],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(109, 255, 181, 0.2)',
              'rgba(175, 116, 255, 0.2)',
              'rgba(255, 179, 113, 0.2)',
              'rgba(255, 116, 147, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(109, 255, 181, 1)',
            'rgba(175, 116, 255, 1)',
            'rgba(255, 179, 113, 1)',
            'rgba(255, 116, 147, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }
  }

});

});
