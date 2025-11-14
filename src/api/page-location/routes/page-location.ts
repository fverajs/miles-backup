/**
 * page-location router
 */

import { factories } from '@strapi/strapi';

export default {
  routes: [
    {
      method: 'GET',
      path: '/page-location',
      handler: 'page-location.find',
      config: {
        auth: false, // Allow public access
      },
    },
  ],
};