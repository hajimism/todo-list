import type { Meta, StoryObj } from "@storybook/react";

import RootLayout from "@/app/layout";
import Page from "@/app/page";

const meta: Meta<typeof Page> = {
  title: "pages/Home",
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <RootLayout>
        <Story />
      </RootLayout>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {};
