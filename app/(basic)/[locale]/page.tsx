'use client';
import Header from '@/src/layout/Header';
import Footer from '@/src/layout/Footer';
import CookiePolicy from '@/src/layout/CookiePolicy'
import { useLocale } from "@/src/hooks/useLocale";
import { HOME_QUERY } from '@/src/graphql/home';
import { useQuery } from '@apollo/client/react';
import { PageSkeleton } from '@/src/components/Skeletons';
import DynamicZone from '@/src/components/dynamic-zone';


export default function Home() {
  const locale = useLocale();
 // useEffect(() => {
  //   const root = document.documentElement;

  //   Object.entries(rootVariables).forEach(([key, value]) => {
  //     root.style.setProperty(key, value);
  //   });
  // }, []);
  // console.log(locale)
  const { data, loading, error } = useQuery(HOME_QUERY, {
    variables: {
      locale: locale,
    },
    fetchPolicy: 'no-cache',
  });

  if (loading) return <PageSkeleton />;
  if (error) return <p>Error</p>;
  // console.log(data?.home.content);
  // console.log(data)

  // return null
  if (!data?.home) return <PageSkeleton />;

  // let content = data?.home.blockHeading2.content
  // console.log(content)
  return (
    <>
      <Header />
      <DynamicZone data={data?.home?.content} />
      <Footer />
      <CookiePolicy/>
    </>
  );
}