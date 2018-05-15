<?php
// check if fields passed are empty
if(empty($_POST['name'])   ||
   empty($_POST['phone']))
   {
echo "Введите данные!";
return false;
   }

else
{
echo 'Сообщение отправлено!';
}

$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// create email body and send it 
$to = 'ascent2005@ukr.net'; // put your email
$email_subject = "Вам отправлена форма - Записаться на прием: $name";
$email_body = "Заполнена форма \"Записаться на прием\". \n\n".
 "Данные отправителя:\n\nИмя: $name \n".
 "Телефон: $phone \n".
 "Сообщение: $message".
$headers = "From: contact@mail.com\n";
$headers .= "Reply-To:"; 
mail($to,$email_subject,$email_body,$headers);
return true; 
?>