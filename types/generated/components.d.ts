import type { Schema, Struct } from '@strapi/strapi';

export interface AtomsButton extends Struct.ComponentSchema {
  collectionName: 'components_atoms_buttons';
  info: {
    displayName: 'button';
    icon: 'arrowRight';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'tertiary', 'desctructive']
    >;
    icon: Schema.Attribute.Enumeration<
      ['download', 'internal', 'external', 'search']
    >;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    target_url: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['contained', 'outlined', 'link']> &
      Schema.Attribute.DefaultTo<'contained'>;
  };
}

export interface AtomsCard extends Struct.ComponentSchema {
  collectionName: 'components_atoms_cards';
  info: {
    displayName: 'card';
    icon: 'priceTag';
  };
  attributes: {
    button: Schema.Attribute.Component<'atoms.button', false>;
    description: Schema.Attribute.String;
    featured_image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface AtomsImageMatrix extends Struct.ComponentSchema {
  collectionName: 'components_atoms_image_matrices';
  info: {
    displayName: 'image_matrix';
    icon: 'apps';
  };
  attributes: {
    image_col: Schema.Attribute.Component<'atoms.image-row', true>;
  };
}

export interface AtomsImageRow extends Struct.ComponentSchema {
  collectionName: 'components_atoms_image_rows';
  info: {
    displayName: 'image_row';
    icon: 'picture';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image_col: Schema.Attribute.Media<'images', true>;
    image_name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    target_url: Schema.Attribute.String;
  };
}

export interface AtomsLink extends Struct.ComponentSchema {
  collectionName: 'components_atoms_links';
  info: {
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    icon: Schema.Attribute.Enumeration<
      ['internal', 'external', 'download', 'search']
    >;
    is_available: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface PagesFeaturedContent extends Struct.ComponentSchema {
  collectionName: 'components_pages_featured_contents';
  info: {
    displayName: 'FeaturedContent';
    icon: 'bulletList';
  };
  attributes: {
    alignment: Schema.Attribute.Enumeration<['left', 'right', 'center']>;
    buttons: Schema.Attribute.Component<'atoms.button', true>;
    description: Schema.Attribute.Text;
    featured_media: Schema.Attribute.Media<'images' | 'videos', true>;
    is_available: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface PagesHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_pages_hero_banners';
  info: {
    displayName: 'HeroBanner';
    icon: 'book';
  };
  attributes: {
    array_text: Schema.Attribute.JSON;
    buttons: Schema.Attribute.Component<'atoms.button', true>;
    description: Schema.Attribute.Text;
    featured_banner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    is_available: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    main_title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface PagesIntroduction extends Struct.ComponentSchema {
  collectionName: 'components_pages_introductions';
  info: {
    displayName: 'introduction';
    icon: 'book';
  };
  attributes: {
    button_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Show more'>;
    button_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image_gallery: Schema.Attribute.Component<'atoms.image-row', true>;
    main_text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    show_button: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface PagesLinkList extends Struct.ComponentSchema {
  collectionName: 'components_pages_link_lists';
  info: {
    displayName: 'link_list';
    icon: 'bulletList';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface PagesOfficesSection extends Struct.ComponentSchema {
  collectionName: 'components_pages_offices_sections';
  info: {
    displayName: 'offices_section';
    icon: 'code';
  };
  attributes: {
    cta_button: Schema.Attribute.Component<'atoms.button', false>;
    description: Schema.Attribute.Text;
    is_available: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Our offices'>;
  };
}

export interface PagesRelatedVideos extends Struct.ComponentSchema {
  collectionName: 'components_pages_related_videos';
  info: {
    displayName: 'related_videos';
    icon: 'archive';
  };
  attributes: {
    description: Schema.Attribute.Text;
    is_available: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Our videos'>;
  };
}

export interface PagesServices extends Struct.ComponentSchema {
  collectionName: 'components_pages_services';
  info: {
    displayName: 'services';
    icon: 'grid';
  };
  attributes: {
    is_available: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    services_list: Schema.Attribute.Component<'atoms.card', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<'Our Services'>;
  };
}

export interface SectionsBentoBox extends Struct.ComponentSchema {
  collectionName: 'components_sections_bento_boxes';
  info: {
    displayName: 'bento_box';
    icon: 'grid';
  };
  attributes: {
    bento_box: Schema.Attribute.Component<'atoms.image-matrix', true>;
    description: Schema.Attribute.Text;
    is_available: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Defaul title'>;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedPageHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_page_headers';
  info: {
    description: '';
    displayName: 'Page Header';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    Buttons: Schema.Attribute.Component<'atoms.button', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedRealtedArticles extends Struct.ComponentSchema {
  collectionName: 'components_shared_realted_articles';
  info: {
    displayName: 'RealtedArticles';
    icon: 'layout';
  };
  attributes: {
    category: Schema.Attribute.Relation<
      'oneToOne',
      'api::articles-category.articles-category'
    >;
    description: Schema.Attribute.Text;
    is_available: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    practice_area: Schema.Attribute.Relation<
      'oneToOne',
      'api::practice-area.practice-area'
    >;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Default title'>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    openGraph: Schema.Attribute.Component<'shared.open-graph', false>;
    structuredData: Schema.Attribute.JSON;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'atoms.button': AtomsButton;
      'atoms.card': AtomsCard;
      'atoms.image-matrix': AtomsImageMatrix;
      'atoms.image-row': AtomsImageRow;
      'atoms.link': AtomsLink;
      'pages.featured-content': PagesFeaturedContent;
      'pages.hero-banner': PagesHeroBanner;
      'pages.introduction': PagesIntroduction;
      'pages.link-list': PagesLinkList;
      'pages.offices-section': PagesOfficesSection;
      'pages.related-videos': PagesRelatedVideos;
      'pages.services': PagesServices;
      'sections.bento-box': SectionsBentoBox;
      'shared.open-graph': SharedOpenGraph;
      'shared.page-header': SharedPageHeader;
      'shared.realted-articles': SharedRealtedArticles;
      'shared.seo': SharedSeo;
    }
  }
}
