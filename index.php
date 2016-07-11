<!DOCTYPE html>

<html>

<head>
    <title>Roboscout</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <?php
        $json = $_POST['json'];
        echo $json;

        // Make sure input is valid JSON (it should be)
        if (json_decode($json) != null) {
            $file = fopen('data.json','a+');
            fwrite($file, $json);
            fclose($file);
        }
        else {
            // Run when invalid JSON has been submitted.
            // TODO: Look into why this triggers on initial page load.
        }
    ?>
    <input type="number" id="team" placeholder="Team #">
    <input type="number" id="score" placeholder="Score">
    <input type="number" id="match" placeholder="Match #">
    <button id="submit">Submit</button>
    <button id="reset">Reset</button>
    <script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>
    <script src="script.js"></script>
</body>

</html>