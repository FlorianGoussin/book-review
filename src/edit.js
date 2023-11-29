/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	RichText
} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
// import { useSelect } from "@wordpress/data";
// import { useState } from '@wordpress/element';

import { TextControl, TextareaControl } from '@wordpress/components';

export default function Edit(props) {
	const {
		attributes: { bookReviewTitle, bookReviewContent },
		setAttributes,
	} = props;

	const handleTitleChange = (value) => {
		setAttributes({ bookReviewTitle: value });
	};
	const handleContentChange = (value) => {
		setAttributes({ bookReviewContent: value });
	};

	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			{/* <h3>{__('Book Review Title', 'fgc-blocks')}</h3>
			<RichText
				tagName="h2"
				placeholder={__(
					'Write a title for the book review',
					'fgc-blocks'
				)}
				value={bookReviewTitle}
				onChange={handleTitleChange}
			/>
			<h3>{__('Book Review Content', 'fgc-blocks')}</h3>
			<RichText
				tagName="h2"
				placeholder={__(
					'Write the book review',
					'fgc-blocks'
				)}
				value={bookReviewContent}
				onChange={handleContentChange}
			/> */}
			<TextControl
				label="Book Review Title"
				value={bookReviewTitle}
				onChange={handleTitleChange}
			/>
			<TextareaControl
				label="Book Review"
				value={bookReviewContent}
				onChange={handleContentChange}
			/>
		</div>
	);
}
