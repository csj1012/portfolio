export default function() {
  return [
    {
      id: 'theming-drupal-8-microsites-using-layout-builder-patternlab',
      organization: 'American Medical Association',
      title: 'Theming Drupal 8 microsites using Layout Builder and PatternLab',
      shortDescription: 'Topic Pages',
      image: {
        src: 'ama-topics.png',
        alt: 'Image alt.',
        caption: 'A scaleable drag-and-drop interface using Drupal 8’s Layout Builder allows content editors to create unique pages for each topic. The theme needed to maintain the integrity of the design without sacrificing flexibility for editors.'
      },
      year: '2018',
      teaser: {
        src: 'teaser-ama-topics.png',
        alt: 'Image alt.'
      },
      description: "We used the Panelizer and Panels In Place Editor contrib modules (and later, Layout Builder in a newer version of the theme) to provide an interface where editors can drag and drop custom blocks from a CMS-controlled list of block types. Need to add a Promo Block? Just drag it into place and customize it with text. We were pleased to be able to make the content team’s editing experience a little easier (a much welcomed improvement over the tedium and confusion of the previous Drupal 7 interface). ",
      techs: [
        'Drupal 8',
        'Layout Builder (current)',
        'Panels IPE + Panelizer (previously)',
        'PatternLab',
        'Twig',
        'SCSS',
        'Gulp',
        'PHP',
        'HTML'
      ],
      role: 'Drupal development, front end development',
      links: [
        {
          href: 'https://www.ama-assn.org/topic/advocating-patients-and-physicians',
          text: 'View a live site example'
        },
        {
          href: 'https://www.drupal.org/case-study/american-medical-association-topics-pages',
          text: 'Read the Drupal.org case study by Avi Schwab'
        },
        {
          href: 'https://www.midcamp.org/topic/american-medical-association-topic-landing-pages-d8-case-study',
          text: 'Watch the Midcamp 2018 talk about this project'
        }
      ]
    },
    {
      id: 'uchicago-news-redesigned',
      organization: 'The University of Chicago Web Services',
      title: 'UChicago News, Redesigned',
      shortDescription: 'UChicago News',
      image: {
        src: 'uc-news.png',
        alt: 'Image alt.',
        caption: 'A scaleable drag-and-drop interface using Drupal 8’s Layout Builder allows content editors to create unique pages for each topic. The theme needed to maintain the integrity of the design without sacrificing flexibility for editors.'
      },
      year: '2018',
      teaser: {
        src: 'teaser-uc-news.png',
        alt: 'Image alt.'
      },
      description: "We used the Panelizer and Panels In Place Editor contrib modules (and later, Layout Builder in a newer version of the theme) to provide an interface where editors can drag and drop custom blocks from a CMS-controlled list of block types. Need to add a Promo Block? Just drag it into place and customize it with text. We were pleased to be able to make the content team’s editing experience a little easier (a much welcomed improvement over the tedium and confusion of the previous Drupal 7 interface). ",
      techs: [
        'Drupal 8',
        'Layout Builder (current)',
        'Panels IPE + Panelizer (previously)',
        'PatternLab',
        'Twig',
        'SCSS',
        'Gulp',
        'PHP',
        'HTML'
      ],
      role: 'Drupal development, front end development',
      links: [
        {
          href: 'https://www.ama-assn.org/topic/advocating-patients-and-physicians',
          text: 'View a live site example'
        },
        {
          href: 'https://www.drupal.org/case-study/american-medical-association-topics-pages',
          text: 'Read the Drupal.org case study by Avi Schwab'
        },
        {
          href: 'https://www.midcamp.org/topic/american-medical-association-topic-landing-pages-d8-case-study',
          text: 'Watch the Midcamp 2018 talk about this project'
        }
      ]
    }
  ]
}
