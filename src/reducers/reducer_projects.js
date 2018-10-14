export default function() {
  return [
    {
      organization: 'American Medical Association',
      title: 'AMA Topic Pages',
      shortDescription: 'Drupal 8 minisites to act as a hub for the AMA to promote specialized content using AMA Style Guide elements',
      image: {
        src: 'ama-topics.png',
        alt: 'Image alt.',
        caption: 'An editor-curated Topic Page.'
      },
      teaser: {
        src: 'teaser-ama-topics.png',
        alt: 'Image alt.'
      },
      techs: [
        'Drupal 8',
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
          text: 'View live site example'
        },
        {
          href: 'https://www.drupal.org/case-study/american-medical-association-topics-pages',
          text: 'View Drupal.org case study by Avi Schwab'
        },
        {
          href: 'https://www.midcamp.org/topic/american-medical-association-topic-landing-pages-d8-case-study',
          text: 'Watch the Midcamp 2018 talk about this project'
        }
      ]
    },
    {
      organization: 'American Medical Association',
      title: 'AMA Living Style Guides',
      shortDescription: 'PatternLab suite showcasing reusable atomic design elements to be used throughout the AMA’s digital products, including a custom Drupal 8 theme',
      techs: [
        'PatternLab',
        'Twig',
        'SCSS',
        'Gulp',
        'Atomic design'
      ],
      role: 'Project Lead (v1), Front end development, design systems thinking',
      image: {
        src: 'ama-styleguides.png',
        alt: 'Image alt.',
        caption: 'Test caption one.'
      },
      teaser: {
        src: 'teaser-ama-styleguide.png',
        alt: 'Image alt.'
      },
      caption: 'Test caption two.'
    },
    {
      organization: 'The University of Chicago',
      department: 'Web Services',
      shortDescription: 'D6 to D7 migration project encompassing a total website redesign and major content reorganization',
      title: 'UChicago News',
      image: {
        src: 'uc-news.png',
        alt: 'Image alt.',
        caption: 'Test caption one.'
      },
      teaser: {
        src: 'teaser-uc-news.png',
        alt: 'The UChicago News home page.'
      },
      techs: [
        'Drupal',
        'HTML',
        'CSS/SCSS',
        'PHP',
        'Javascript/JQuery'
      ],
      role: 'Design Lead, design, front end development',
      description: 'Glorpy glorp glorp, I\'m a description.',
      view: 'https://web.archive.org/web/20160603004748/https://news.uchicago.edu/',
      links: [
        {
          href: 'https://web.archive.org/web/20160603004748/https://news.uchicago.edu/',
          text: 'View this project on the Internet Archive'
        },
        {
          href: 'https://www.drupal.org/case-study/uchicago-news',
          text: 'Drupal.org case study about this project'
        }
      ],
      caption: 'Test caption three.',
      credits: 'University of Chicago Web Services (link)',
    },
    {
      organization: 'The University of Chicago',
      title: 'UChicago MAPSS',
      shortDescription: 'Customizable and themable Drupal boilerplate site for the UChicago Master of Arts Program in the Social Sciences',
      view: 'https://mapss.uchicago.edu/',
      image: {
        src: 'uc-mapss.png',
        alt: 'Image alt.',
        caption: 'Test caption one.'
      },
      caption: 'Test caption four.',
      credits: 'University of Chicago Web Services (link)',
      teaser: {
        src: 'teaser-uc-mapss.png',
        alt: 'Screenshot of the MAPSS home page.'
      },
    },
    {
      organization: 'The University of Chicago',
      title: 'UChicago Sites',
      shortDescription: 'Multisite Drupal suite used to house websites for over 400 University organizations',
      image: {
        src: 'uc-sites.png',
        alt: 'Image alt.',
        caption: 'Test caption one.'
      },
      view: 'https://sites.uchicago.edu',
      caption: 'Test caption four.',
      credits: 'University of Chicago Web Services (link)',
    },
    {
      title: 'Horizon RPG',
      image: {
        src: 'horizon.png',
        alt: 'Image alt.',
        caption: 'Test caption one.'
      },
      view: 'http://horizon.taiyae.com',
      shortDescription: 'Homebrew role-playing game built using ExpressionEngine, custom PHP modules, and lots of love',
      caption: 'Test caption four.'
    },
  ]
}
