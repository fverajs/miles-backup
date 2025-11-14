/**
 * page-home router
 */

import { factories } from '@strapi/strapi';

export default {
  routes: [
    {
      method: 'GET',
      path: '/page-home',
      handler: 'page-home.find',
      config: {
        auth: false, // Allow public access
      },
    },
  ],
};
