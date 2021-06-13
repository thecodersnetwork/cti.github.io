<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$category = $_POST['category'];
$message = $_POST['message'];
$formcontent = "FROM: $name \r\n EMAIL: $email \r\n PHONE: $phone \r\n MESSAGE: $message";
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$subject = "$name has query on $category category";
$requester_message = "Thank you for contacting Custom Timber Industries, We receieved your email."

if ($category=="generic"){
      $headers .= 'From: Info Enquiry <info@customtimber.me>' . "\r\n";
      $to = "info@customtimber.me.test-google-a.com";
      $formformat= nl2br($formcontent);
      mail($to, $subject, $formformat, $headers) or die("Unable to send email, Please try again");
      echo '<script>
            alert("Thank you!!!, We Received Your Request. We will get back to you shortly...");
            window.history.go(-1); 
      </script>';
}
elseif($category=="sales"){
      $headers .= 'From: Sales Enquiry <sales@customtimber.me>' . "\r\n";
      $to = "sales@customtimber.me.test-google-a.com";
      $formformat= nl2br($formcontent);
      mail($to, $subject, $formformat, $headers) or die("Unable to send email, Please try again");
      echo '<script>
            alert("Thank you!!!, We Received Your Request. We will get back to you shortly...");
            window.history.go(-1); 
      </script>';
}
?>

