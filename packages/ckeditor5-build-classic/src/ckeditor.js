/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';

import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	Alignment,
	SimpleUploadAdapter,
	FontColor
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'fontColor',
			'link',
			'bulletedList',
			'numberedList',
			'|',
			'indent',
			'outdent',
			'alignment',
			'|',
			'imageUpload',
			'blockQuote',
			'insertTable',
			// 'mediaEmbed',
			'undo',
			'redo'
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	simpleUpload:{
		uploadUrl:'/dash/media'
	},
	fontColor:{
		colors: [
			{
				color: "hsl(0,0%,0%)",
				label: "Black"
			},
			{
				color: "hsl(0,0%,30%)",
				label: "Dim Grey"
			},
			{
				color: "hsl(0,0%,60%)",
				label: "Grey"
			},
			{
				color: "hsl(0,0%,90%)",
				label: "Light Grey"
			},
			{
				color: "hsl(0,0%,100%)",
				label: "White",
				hasBorder: true
			},
			{
				color: "hsl(0,75%,60%)",
				label: "Red"
			},
			{
				color: "hsl(30,75%,60%)",
				label: "Orange"
			},
			{
				color: "hsl(60,75%,60%)",
				label: "Yellow"
			},
			{
				color: "hsl(90,75%,60%)",
				label: "Light Green"
			},
			{
				color: "hsl(120,75%,60%)",
				label: "Green"
			},
			{
				color: "hsl(150,75%,60%)",
				label: "Aquamarine"
			},
			{
				color: "hsl(180,75%,60%)",
				label: "Turquoise"
			},
			{
				color: "hsl(210,75%,60%)",
				label: "Light Blue"
			},
			{
				color: "hsl(240,75%,60%)",
				label: "Blue"
			},
			{
				color: "hsl(270,75%,60%)",
				label: "Purple"
			},
			{
				color: "hsl(300,75%,60%)",
				label: "Pink"
			}
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
