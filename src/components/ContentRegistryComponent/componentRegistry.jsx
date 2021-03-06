import React from 'react';

import ContentTextComponent from './content-components/ContentTextComponent';
import ContentTitleComponent from './content-components/ContentTitleComponent';
import ContentSubtitleComponent from './content-components/ContentSubtitleComponent';

const TEXT_TYPE = 'text';
const TITLE_TYPE = 'title';
const SUBTITLE_TYPE = 'subtitle';

/* eslint-disable react/jsx-props-no-spreading */
const getComponent = ({
	key,
	type,
	content,
	children,
	...componentProps
}) => {
	switch (type) {
	case TEXT_TYPE:
		return <ContentTextComponent key={key} {...componentProps}>{content || children}</ContentTextComponent>;

	case TITLE_TYPE:
		return <ContentTitleComponent key={key} {...componentProps}>{content || children}</ContentTitleComponent>;

	case SUBTITLE_TYPE:
		return <ContentSubtitleComponent key={key} {...componentProps}>{content || children}</ContentSubtitleComponent>;

	default:
		return <ContentTextComponent key={key} {...componentProps}>{content || children}</ContentTextComponent>;
	}
};

export default getComponent;
/* eslint-enable react/jsx-props-no-spreading */
