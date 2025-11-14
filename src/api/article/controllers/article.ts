/**
 * article controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::article.article', ({ strapi }) => ({
  async find(ctx) {
    const { filters, populate } = ctx.request.query;
    
    // Type check for filters object structure
    const filtersObj = filters as any;
    
    // Check if filtering by slug and need to custom populate neutral when populate=*
    if (filtersObj && filtersObj.slug && typeof filtersObj.slug === 'object' && 
        filtersObj.slug.$eq && populate === '*') {
      
      // Get RESULT with properly populated data - All article fields AND custom neutral populate
      const results = await strapi.entityService.findMany('api::article.article', {
        ...ctx.query, // Use all original query params
        populate: {
          articleImage: true, // Enable media field populate
          articles_category: true, // Enable relation populate  
          neutral: {
            fields: ['name', 'shortQuote', 'short_description', 'slug'], // ONLY these fields from neutral + required avatar.url
            populate: {
              avatar: {
                fields: ['url']
              }
            }
          }
        }
      } as any);
      
      return { data: results };
    }

    // Default behavior for all other cases  
    return super.find(ctx);
  }
}));
