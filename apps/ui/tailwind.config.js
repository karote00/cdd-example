import { TailwindConfig } from '@cdd-example/utils'

export default {
  ...TailwindConfig,
  safelist: [
    {
      pattern: /^h-/
    }
  ],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}']
}
