/**
 * page-location controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::page-location.page-location', ({ strapi }) => ({
  async find(ctx) {
    // Allow public access to page-location with deep population of all related data
    const entity = await strapi.entityService.findMany('api::page-location.page-location', {
      ...ctx.query,
      populate: {
        pageHeader: {
          populate: {
            backgroundImage: true,
            Buttons: {
              populate: '*'
            }
          }
        },
        featured_block: {
          populate: {
            featured_media: true,
            buttons: {
              populate: '*'
            }
          }
        },
        seo: {
          populate: '*'
        }
      }
    });
    
    return { data: entity };
  }
}));