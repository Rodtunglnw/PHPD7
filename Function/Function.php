<?php
	function myFunction($num1,$num2) {
		$result = $num1 * $num2;
        return $result;
	}

    function checkCondition(int $num1,int $num2,bool $boolean) {
       
        if ($num1 >= 100 && $num1 <= 150 && $num2 > 200 && $boolean == true) {
            $endResults = 200;
        } else if ($num1 >= 151 && $num1 <= 200 && $num2 >= 100 && $num2 <= 199 && $boolean == false) {
            $endResults = 300;
        } else {
            $endResults = 400;
        }
        return $endResults;
        // switch (true) {
            
        //     case ($num1 >= 100 && $num1 <= 150 && $num2 > 200 && $boolean == true):
        //         echo "Result = 200";
        //         break;
        //     case ($num1 >= 151 && $num1 <= 200 && $num2 >= 100 && $num2 <= 199 && $boolean == false):
        //         echo "Result = 300";
        //     default:
        //         echo "Result = 400";
        //         break;
        // }
    }

    function randomNumber(int $min, int $max) {
        $randnum = rand($min,$max);
        if ($randnum < 50) {
            return $randnum . "F";
        } else if ($randnum < 60) {
            return $randnum . "C";
        } else if ($randnum < 70) {
            return $randnum . "D";
        } else if ($randnum < 80) {
            return $randnum . "B";
        } else if ($randnum > 80) {
            return $randnum . "A";
        }
    }
?>