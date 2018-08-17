import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { MainParts } from './index.js';

storiesOf('Ornanisms', module)
  .add('MainParts', () =>
    <div style={{display: "flex"}}>
      <MainParts />
    </div>
  )
