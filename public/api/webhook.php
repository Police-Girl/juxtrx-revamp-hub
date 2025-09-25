<?php
// Generic webhook to log inbound communications from providers (e.g., Twilio/Africa's Talking)
declare(strict_types=1);
require_once __DIR__ . '/config.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

// Accept both GET and POST payloads
$payload = $_POST + $_GET;

// Normalize fields common to SMS/Call providers
$type = strtolower($payload['type'] ?? ($payload['SmsSid'] ? 'sms' : ($payload['CallSid'] ? 'call' : 'unknown')));
$from = $payload['from'] ?? $payload['From'] ?? $payload['callerNumber'] ?? '';
$to = $payload['to'] ?? $payload['To'] ?? $payload['destinationNumber'] ?? '';
$sender = $payload['sender'] ?? $payload['SenderId'] ?? '';
$subject = $payload['subject'] ?? '';
$message = $payload['message'] ?? $payload['Body'] ?? $payload['text'] ?? '';

try {
  $pdo = db();
  $stmt = $pdo->prepare('INSERT INTO communications (created_at, type, from_number, to_number, sender, subject, message) VALUES (NOW(), :type, :from, :to, :sender, :subject, :message)');
  $stmt->execute([
    ':type' => in_array($type, ['call','sms','whatsapp','email']) ? $type : 'sms',
    ':from' => $from,
    ':to' => $to,
    ':sender' => $sender,
    ':subject' => $subject,
    ':message' => $message,
  ]);
} catch (Throwable $e) {
  http_response_code(500);
  echo json_encode(['ok' => false]);
  exit;
}

echo json_encode(['ok' => true]);


