<div id="home"class="headline-title-container col-xs-12"> 
    <div class="headline-title">My name is André Viallon</div>
    <br/>
    <div class="headline-title">I'm a</div>
    <div class="pink-bar-offset">
        <div class="header-fix">Frontend / UX Developer</div>
    </div>
    <p class="headline-p">Passionate about creating meaningful solutions to enhance the user’s experience through rich and accessible design.</p>
</div>

<div class="discover">
    <p class="discover-p">scroll to discover</p>
    <div class="discover-bar"></div>
</div>

<div class="col-lg-4 col-md-6 col-sm-12">
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