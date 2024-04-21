import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedMetaImg extends Schema.Component {
  collectionName: 'components_shared_meta_imgs';
  info: {
    displayName: 'metaImg';
    icon: 'landscape';
  };
  attributes: {
    img: Attribute.Media & Attribute.Required;
    alt: Attribute.String;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'Seo';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.String & Attribute.Required;
    imgMeta: Attribute.Component<'shared.meta-img'> & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.meta-img': SharedMetaImg;
      'shared.seo': SharedSeo;
    }
  }
}
