import Button from './Button';
import { storiesOf } from '@storybook/react';
import { Meta, Story } from '@storybook/addon-docs/blocks';

<Meta
  title='Button'
  parameters={{
    component: Button,
    foo: 1,
    bar: 2,
  }} />

<Story name='with kind parameters'><Button label='The Button' /></Story>