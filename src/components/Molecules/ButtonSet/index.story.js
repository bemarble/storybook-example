import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { ButtonSet } from './index.js';

storiesOf('Molecules', module)
  .add('button set', () =>
    <div style={{display: "flex"}}>
      <ButtonSet />
    </div>
  )
