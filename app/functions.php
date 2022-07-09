<?php
  require_once('function-helper.php');
  require_once('node-class.php');

  
  function calculator($or, $ope, $revor, $revope, $hashMap){
    $revor->push($or->pop());
    $revor->push($or->pop());
    $revope->push($ope->pop());

    if($revope->peek() == ")"){
        $revope->pop();
        $revope->push($ope->pop());
        while($ope->peek() != "("){
            $revor->push($ope->pop());
            $revope->push($or->pop());
        }
        $ope->pop();
    } else {
        while($ope->peek() != null && $hashMap[$revope->peek()] == $hashMap[$ope->peek()]){
            $revor->push($ope->pop());
            $revope->push($or->pop());
        }
    }


    while($revope->peek() != null){
        $revor->push(calculatorHelper($revor->pop(), $revor->pop(), $revope->pop()));
    }
    $or->push($revor->pop());
  }

  function expressionParenthesisParser($expression){
    $expression = strval(str_replace(" ", "", $expression));
    $operand = new Stack();
    $operator = new Stack();
    $reverseOperand = new Stack();
    $reverseOperator = new Stack();
    $hashMap = setOperatorHash();
    $isParenthese = [];
    $parenthese_on = false;

    for ($i = 0; $i < strlen($expression); $i++){
        $str = $expression[$i];
        // echo $str;
        if (!is_null(isNumber($str))){
            // print("check1").PHP_EOL;
            $j = $i+1;
            if($j < strlen($expression)){
              while(isNumber($expression[$j])){
                  // print("check2").PHP_EOL;
                  $str .= $expression[$j];
                  $j++;
              }
            }

            $i = $j-1;
            $operand->push(intval($str));
        } else {
            if ($operator->peek() == null || $operator->peek() != null && $hashMap[$operator->peek()] < $hashMap[$str] || $parenthese_on){
                if ($str == ")") {
                    // print("check3").PHP_EOL;
                    $operator->push($str);
                    calculator($operand, $operator, $reverseOperand, $reverseOperator, $hashMap);
                    $isParenthese["("]--;
                    $parenthese_on = $isParenthese["("] == 0 ? false : true;
                } else {
                    // print("check4").PHP_EOL;
                    $operator->push($str);
                }

            } elseif ($str == "("){
                // print("check5").PHP_EOL;
                $parenthese_on = true;
                if ($isParenthese["("] == null) $isParenthese["("] = 1;
                else $isParenthese["("]++;

                $operator->push($str);
            } else {
                // print("check6").PHP_EOL;
                calculator($operand, $operator, $reverseOperand, $reverseOperator, $hashMap);
                $operator->push($str);
            }
        }
    }

    while($operator->peek() != null){
        // print("check7").PHP_EOL;
        calculator($operand, $operator, $reverseOperand, $reverseOperator, $hashMap);
    }

    return $operand->peek() == null ? 0 : $operand->pop();
  }


?>