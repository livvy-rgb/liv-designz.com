<form method="post" action="email.php">
<textarea name="message"></textarea>
<input type="submit">
</form>

<?php
if($_POST["Message"]) {
mail("john@johndoe.com", "Here is the sample subject line",
$_POST["Insert Your Message"]. "From: jane@janedoe.com");
}
?>