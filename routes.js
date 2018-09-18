import Button from '~/pages/KitchenSink/components/Buttons'
// import Cta from 'componentsdir/cta/examples/Cta'
// import Cdr1Page from 'componentsdir/cdr1css/cdr1css'
import KitchenSink from '~/pages/KitchenSink'
import Link from '~/pages/KitchenSink/components/Links'
import Breadcrumb from '~/pages/KitchenSink/components/Breadcrumb'
// import Card from 'componentsdir/card/examples/Cards'
// import Checkbox from 'componentsdir/checkbox/examples/checkboxes'
// import Grid from 'componentsdir/grid/examples/Grid'
// import Texts from 'componentsdir/text/examples/Text'
// import Icon from 'componentsdir/icon/examples/Icons'
// import Images from 'componentsdir/image/examples/Images'
import CdrAccordion from '~/pages/KitchenSink/components/Accordion'
// import Input from 'componentsdir/input/examples/Inputs'
// import Lists from 'componentsdir/list/examples/Lists'
// import MediaObject from 'componentsdir/mediaObject/examples/mediaObject'
// import Radio from 'componentsdir/radio/examples/Radios'
// import Quotes from 'componentsdir/quote/examples/Quote'
// import Rating from 'componentsdir/rating/examples/Ratings'
// import Select from 'componentsdir/select/examples/Selects'
// import CaptionExample from 'compositionsdir/caption/examples/Caption'
// import Activity from 'compositionsdir/activityCard/examples/activity'
// import Searchbox from 'compositionsdir/search/examples/searchbox'
import Tabs from '~/pages/KitchenSink/components/Tabs'

const routes = [
    { path: '/', name: 'Home', component: KitchenSink },
    // { path: '/cdr1css', name: 'Cdr1 Mixed In', component: Cdr1Page },
    { path: '/KitchenSink/components/buttons', name: 'Buttons', component: Button },
    // { path: '/cta', name: 'Cta', component: Cta },
    { path: '/KitchenSink/components/links', name: 'Links', component: Link },
    { path: '/KitchenSink/components/breadcrumbs', name: 'Breadcrumb', component: Breadcrumb },
    // { path: '/cards', name: 'Card', component: Card },
    // { path: '/checkboxes', name: 'Checkboxes', component: Checkbox },
    // { path: '/grids', name: 'Grid', component: Grid },
    // { path: '/texts', name: 'Texts', component: Texts },
    // { path: '/icons', name: 'Icons', component: Icon },
    // { path: '/images', name: 'Image', component: Images },
    // { path: '/inputs', name: 'Input', component: Input },
    // { path: '/lists', name: 'Lists', component: Lists },
    // { path: '/media', name: 'Media', component: MediaObject },
    // { path: '/radios', name: 'Radio', component: Radio },
    // { path: '/quotes', name: 'Quote', component: Quotes },
    // { path: '/ratings', name: 'Rating', component: Rating },
    // { path: '/selects', name: 'Select', component: Select },
    // { path: '/captions', name: 'Caption', component: CaptionExample },
    // { path: '/activity', name: 'ActivityCard', component: Activity },
    // { path: '/search', name: 'Searchbox', component: Searchbox },
    { path: '/KitchenSink/components/accordions', name: 'Accordion', component: CdrAccordion },
    { path: '/KitchenSink/components/tabs', name: 'Tabs', component: CdrTabs },
  ];

  export default routes;
