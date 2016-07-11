<?php
    $json = $_POST['json'];

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