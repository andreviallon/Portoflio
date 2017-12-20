<?php
/*
Plugin Name: Filter Hook Plugin Example
Description: Welcome to WordPress plugin development.
Plugin URI:  http://portfolioandreviallon.com
Author:      Andre Viallon
Version:     1.0
License:     GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.txt
*/

//FILTER HOOK CONTENT AFTER EACH POST
function my_filter_hook_example($content){
    $content = $content . '<p>This is a custom content after every post</p>';
    return $content;
}
add_filter('the_content', 'my_filter_hook_example');


