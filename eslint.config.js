import eslintConfig from '@antfu/eslint-config'

export default eslintConfig({
  rules: {
    'antfu/top-level-function': 'off',
    'no-console': 'off'
  },
  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: false,
    overrides: {
      'style/comma-dangle': 'error',
      'style/max-statements-per-line': 'off'
    }
  },

  vue: {
    overrides: {
      'vue/block-order': ['error', {
        order: [
          'template',
          'script',
          'style'
        ]
      }],
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/max-attributes-per-line': ['error', {
        singleline: {
          max: 3
        },
        multiline: {
          max: 1
        }
      }],
      'vue/v-slot-style': ['error', {
        atComponent: 'shorthand',
        default: 'shorthand',
        named: 'shorthand'
      }]

    }
  },
  typescript: {
    overrides: {
      'ts/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],
          prefix: ['I']
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase']
        }
      ]
    }
  },
  ignores: ['node_modules', 'dist', 'public']
})
