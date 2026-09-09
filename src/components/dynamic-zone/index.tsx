import { lazy, Suspense } from 'react';
import { PageSkeleton } from '../Skeletons';
const Hero = lazy(() => import('./Hero'));
const CountUpSection = lazy(() => import('./CountUpSection'));
const CTA = lazy(() => import('./CTA'));
const ServicesSection = lazy(() => import('./ServicesSection'));
const ProductsSection = lazy(() => import('./ProductsSection'));
const DescriptionList = lazy(() => import('./DescriptionLists'));
const NetworkSection = lazy(() => import('./NetworkSection'));
const FAQ = lazy(() => import('./FAQ'));
const ContactForm = lazy(() => import('./ContactForm'));

// ComponentCommonContactForm

const componentMap = {
  ComponentCommonHero: Hero,
  ComponentCommonCountUpSection: CountUpSection,
  ComponentCommonCta1: CTA,
  ComponentCommonServicesSection: ServicesSection,
  ComponentCommonProductsSection: ProductsSection,
  ComponentCommonDescriptionLists: DescriptionList,
  ComponentCommonNetworkComponent: NetworkSection,
  ComponentCommonFaq: FAQ,
  ComponentCommonContactForm: ContactForm,

  // add others here
};

const DynamicZone = ({ data }) => {
  if (!data?.length) return null;
  return (
    <Suspense fallback={<PageSkeleton />}>
      {data.map((component, index) => {
        const Component = componentMap[component.__typename];

        if (!Component) return null;

        return <Component key={index} {...component} />;
      })}
    </Suspense>
  );
};

export default DynamicZone;
