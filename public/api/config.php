<?php
// Database and mail configuration for backend endpoints

// MySQL credentials (phpMyAdmin)
$DB_HOST = getenv('DB_HOST') ?: '127.0.0.1';
$DB_NAME = getenv('DB_NAME') ?: 'juxtrx_portal';
$DB_USER = getenv('DB_USER') ?: 'root';
$DB_PASS = getenv('DB_PASS') ?: '';
$DB_PORT = getenv('DB_PORT') ?: '3306';

// Notification email
$SITE_TO_EMAIL = getenv('SITE_TO_EMAIL') ?: 'info@juxtrx.ke';
$SITE_FROM_EMAIL = getenv('SITE_FROM_EMAIL') ?: 'no-reply@juxtrx.ke';

// Optional SMTP (recommended on local/dev where mail() is disabled)
$SMTP_HOST = getenv('SMTP_HOST') ?: '';
$SMTP_PORT = intval(getenv('SMTP_PORT') ?: '587');
$SMTP_USER = getenv('SMTP_USER') ?: '';
$SMTP_PASS = getenv('SMTP_PASS') ?: '';
$SMTP_SECURE = getenv('SMTP_SECURE') ?: 'tls'; // tls or ssl

function db(): PDO {
  global $DB_HOST, $DB_NAME, $DB_USER, $DB_PASS, $DB_PORT;
  static $pdo = null;
  if ($pdo === null) {
    $dsn = "mysql:host={$DB_HOST};port={$DB_PORT};dbname={$DB_NAME};charset=utf8mb4";
    $pdo = new PDO($dsn, $DB_USER, $DB_PASS, [
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
  }
  return $pdo;
}

function smtp_send(string $to, string $subject, string $body, string $from, string $replyTo = ''): bool {
  global $SMTP_HOST, $SMTP_PORT, $SMTP_USER, $SMTP_PASS, $SMTP_SECURE;
  if (!$SMTP_HOST || !$SMTP_USER || !$SMTP_PASS) return false;
  $newline = "\r\n";
  $transport = ($SMTP_SECURE === 'ssl') ? 'ssl://' : '';
  $fp = @fsockopen($transport . $SMTP_HOST, $SMTP_PORT, $errno, $errstr, 15);
  if (!$fp) return false;
  $expect = function($code) use ($fp) {
    $resp = '';
    while ($line = fgets($fp, 515)) { $resp .= $line; if (substr($line,3,1) === ' ') break; }
    return str_starts_with($resp, (string)$code);
  };
  $write = function($cmd) use ($fp, $newline) { fputs($fp, $cmd.$newline); };
  if(!$expect(220)) { fclose($fp); return false; }
  $ehlo = 'EHLO juxtrx.local';
  $write($ehlo); if(!$expect(250)) { fclose($fp); return false; }
  if($SMTP_SECURE === 'tls') { $write('STARTTLS'); if(!$expect(220)) { fclose($fp); return false; } stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_TLS_CLIENT); $write($ehlo); if(!$expect(250)) { fclose($fp); return false; } }
  $write('AUTH LOGIN'); if(!$expect(334)) { fclose($fp); return false; }
  $write(base64_encode($SMTP_USER)); if(!$expect(334)) { fclose($fp); return false; }
  $write(base64_encode($SMTP_PASS)); if(!$expect(235)) { fclose($fp); return false; }
  $write('MAIL FROM:<'.$from.'>'); if(!$expect(250)) { fclose($fp); return false; }
  $write('RCPT TO:<'.$to.'>'); if(!$expect(250)) { fclose($fp); return false; }
  $write('DATA'); if(!$expect(354)) { fclose($fp); return false; }
  $headers = 'From: '.$from.$newline;
  if ($replyTo) $headers .= 'Reply-To: '.$replyTo.$newline;
  $headers .= 'MIME-Version: 1.0'.$newline.'Content-Type: text/plain; charset=UTF-8'.$newline;
  $msg = $headers.'Subject: '.$subject.$newline.$newline.$body.$newline.'.';
  $write($msg); if(!$expect(250)) { fclose($fp); return false; }
  $write('QUIT');
  fclose($fp);
  return true;
}

function notify(string $subject, string $body, string $replyTo = ''): void {
  global $SITE_FROM_EMAIL, $SITE_TO_EMAIL, $SMTP_HOST;
  // Try SMTP if configured; otherwise fall back to mail()
  $sent = false;
  if ($SMTP_HOST) {
    $sent = smtp_send($SITE_TO_EMAIL, $subject, $body, $SITE_FROM_EMAIL, $replyTo);
  }
  if (!$sent) {
    $headers = "From: {$SITE_FROM_EMAIL}\r\n";
    if ($replyTo) $headers .= "Reply-To: {$replyTo}\r\n";
    @mail($SITE_TO_EMAIL, $subject, $body, $headers);
  }
}

// Send to an arbitrary recipient (used for auto-ack to the user)
function send_email_to(string $to, string $subject, string $body, string $replyTo = ''): void {
  global $SITE_FROM_EMAIL, $SMTP_HOST;
  $sent = false;
  if ($SMTP_HOST) {
    $sent = smtp_send($to, $subject, $body, $SITE_FROM_EMAIL, $replyTo);
  }
  if (!$sent) {
    $headers = "From: {$SITE_FROM_EMAIL}\r\n";
    if ($replyTo) $headers .= "Reply-To: {$replyTo}\r\n";
    @mail($to, $subject, $body, $headers);
  }
}

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');


