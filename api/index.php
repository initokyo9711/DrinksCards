<?php

// Enable error reporting for debugging on Vercel
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Ensure vendor exists (this will show a clear error if composer install failed)
if (!file_exists(__DIR__ . '/../vendor/autoload.php')) {
    die('Error: /vendor/autoload.php minimal tidak ditemukan. Pastikan composer install berjalan saat build.');
}

// Ensure APP_KEY is set
if (empty(getenv('APP_KEY')) && empty($_ENV['APP_KEY'])) {
    die('Error: APP_KEY belum di-set di Environment Variables Vercel.');
}

// Forward to Laravel
require __DIR__ . '/../public/index.php';
