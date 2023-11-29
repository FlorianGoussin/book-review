<?php
/**
 * Plugin Name:       Fgc Book Review
 * Description:       Book Review Block
 * Requires PHP:      7.4
 * Version:           0.1.0
 * Author:            Florian Goussin
 * Text Domain:       fgc_book_review
 *
 * @package           fgc-blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function fgc_book_review_fgc_book_review_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'fgc_book_review_fgc_book_review_block_init' );
