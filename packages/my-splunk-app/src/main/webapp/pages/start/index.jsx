import React from 'react';

import layout from '@splunk/react-page';
import WithThemePlease from '@splunk/with-theme-please';
import { getUserTheme } from '@splunk/splunk-utils/themes';

import { StyledContainer, StyledGreeting } from './StartStyles';

getUserTheme()
    .then((theme) => {
        layout(
            <StyledContainer>
                <StyledGreeting>Hello, from inside MySplunkApp!</StyledGreeting>
                <div>Your component will appear below.</div>
                <WithThemePlease name="from inside WithThemePlease" />
            </StyledContainer>,
            {
                theme,
            }
        );
    })
    .catch((e) => {
        const errorEl = document.createElement('span');
        errorEl.innerHTML = e;
        document.body.appendChild(errorEl);
    });
