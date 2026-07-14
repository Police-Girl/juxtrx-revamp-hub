<?php
declare(strict_types=1);
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

function sanitize(string $value): string {
  return htmlspecialchars(strip_tags(trim($value)), ENT_QUOTES, 'UTF-8');
}

$firstName = sanitize($_POST['firstName'] ?? '');
$lastName = sanitize($_POST['lastName'] ?? '');
$email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL) ? $_POST['email'] : '';
$phone = sanitize($_POST['phone'] ?? '');
$service = sanitize($_POST['service'] ?? '');
$message = sanitize($_POST['message'] ?? '');

if (!$firstName || !$lastName || !$email || !$message) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
  exit;
}

try {
  $pdo = db();
  $stmt = $pdo->prepare('INSERT INTO contacts (created_at, first_name, last_name, email, phone, service, message) VALUES (NOW(), :first_name, :last_name, :email, :phone, :service, :message)');
  $stmt->execute([
    ':first_name' => $firstName,
    ':last_name' => $lastName,
    ':email' => $email,
    ':phone' => $phone,
    ':service' => $service,
    ':message' => $message,
  ]);
} catch (Throwable $e) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'DB error']);
  exit;
}

$subject = 'New Contact Submission - Juxt Rx';
$body = "New inquiry from {$firstName} {$lastName}\n\nEmail: {$email}\nPhone: {$phone}\nService: {$service}\n\nMessage:\n{$message}\n";
notify($subject, $body, $email);

// Optional auto-acknowledgment to the sender
$ackSubject = 'We received your message - Juxt Rx';
$ackBody = "Hi {$firstName},\n\nThanks for reaching out to Juxt Rx. We have received your message and will respond soon.\n\nRegards,\nJuxt Rx";
send_email_to($email, $ackSubject, $ackBody);

echo json_encode(['ok' => true]);


