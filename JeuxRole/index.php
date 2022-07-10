<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="styles.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gl-matrix/2.8.1/gl-matrix-min.js"
      integrity="sha512-zhHQR0/H5SEBL3Wn6yYSaTTZej12z0hVZKOv3TwCUXT1z5qeqGcXJLLrbERYRScEDDpYIJhPC1fk31gqR783iQ=="
      crossorigin="anonymous" defer>
    </script>
    <script src="cube3d.js" defer></script>
  <title>EnokSethr</title>
</head>
<body>
  <header>
    <label for="checkbox" class="hamburger">
    <input type="checkbox" id="checkbox">
    <span class="line line--top"></span>
    <span class="line line--left"></span>
    <span class="line line--bottom"></span>
    <span class="line line--right"></span>
    
    <nav class="panel-1">
      <ul class="flip">
        <li class="button-85">Perso</li>
        <li class="button-85">Quêtes</li>
        <li class="button-85">Grimoire</li>
        <li class="button-85">Pouvoires</li>
        <li class="button-85">Réglages</li>
        <li class="button-85">Sac</li>
      </ul>
    </nav>

  </label>
  </header>
  <div class="barre-refresh"></div>

  <main>
    <canvas id="glcanvas" width="1280px" height="640px"></canvas>
  </main>
  <footer>
    
  </footer>


</body>

</html>
