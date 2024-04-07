
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Task 6</title>
    <link rel="stylesheet" href="css/common.css" />
  </head>
  <body>
    <p><a href="index.html">Go back</a></p>

    <div class="box">
      <div class="input-box" id="controls">
        <input type="number" min="1" max="100" step="1" />
        <button class="blue" type="button" data-create>Create</button>
        <button class="red" type="button" data-destroy>Destroy</button>
      </div>

      <div class="boxes" id="boxes"></div>
    </div>
    <script src="./js/task-6.js" type="module"></script>
  </body>
</html>