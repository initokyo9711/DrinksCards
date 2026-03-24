<?php

// Ensure relative paths work correctly
require __DIR__ . '/../vendor/autoload.php';

// Initialize temporary directories for Laravel in /tmp (Vercel is read-only)
$tmpDirs = [
    '/tmp/views',
    '/tmp/sessions',
    '/tmp/cache',
];

foreach ($tmpDirs as $dir) {
    if (!is_dir($dir)) {
        @mkdir($dir, 0777, true);
    }
}

// Bootstrap Laravel
$app = require_once __DIR__ . '/../bootstrap/app.php';

// Handle the request
$app->handleRequest(\Illuminate\Http\Request::capture());
