<!DOCTYPE html>
<html>
<head>
    <title>
    <?php
    if (isset($title)) {
        echo $title;
    } else {
        echo "NOTITLE";
    } 
    ?>
    </title>
    <meta charset="UTF-8">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
</head>

<body>

<style>
    @media all and (min-width: 991px) {
        #mainMenu .navbar-nav .vertical-line::after {
            content:'|';
        }
    }
    @media all and (max-width: 991px) {
        #mainMenu .navbar-nav .vertical-line {
            display: none;
        }
    }
</style>

