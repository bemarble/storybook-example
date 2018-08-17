import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Button } from './index.js';

storiesOf('Atoms', module)
  .addDecorator(withKnobs)
  .add('button', withInfo({
      text: 'String or React Element with docs about my component',
      inline: true
    })(() =>
    <div style={{display: "flex"}}>
      <Button onClick={action('kzrb clicked')}>kzrb</Button>
    </div>
  ))
  .add('button primary', withInfo({
      text: 'String or React Element with docs about my component',
      inline: true
    })(() =>
    <div style={{display: "flex"}}>
      <Button primary onClick={action('kzrb clicked')}>kzrb</Button>
    </div>
  ))
