<?php
/**
 * Plugin Name:       Book Review
 * Description:       Book Review Block
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Florian Goussin - FGC
 * License:           MIT
 * Text Domain:       fgc-book-review
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
function fgc_blocks_book_review_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'fgc_blocks_book_review_block_init' );
