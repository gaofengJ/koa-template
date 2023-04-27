const chalk = require('chalk');

const msgPath = `${process.env.PWD}/.git/COMMIT_EDITMSG`;
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim();

const commitRE = /^(((\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55]) )?(revert: )?(feat|test|fix|merge|conflit|style|refactor|perf|build|chore|release|revert)(\(.+\))?: .{1,50}/;
if (!commitRE.test(msg)) {
  console.error(
    `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
      'invalid commit message format.',
    )}\n\n${chalk.red(
      '  Proper commit message format is required for automated changelog generation. Examples:\n\n',
    )}    
${chalk.cyan(`💥 ${chalk.green('feat(compiler)')}: add 'comments' option`)}\n
${chalk.cyan(`🐛 ${chalk.green('fix(compiler)')}: fix some bug`)}\n
${chalk.cyan(`📝 ${chalk.green('merge(compiler)')}: merge branch`)}\n
${chalk.cyan(`💄 ${chalk.green('style(compiler)')}: better styles`)}\n
${chalk.cyan(`💄 ${chalk.green('conflit(compiler)')}: conflit`)}\n
${chalk.cyan(
    `🎨 ${chalk.green(
      'refactor(compiler)',
    )}: a code that neither fix bug nor adds a feature`,
  )}\n
${chalk.cyan(
    `⚡ ${chalk.green('perf(compiler)')}: a code that improves performance`,
  )}\n
${chalk.cyan(`🌍 ${chalk.green('build(compiler)')}: build related changes`)}\n
${chalk.cyan(
    `🎨 ${chalk.green(
      'chore(compiler)',
    )}: a code change that external user won't see`,
  )}\n
${chalk.cyan(
    `⚙️ ${chalk.green(
      'test(compiler)',
    )}: adding new test or making changes to existing test`,
  )}\n
${chalk.red(
    'See https://dev.to/i5han3/git-commit-message-convention-that-you-can-follow-1709 for more details.\n',
  )}`,
  );
  process.exit(1);
}

module.exports = () => {
  console.info('9');
};
