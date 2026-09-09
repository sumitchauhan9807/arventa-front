import React, { lazy, Suspense } from 'react';
const layouts = {
  SVG: lazy(() => import('./SVG')),
  BLACK_BACKGROUND: lazy(() => import('./BlackBackground')),
  NUMBERED: lazy(() => import('./Numbered')),
  TAGGED_LISTS: lazy(() => import('./TaggedLists')),
};

const DescriptionInfo = (props) => {
  const data = { ...props };
  const LayoutComponent = layouts[props.layoutType];
  if (!LayoutComponent) {
    return null;
  }
  return (
    <Suspense fallback={null}>
      <LayoutComponent data={data} />
    </Suspense>
  );
};
export default DescriptionInfo;
