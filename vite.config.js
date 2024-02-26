import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {
  return {
    resolve: {
      alias: {
       // I needed this to make dev mode work.
        'react/jsx-runtime': 'react/jsx-runtime.js',
      },
    },
    plugins: [react({
      babel: {
        plugins: [
          ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }],
        ]
      },
    })],
  };
});
