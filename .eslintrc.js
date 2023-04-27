module.exports = {
  // Eslint 会检测未声明的变量，并发出报错，可以在 globals 中进行变量声明（可以视作env的补充）
  globals: {
    Base: 'readonly',
  },
  // 决定 js 运行在什么环境下，每一个环境都带有一组预定义的全局变量
  env: {
    browser: true, // 浏览器环境中的全局变量
    commonjs: true, // CommonJS 全局变量和 CommonJS 作用域 (用于 Browserify/WebPack 打包的只在浏览器中运行的代码)
    node: true, // Node.js 全局变量和 Node.js 作用域
    es6: true, // 启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）
  },
  // 启用预设的 rules
  extends: ['airbnb-base', 'prettier'],
  // 解析器，默认使用 Espree 作为其解析器，还支持：esprima、babel-eslint、@typescript-eslint/parser 等
  parser: '@typescript-eslint/parser',
  // 在使用自定义解析器时，为了让 ESLint 在处理非 ECMAScript 5 特性时正常工作，配置属性 parserOptions 仍然是必须的
  parserOptions: {
    // 默认设置为5（默认），可以使用 6、7、8、9 或 10 来指定你想要使用的 ECMAScript 版本
    ecmaVersion: 8,
  },
  // 插件
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.js'],
      },
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.js'],
      },
    },
  },
  // 规则
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
      },
    ],
    'class-methods-use-this': 'off',
  },
};
