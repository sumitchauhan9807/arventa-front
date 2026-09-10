import { lazy, Suspense } from 'react';
import { PageSkeleton } from '../Skeletons';
const TextField = lazy(() => import('./TextField'));
const DropdownField = lazy(() => import('./DropdownField'));
const EmailField = lazy(() => import('./EmailField'));
const Textarea = lazy(() => import('./Textarea'));
const FormButton = lazy(() => import('./FormButton'));


// ComponentCommonContactForm

const componentMap = {
  ComponentFormTextField: TextField,
  ComponentFormDropdownField: DropdownField,
  ComponentFormAddressField:Textarea,
  ComponentFormEmailField:EmailField,
  ComponentFormFormButton:FormButton

  // add others here
};

const FormDynamicZone = ({ data }) => {
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

export default FormDynamicZone;
