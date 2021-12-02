const excludeFiles = [
  'cache',
  'jwt',
  'storage',
  'transaction-manager',
  'utils',
  'promise-utils',
  'user-agent',
  'api',
  'http'
];

module.exports = {
  name: '@auth0/auth0-spa-js',
  out: './docs/',
  readme: './README.MD',
  entryPoints: 'src',
  exclude: [
    '**/__tests__/**',
    '**/cypress/**',
    '**/node_modules/**',
    '**/__mocks__/**',
    ...excludeFiles.map(f => `./src/${f}.ts`)
  ],
  externalPattern: ['**/node_modules/**'],
  excludeExternals: true,
  excludePrivate: true,
  hideGenerator: true
};
