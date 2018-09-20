import Button from '~/pages/KitchenSink/components/Buttons'
// import Cta from 'componentsdir/cta/examples/Cta'
// import Cdr1Page from 'componentsdir/cdr1css/cdr1css'
import KitchenSink from '~/pages/KitchenSink'
import Link from '~/pages/KitchenSink/components/Links'
import Breadcrumb from '~/pages/KitchenSink/components/Breadcrumb'
// import Card from 'componentsdir/card/examples/Cards'
// import Checkbox from 'componentsdir/checkbox/examples/checkboxes'
// import Grid from 'componentsdir/grid/examples/Grid'
import Texts from '~/pages/KitchenSink/components/Text'
import Icon from '~/pages/KitchenSink/components/Icons'
// import Images from 'componentsdir/image/examples/Images'
import CdrAccordion from '~/pages/KitchenSink/components/Accordion'
// import Input from 'componentsdir/input/examples/Inputs'
// import Lists from 'componentsdir/list/examples/Lists'
// import MediaObject from 'componentsdir/mediaObject/examples/mediaObject'
// import Radio from 'componentsdir/radio/examples/Radios'
import Quotes from '~/pages/KitchenSink/components/Quote'
// import Rating from 'componentsdir/rating/examples/Ratings'
// import Select from 'componentsdir/select/examples/Selects'
import CaptionExample from '~/pages/KitchenSink/components/Caption'
// import Activity from 'compositionsdir/activityCard/examples/activity'
// import Searchbox from 'compositionsdir/search/examples/searchbox'
import Tabs from '~/pages/KitchenSink/components/Tabs'

const routes = [
    { name: '/',  component: KitchenSink },
    // { name: '/cdr1css', name: 'Cdr1 Mixed In', component: Cdr1Page },
    { name: 'KitchenSink-components-Buttons',  component: Button },
    // { name: '/cta', name: 'Cta', component: Cta },
    { name: '/KitchenSink/components/links', component: Link },
    { name: '/KitchenSink/components/breadcrumb', component: Breadcrumb },
    // { name: '/cards', name: 'Card', component: Card },
    // { name: '/checkboxes', name: 'Checkboxes', component: Checkbox },
    // { name: '/grids', name: 'Grid', component: Grid },
    { name: '/KitchenSink/components/text', component: Texts },
    { name: '/KitchenSink/components/icons', component: Icon },
    // { name: '/images', name: 'Image', component: Images },
    // { name: '/inputs', name: 'Input', component: Input },
    // { name: '/lists', name: 'Lists', component: Lists },
    // { name: '/media', name: 'Media', component: MediaObject },
    // { name: '/radios', name: 'Radio', component: Radio },
    { name: '/KitchenSink/components/quote', component: Quotes },
    // { name: '/ratings', name: 'Rating', component: Rating },
    // { name: '/selects', name: 'Select', component: Select },
    { name: '/KitchenSink/components/caption', component: CaptionExample },
    // { name: '/activity', name: 'ActivityCard', component: Activity },
    // { name: '/search', name: 'Searchbox', component: Searchbox },
    { name: '/KitchenSink/components/accordion', component: CdrAccordion },
    { name: '/KitchenSink/components/tabs', component: Tabs },
  ];

export default routes;
