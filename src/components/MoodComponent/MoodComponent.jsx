import React, { useState, useCallback } from 'react';

import LoginComponent from '@components/LoginComponent';

import CurrentMoodComponent from './CurrentMoodComponent';
import MoodSelectComponent from './MoodSelectComponent';
import EditCustomMoodComponent from './EditCustomMoodComponent';

const MoodComponent = () => {
	const [showSelect, setShowSelect] = useState(false);
	const toggleSelect = useCallback(() => setShowSelect(!showSelect), [showSelect]);
	const hideSelect = useCallback(() => setShowSelect(false), []);

	return (
		<div className="mood-component">
			<LoginComponent />

			<div>Page mood:</div>
			<CurrentMoodComponent toggleSelect={toggleSelect} />
			<EditCustomMoodComponent />

			{showSelect && <MoodSelectComponent hideSelect={hideSelect} />}
		</div>
	);
};

export default MoodComponent;
