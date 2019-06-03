//resume page shake effect on skills section 
//jQuery code goes first before other code otherwise it doesn't work.

$(document).ready(function () {
    $(".shake").hover(function () {
        $(this).effect("shake", { times: 1 }, 1000);
    });
});
//end shake effect code.



    //tooltip follows mouse on index.html
    let tooltipSpan = document.querySelector("#tooltip-span");
    window.onmousemove = function(move){
        let x = move.clientX,
            y = move.clientY;
            tooltipSpan.style.top = (y + 20) + 'px';
            tooltipSpan.style.left = (x + 20) + 'px';
    };
    //end tooltip hover



//Bar Graph in index.html page.
let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',
    // The data for the graph. Add additional fields in "labels" along with "data".
    data: {
        labels: ["HTML", "Css", "Sass", "Grid", "Flexbox", "Bootstrap", "Javascript", "React.js", "jQuery.js", "Node.js", "Angular.js", "Photoshop"],
        datasets: [{
            label: "Professional Skills",
            backgroundColor: ['crimson', '#f57c00', 'gold', 'yellow', 'lime', '#009700', '#02d378', '#01c2ca', '#0084ea', '#004eff', '#1c25cf', '#6600ff'],
            borderColor: 'rgb(99, 99, 132)',
            data: [80, 90, 45, 70, 60, 60, 55, 35, 60, 45, 50, 55],
        }]
    },
    // Configuration options go here
    options: {
        responsive: true,
        maintainAspectRation: false,
        legend: {
            labels: {
                boxWidth: 0,
                fontSize: 16
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontSize: 14,
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                    fontSize: 12
                }
            }]
        }


    }
});
//end bar graph code.


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

