<?php
get_header();
?>

	<main id="primary" class="single-project">
		<?php
		while ( have_posts() ) :
			the_post();

			get_template_part( 'template-parts/content', get_post_type() );
		endwhile; // End of the loop.
		?>
	</main><!-- #main -->

<?php
get_footer();
?>