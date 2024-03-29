module.exports = {
    stories: [
        '../src/**/__stories__/**.mozaic.*',
        '../src/**/__stories__/**.fronton.*',
        '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'
    ],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-create-react-app']
};
