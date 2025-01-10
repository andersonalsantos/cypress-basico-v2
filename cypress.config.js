module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // Aqui você pode adicionar eventos específicos para testes E2E
      // Exemplo de configuração personalizada de eventos:
      on('before:browser:launch', (browser = {}, launchOptions) => {
        // Configurações para iniciar o navegador
        return launchOptions;
      });
    },
    
    viewportWidth: 1280,
    viewportHeight: 880,
    //ativando a captura em video dos testes
   // video: true,
    // Outras configurações específicas para testes E2E
  },

  component: {
    setupNodeEvents(on, config) {
      // Aqui você pode adicionar eventos específicos para testes de componentes
      // Exemplo: alterando a configuração do bundler para os testes de componentes
    },
    // Outras configurações específicas para testes de componentes
  },
};

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Atualize conforme necessário
    setupNodeEvents(on, config) {
      // Adicione aqui eventos necessários
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}', // Caminho para seus testes
  },
});

