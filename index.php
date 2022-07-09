<?php
  require_once('app/functions.php');

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator app</title>
    <link rel="stylesheet" href="css/bootstrap.css">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  </head>
  <body>
    <div class="container card mx-auto my-3 p-0 w-50">
      <h1 class="card-header text-center bg-dark text-light">Calculation App</h1>

      <!-- Calculator -->
      <form action="" method="post" class="card-body">
        <input type="text" name="formula" id="formula" placeholder="Enter your formula" class="form-control container-fluid">
        <input type="submit" name="submit" hidden>
        <!-- answer area & the formula -->
        <?php if(isset($_POST['submit'])):?>
          <div class="row mt-2 rounded">
            <div class="col text-center border border-1"><?= "Formula=" . $_POST['formula']; ?></div>
            <div class="col text-center border border-1"><?= "Ans=" . expressionParenthesisParser($_POST['formula']); ?></div>
          </div>
        <?php endif; ?>
        <!-- Num-pad -->
        <div class="container mt-3 w-75 mx-auto">
          <!-- first-row -->
          <div class="row mb-3">
            <div class="col"><button type="submit" name="key" value="(" class="btn btn-secondary w-100" disabled>(</button></div>
            <div class="col"><button type="submit" name="key" value=")" class="btn btn-secondary w-100" disabled>)</button></div>
            <div class="col"><button type="submit" name="key" value="%" class="btn btn-secondary w-100" disabled>%</button></div>
            <div class="col"><button type="submit" name="key" value="ac" class="btn btn-secondary w-100" disabled>AC</button></div>
          </div>
          <!-- second-row -->
          <div class="row mb-3">
            <div class="col"><button type="submit" name="key" value="7" class="btn w-100" style="background-color:#e8edea;" disabled>7</button></div>
            <div class="col"><button type="submit" name="key" value="8" class="btn w-100" style="background-color:#e8edea;" disabled>8</button></div>
            <div class="col"><button type="submit" name="key" value="9" class="btn w-100" style="background-color:#e8edea;" disabled>9</button></div>
            <div class="col"><button type="submit" name="key" value="/" class="btn btn-secondary w-100" disabled>÷</button></div>
          </div>
          <!-- third-row -->
          <div class="row mb-3">
            <div class="col"><button type="submit" name="key" value="4" class="btn w-100" style="background-color:#e8edea;" disabled>4</button></div>
            <div class="col"><button type="submit" name="key" value="5" class="btn w-100" style="background-color:#e8edea;" disabled>5</button></div>
            <div class="col"><button type="submit" name="key" value="6" class="btn w-100" style="background-color:#e8edea;" disabled>6</button></div>
            <div class="col"><button type="submit" name="key" value="*" class="btn btn-secondary w-100" disabled>×</button></div>
          </div>
          <!-- fourth-row -->
          <div class="row mb-3">
            <div class="col"><button type="submit" name="key" value="1" class="btn w-100" style="background-color:#e8edea;" disabled>1</button></div>
            <div class="col"><button type="submit" name="key" value="2" class="btn w-100" style="background-color:#e8edea;" disabled>2</button></div>
            <div class="col"><button type="submit" name="key" value="3" class="btn w-100" style="background-color:#e8edea;" disabled>3</button></div>
            <div class="col"><button type="submit" name="key" value="-" class="btn btn-secondary w-100" disabled>-</button></div>
          </div>
          <!-- fifth-row -->
          <div class="row mb-3">
            <div class="col"><button type="submit" name="key" value="0" class="btn w-100" style="background-color:#e8edea;" disabled>0</button></div>
            <div class="col"><button type="submit" name="key" value="." class="btn w-100" style="background-color:#e8edea;" disabled>.</button></div>
            <div class="col"><button type="submit" name="key" value="=" class="btn btn-primary w-100" disabled>=</button></div>
            <div class="col"><button type="submit" name="key" value="+" class="btn btn-secondary w-100" disabled>+</button></div>
          </div>
        </div>
      </form>
    </div>

    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    <script src="js/bootstrap.bundle.js"></script>
  </body>
</html>