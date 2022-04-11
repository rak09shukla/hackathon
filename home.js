//sanket chart for import export
google.charts.load('current', {'packages':['sankey']});
      google.charts.setOnLoadCallback(drawSankeyChart);

      function drawSankeyChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');
        data.addRows([
          [ 'Egypt Wheat Imports 2011', 'Russian Federation', 7],
          [ 'Egypt Wheat Imports 2011', 'France', 1 ],
          [ 'Egypt Wheat Imports 2011', 'Australia', 1 ],
          [ 'Egypt Wheat Imports 2011', 'Ukraine', 0.5 ],
          [ 'Egypt Wheat Imports 2011', 'canada', 0.4 ],
          [ 'Egypt Wheat Imports 2011', 'Romania', 0.2 ],
          [ 'Egypt Wheat Imports 2011', 'Brazil', 0.2 ],
          [ 'Egypt Wheat Imports 2011', 'Belarus', 0.2 ],
        //   [ 'Egypt Wheat Imports 2011', 'Lithuania', 0.2 ],
        //   [ 'Egypt Wheat Imports 2011', 'Germany', 0.1],
        //   [ 'Egypt Wheat Imports 2011', 'Republic of Moldava', 0],
        //   [ 'Egypt Wheat Imports 2011', 'Syria Arab Republic', 0],
        //   [ 'Egypt Wheat Imports 2011', 'Thailand', 0],
        ]);

        // Sets chart options.
        var options = {
          width:400,
        };

        // Instantiates and draws our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('sankey_basic'));
        chart.draw(data, options);
      }

      //pie chart for import exposrt
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Import', 'quantity (in tonnes)'],
          ['USA 28%',  5.85],
          ['Argentina 4%',  1.66],
          ['Belarus 0%', 0.316],
          ['Brazil 1%', 0.0791],
          ['Canada 3%', 0.0791],
          ['France 10%', 0.0791],
          ['Lithunia 1%', 0.0791],
          ['France 36%', 6]
        ]);

      var options = {
        legend: 'none',
        pieSliceText: 'label',
        title: 'Wheat Import Quantity (tonnes), 2011',
        pieStartAngle: 100,
      };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
    }