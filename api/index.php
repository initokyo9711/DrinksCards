<?php

// Force error reporting to reveal the crash reason
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Catcher for exceptions
set_exception_handler(function ($e) {
    echo "<div style='background:#fde8e8; color:#9b1c1c; padding:20px; border-radius:8px; font-family:sans-serif;'>";
    echo "<h1>PHP Exception</h1>";
    echo "<p><b>Message:</b> " . $e->getMessage() . "</p>";
    echo "<p><b>File:</b> " . $e->getFile() . " on line " . $e->getLine() . "</p>";
    echo "<pre style='background:#fff; padding:10px; border:1px solid #ddd; overflow:auto;'>" . $e->getTraceAsString() . "</pre>";
    echo "</div>";
});

// Catcher for fatal errors
register_shutdown_function(function () {
    $error = error_get_last();
    if ($error && ($error['type'] === E_ERROR || $error['type'] === E_PARSE || $error['type'] === E_COMPILE_ERROR)) {
        echo "<div style='background:#fff5f5; color:#c53030; padding:20px; border:2px solid #feb2b2; font-family:sans-serif;'>";
        echo "<h1>PHP Fatal Error</h1>";
        echo "<pre>";
        print_r($error);
        echo "</pre>";
        echo "</div>";
    }
});

// Regular bootstrap
require __DIR__ . '/../vendor/autoload.php';

$tmpDirs = ['/tmp/views', '/tmp/sessions', '/tmp/cache'];
foreach ($tmpDirs as $dir) {
    if (!is_dir($dir)) @mkdir($dir, 0777, true);
}

// Bootstrap Laravel
$app = require_once __DIR__ . '/../bootstrap/app.php';

// Handle request
$app->handleRequest(\Illuminate\Http\Request::capture());
