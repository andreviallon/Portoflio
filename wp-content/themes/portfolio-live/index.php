<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package portfolio
 */

get_header(); ?>
	<?php include 'menu.php';?>
	<?php include 'frontpage.php';?>
				<div class="container">
				<div class="row">
					<div id="primary" class="content-area">
						<main id="main" class="site-main">
							<?php include 'portfolio.php';?>
							<?php include 'process.php';?>
							<?php include 'about.php';?>
							<?php include 'contact.php';?>	
						</main>
						<!-- #main -->
					</div>
					<!-- #primary -->
				</div>
			</div>
	<?php
get_sidebar();
get_footer();