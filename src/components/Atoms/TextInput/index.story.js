import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs';
import { TextInput } from './index.js';

storiesOf('Atoms', module)
  .addDecorator(withKnobs)
  .add('TextInput', () =>
    <TextInput label={text('label', 'kzrb LT 大会')} />
  )
