export default function() {
  return [
    {
      organization: 'American Medical Association',
      title: 'Topic Pages',
      shortDescription: 'Drupal 8 minisites to act as a hub for the AMA to promote specialized content using AMA Style Guide elements',
      image: {
        src: 'ama-topics.png',
        alt: 'Image alt.',
        caption: 'Test caption one.'
      },
      techs: [
        'Drupal',
        'PatternLab',
        'Twig',
        'SCSS',
        'Gulp',
        'PHP',
        'HTML'
      ],
      role: 'Drupal development, front end development',
      description: 'Glorpy glorp glorp, I\'m a description.',
      links: [
        {
          href: 'http://www.google.com',
          text: 'Google.'
        },
        {
          href: 'http://www.google.com',
          text: 'Google 2'
        },
        {
          href: 'http://www.google.com',
          text: 'Google 3'
        }
      ]
    },
    {
      organization: 'American Medical Association',
      title: 'Style Guides',
      shortDescription: 'PatternLab suite showcasing reusable atomic design elements to be used throughout the AMA’s digital products, including a custom Drupal 8 theme',
      techs: [
        'PatternLab',
        'Twig',
        'SCSS',
        'Gulp',
        'Atomic design'
      ],
      image: {
        src: 'ama-styleguides.png',
        alt: 'Image alt.',
        caption: 'Test caption one.'
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
      techs: [
        'Drupal',
        'HTML',
        'CSS/SCSS',
        'PHP',
        'Javascript/JQuery'
      ],
      role: 'Design, front end development',
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
      title: 'UChicago MAPPSS',
      shortDescription: 'Customizable and themable Drupal boilerplate site for the UChicago MAPPSS program',
      image: {
        src: 'colors1.png',
        alt: 'Image alt.',
        caption: 'Test caption one.'
      },
      caption: 'Test caption four.',
      credits: 'University of Chicago Web Services (link)',
    },
    {
      organization: 'The University of Chicago',
      title: 'UChicago Sites',
      shortDescription: 'Multisite Drupal suite used to house websites for over 400 University organizations',
      image: {
        src: 'colors1.png',
        alt: 'Image alt.',
        caption: 'Test caption one.'
      },
      caption: 'Test caption four.',
      credits: 'University of Chicago Web Services (link)',
    },
    {
      title: 'Horizon RPG',
      image: {
        src: 'colors1.png',
        alt: 'Image alt.',
        caption: 'Test caption one.'
      },
      shortDescription: 'Homebrew role-playing game built using ExpressionEngine, custom PHP modules, and lots of love',
      caption: 'Test caption four.'
    },
  ]
}
