<?php 
/*
Plugin Name: Action Hook Plugin Example
Description: Welcome to WordPress plugin development.
Plugin URI:  http://portfolioandreviallon.com
Author:      Andre Viallon
Version:     1.0
License:     GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.txt
*/

add_action('admin_menu', 'my_action_hook');
 
function my_action_hook(){
        add_menu_page( 'Form Plugin Page', 'Form panel', 'manage_options', 'test-plugin', 'init' );
}
 
function init(){
?>

<form action="index.php" method ="POST">
  <br>
  Name:<br>
  <input type="text" name="Name" value="">
  <br>
  Email:<br>
  <input type="email" name="Email" value=""email>
  <br>
   Message:<br>
  <textarea rows="4" cols="50"></textarea>
  <br><br>
  <input type="submit" value="Submit">
</form> 

<?php  
}
 ?>
