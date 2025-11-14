export default () => ({
  documentation: {
    enabled: true,
    config: {
      openapi: '3.0.0',
      info: {
        version: '1.0.0',
        title: 'Miles Mediation API Documentation',
        description: 'API documentation for Miles Mediation backend services',
        termsOfService: 'https://milesmediation.com/terms',
        contact: {
          name: 'Miles Mediation Team',
          email: 'info@milesmediation.com',
          url: 'https://milesmediation.com'
        },
        license: {
          name: 'MIT',
          url: 'https://opensource.org/licenses/MIT'
        }
      },
      servers: [
        {
          url: 'http://localhost:1337/api',
          description: 'Development server'
        },
        {
          url: 'https://api.milesmediation.com/api',
          description: 'Production server'
        }
      ],
      externalDocs: {
        description: 'Find out more about Strapi',
        url: 'https://docs.strapi.io/developer-docs/latest/getting-started/introduction.html'
      },
      security: [
        {
          bearerAuth: []
        }
      ]
    }
  },
  'drag-drop-content-types-strapi5': {
    enabled: true,
  }
});
