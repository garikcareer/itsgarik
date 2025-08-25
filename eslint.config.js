import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import {FlatCompat} from '@eslint/eslintrc'
import path from 'path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname
})

export default tseslint.config([
    js.configs.recommended,
    ...compat.config({
        extends: [
            'plugin:react/recommended',
            'plugin:react-hooks/recommended'
        ]
    }),
    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            'react-refresh': reactRefresh
        },
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: ['./tsconfig.json'],
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true
                }
            },
            globals: {
                ...globals.browser,
                ...globals.es2021
            }
        },
        rules: {
            'react-refresh/only-export-components': [
                'warn',
                {allowConstantExport: true}
            ]
        }
    }
])