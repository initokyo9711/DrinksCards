<?php

// Force error reporting
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Ensure vendor exists
if (!file_exists(__DIR__ . '/../vendor/autoload.php')) {
    die("<h1>Vendor folder missing!</h1><p>Vercel failed to run 'composer install' during build.</p>");
}

// Bootstrap Laravel
require_once __DIR__ . '/../vendor/autoload.php';

// Sync directories
$tmpDirs = ['/tmp/views', '/tmp/sessions', '/tmp/cache'];
foreach ($tmpDirs as $dir) {
    if (!is_dir($dir)) @mkdir($dir, 0777, true);
}

// Create the application
$app = require_once __DIR__ . '/../bootstrap/app.php';

// Resolve and capture request
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);
$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
);
$response->send();
$kernel->terminate($request, $response);
