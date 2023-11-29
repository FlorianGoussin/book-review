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
import { useBlockProps } from '@wordpress/block-editor';

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
			<TextControl
				label={__('Book Review Title', 'fgc-blocks')}
				value={bookReviewTitle}
				onChange={handleTitleChange}
			/>
			<TextareaControl
				label={__('Book Review', 'fgc-blocks')}
				value={bookReviewContent}
				onChange={handleContentChange}
			/>
		</div>
	);
}
