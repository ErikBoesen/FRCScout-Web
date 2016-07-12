<?php
    // Catch JSON data
    $json = $_POST['json'];

    // Make sure input is valid JSON (it should be)
    if (json_decode($json) != null) {
        // Open up file, prepare for writing
        $file = fopen('data.json','a+');
        // Append new JSON data to the end of file.
        fwrite($file, $json);
        // Close file.
        fclose($file);
    }
    else {
        // Run when invalid JSON has been submitted.
    }
?>