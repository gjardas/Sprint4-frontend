module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@next/next/recommended',
    ],
    rules: {
        'react/no-unescaped-entities': 'off', // Desativa a regra que avisa sobre entidades não escapadas
        '@next/next/no-page-custom-font': 'off', // Desativa a regra que avisa sobre fontes customizadas em páginas
    },
    settings: {
        react: {
            version: 'detect', // Detecta automaticamente a versão do React
        },
    },
};
