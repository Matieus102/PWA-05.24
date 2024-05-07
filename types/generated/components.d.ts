import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksAkcja extends Schema.Component {
  collectionName: 'components_blocks_akcjas';
  info: {
    displayName: 'akcja';
  };
  attributes: {
    heading: Attribute.String;
    opis: Attribute.Text;
    form: Attribute.Component<'elements.form'>;
  };
}

export interface BlocksCeny extends Schema.Component {
  collectionName: 'components_blocks_cenies';
  info: {
    displayName: 'ceny';
  };
  attributes: {
    nazwa: Attribute.String;
    opis: Attribute.String;
    plan: Attribute.Component<'elements.ceny', true>;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    heading: Attribute.String;
    text: Attribute.Text;
    link: Attribute.Component<'elements.przycisk'>;
    obraz: Attribute.Media;
  };
}

export interface BlocksRzedy extends Schema.Component {
  collectionName: 'components_blocks_rzedies';
  info: {
    displayName: 'Rzedy';
  };
  attributes: {
    karta: Attribute.Component<'elements.karta', true>;
  };
}

export interface ElementsCeny extends Schema.Component {
  collectionName: 'components_elements_cenies';
  info: {
    displayName: 'ceny';
  };
  attributes: {
    typplanu: Attribute.String;
    koszt: Attribute.String;
    isFeatured: Attribute.Boolean & Attribute.DefaultTo<false>;
    serwisy: Attribute.Relation<
      'elements.ceny',
      'oneToMany',
      'api::serwis.serwis'
    >;
    link: Attribute.Component<'elements.przycisk'>;
  };
}

export interface ElementsForm extends Schema.Component {
  collectionName: 'components_elements_forms';
  info: {
    displayName: 'form';
  };
  attributes: {
    heading: Attribute.String;
    opis: Attribute.Text;
    input: Attribute.Component<'elements.input', true>;
    przycisk: Attribute.Component<'elements.przycisk'>;
  };
}

export interface ElementsInput extends Schema.Component {
  collectionName: 'components_elements_inputs';
  info: {
    displayName: 'Input';
  };
  attributes: {
    holder: Attribute.String;
    label: Attribute.String;
    typinput: Attribute.String;
  };
}

export interface ElementsKarta extends Schema.Component {
  collectionName: 'components_elements_kartas';
  info: {
    displayName: 'karta';
    description: '';
  };
  attributes: {
    obraz: Attribute.Media;
    tytul: Attribute.String;
    opis: Attribute.String;
  };
}

export interface ElementsPrzycisk extends Schema.Component {
  collectionName: 'components_elements_przycisks';
  info: {
    displayName: 'przycisk';
  };
  attributes: {
    tytul: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    opcje: Attribute.Enumeration<['pierwsza', 'druga']>;
  };
}

export interface SeoData extends Schema.Component {
  collectionName: 'components_seo_data';
  info: {
    displayName: 'Data';
  };
  attributes: {
    DataTytul: Attribute.String;
    Dataopis: Attribute.Text;
    Dataobraz: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.akcja': BlocksAkcja;
      'blocks.ceny': BlocksCeny;
      'blocks.hero': BlocksHero;
      'blocks.rzedy': BlocksRzedy;
      'elements.ceny': ElementsCeny;
      'elements.form': ElementsForm;
      'elements.input': ElementsInput;
      'elements.karta': ElementsKarta;
      'elements.przycisk': ElementsPrzycisk;
      'seo.data': SeoData;
    }
  }
}
