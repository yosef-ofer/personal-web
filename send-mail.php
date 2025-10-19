<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $to = 'Yosef.Ofer@biu.ac.il'; // change this to your email address
  $subject = 'New message from contact form';
  $message = $_POST['message'];
  $headers = 'From: ' . $_POST['name'] . ' <' . $_POST['email'] . '>' . "\r\n" .
             'Reply-To: ' . $_POST['email'] . "\r\n" .
             'X-Mailer: PHP/' . phpversion();

  if (mail($to, $subject, $message, $headers)) {
    echo 'Thank you for your message!';
  } else {
    echo 'There was a problem sending your message.';
  }
}
?>
