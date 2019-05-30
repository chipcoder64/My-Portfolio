//Bar Graph in index.html page.
let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',
    // The data for the graph. Add additional fields in "labels" along with "data".
    data: {
        labels: ["HTML", "Css", "Sass", "Grid", "Flexbox", "Bootstrap", "Javascript", "React.js", "jQuery.js", "Node.js", "Photoshop"],
        datasets: [{
            label: "Skills",
            backgroundColor: ['crimson', '#f57c00', 'gold', 'yellow', 'lime', 'green', '#01796f', 'turquoise', 'cyan', 'teal', '#0f52ba'],
            borderColor: 'rgb(99, 99, 132)',
            data: [80, 90, 30, 70, 60, 60, 55, 25, 60, 25, 50],
        }]
    },
    // Configuration options go here
    options: {
        responsive: true,
        maintainAspectRation: false,
        legend: {
            labels: {
                fontSize: 18
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontSize: 16,
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                    fontSize: 16
                }
            }]
        }


    }
});
//end bar graph code.


//resume page shake effect on skills section
$(document).ready(function () {
    $(".shake").hover(function () {
        $(this).effect("shake", { times: 1 }, 1000);
    });
});
//end shake effect code.

//index.html certifications hide button
document.querySelector("#cert-button").onclick = function () {
    let para = document.querySelector(".cert-wrapper");
    let changeWord = document.querySelector("#changeWord");
    if ((para.style.display === 'block') && (changeWord.innerHTML === 'hide' )) {
        (para.style.display = 'none') && (changeWord.innerHTML = 'show');
    } else {
        (para.style.display = 'block') && (changeWord.innerHTML = 'hide');
    }
}
    //end hide button code
