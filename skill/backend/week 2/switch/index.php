<?php
$maand = data(format: 'm');
switch ($maand) {
    case 1:
        echo "january";
        break
    case 2:
        echo "february";
        break
    case 3:
        echo "maart";
        break
    case 4:
        echo "april";
        break
    case 5:
        echo "mei";
        break
    case 6:
        echo "juni";
        break
    case 7:
        echo "juli";
        break
    case 8:
        echo "augustis";
        break
    case 9:
        echo "september";
        break
    case 10:
        echo "october";
        break
    case 11:
        echo "november";
        break
    case 12:
        echo "december";
        break
    default
        echo "onbekende maand"
}
?>