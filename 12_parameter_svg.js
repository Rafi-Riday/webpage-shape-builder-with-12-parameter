    function shape() {

      var HEIGHT = document.documentElement.clientHeight;
      var WIDTH = document.documentElement.clientWidth;

      var H = HEIGHT / 100;
      var W = WIDTH / 100;

      var xy1 = (x1 * W) + ',' + (y1 * H);
      var xy2 = (x2 * W) + ',' + (y2 * H);
      var xy3 = (x3 * W) + ',' + (y3 * H);
      var xy4 = (x4 * W) + ',' + (y4 * H);
      var xy5 = (x5 * W) + ',' + (y5 * H);
      var xy6 = (x6 * W) + ',' + (y6 * H);
      var xy7 = (x7 * W) + ',' + (y7 * H);
      var xy8 = (x8 * W) + ',' + (y8 * H);
      var xy9 = (x9 * W) + ',' + (y9 * H);
      var xy10 = (x10 * W) + ',' + (y10 * H);
      var xy11 = (x11 * W) + ',' + (y11 * H);
      var xy12 = (x12 * W) + ',' + (y12 * H);

      var SA = '<polygon points="' + xy1 + ' ' + xy2 + ' ' + xy3 + ' ' + xy4 + ' ' + xy5 + ' ' + xy6 + ' ' + xy7 + ' ' + xy8 + ' ' + xy9 + ' ' + xy10 + ' ' + xy11 + ' ' + xy12 + '"' + 'style="fill:#24b0ff; stroke:purple; stroke-width:0"/>';

      document.getElementById('shape').setAttribute("height", HEIGHT);
      document.getElementById('shape').setAttribute("width", WIDTH);
      document.getElementById('shape').setAttribute("style", "Background: linear-gradient(45deg, #ff000060, #000066);");

      document.getElementById('shape').innerHTML = SA;
      setTimeout(shape, 100);
    }