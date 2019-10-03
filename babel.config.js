module.exports = function bpe(api) {
  //   api.cache(true);
  const presets = [
    'babel-preset-expo',
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv'
  ];
  const plugins = [];

  const envDevelopment = {
    presets: presets,
    plugins: [
      '@babel/transform-react-jsx-source',
      [
        'module-resolver',
        {
          root: './',
          alias: {
            i18n: './i18n'
          }
        }
      ]
    ]
  };

  if (api.env(['development', 'test'])) {
    return envDevelopment;
  }

  return {
    presets: presets,
    plugins: plugins
  };
};
