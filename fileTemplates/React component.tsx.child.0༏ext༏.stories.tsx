import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ${NAME} } from './${NAME}';

export default {
  title: '_/${NAME}',
  component: ${NAME},
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ${NAME}>;

const Template: ComponentStory<typeof ${NAME}> = (args) => <${NAME} {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};
