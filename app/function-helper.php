<?php
  


  function setOperatorHash(){
      $hashMap = array(
          "+"=>0,
          "-"=>0,
          "*"=>1,
          "/"=>1,
      );
      return $hashMap;
  }

  function isNumber($str){
      switch($str){
          case "0":
              $result = 0;
              break;
          case "1":
              $result = 1;
              break;
          case "2":
              $result = 2;
              break;
          case "3":
              $result = 3;
              break;
          case "4":
              $result = 4;
              break;
          case "5":
              $result = 5;
              break;
          case "6":
              $result = 6;
              break;
          case "7":
              $result = 7;
              break;
          case "8":
              $result = 8;
              break;
          case "9":
              $result = 9;
              break;
          default:
              $result = null;
      }
      return $result;
  }

  
  function calculatorHelper($or1, $or2, $ope){
    switch($ope){
        case "+":
            $result = $or1 + $or2;
            break;
        case "-":
            $result = $or1 - $or2;
            break;
        case "*":
            $result = $or1 * $or2;
            break;
        case "/":
            $result = floor($or1 / $or2);
            break;
    }
    return $result;
  }

?>