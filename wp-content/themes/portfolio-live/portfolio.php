<div id="portfolio" class="section-title-container">
    <div class="section-title-before"></div>
    <h2 class="section-title">Portfolio</h2>
</div>
<div class="portfolio">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-xs-offset-0 col-md-8 col-md-offset-2">
                <?php
                    if ( have_posts() ) :
                        if ( is_home() && ! is_front_page() ) : ?>
                            <header>
                                <h1 class="page-title screen-reader-text">
                                    <?php single_post_title(); ?>
                                </h1>
                            </header>
                            <?php
                                endif;
                                /* Start the Loop */
                                while ( have_posts() ) : the_post();
                                    /*
                                    * Include the Post-Format-specific template for the content.
                                    * If you want to override this in a child theme, then include a file
                                    * called content-___.php (where ___ is the Post Format name) and that will be used instead.
                                    */
                                    get_template_part( 'template-parts/content', get_post_format() );
                                endwhile;
                                the_posts_navigation();
                                else :
                                    get_template_part( 'template-parts/content', 'none' );
                                endif; 
                            ?>
            </div>
        </div>
    </div>
</div>
