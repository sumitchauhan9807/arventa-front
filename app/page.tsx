'use client'
import Header from '@/src/layout/Header'
import Footer from '@/src/layout/Footer'
import Hero from '@/src/components/dynamic-zone/Hero'

import {HOME_QUERY} from '@/src/graphql/home'
import { useQuery } from "@apollo/client/react";
import { PageSkeleton } from '@/src/components/Skeletons';
import StrapiText from '@/src/helpers/StrapiText'

import DynamicZone from '@/src/components/dynamic-zone';

export default function Home() {
  const { data, loading, error } = useQuery(HOME_QUERY);

  if (loading) return <PageSkeleton/>;
  if (error) return <p>Error</p>;
  // console.log(data?.home.content[0].)
  // console.log(data)

  // return null
  if(!data?.home) return <PageSkeleton/>

  // let content = data?.home.blockHeading2.content
  // console.log(content)
  return (
    <>
      <Header/>
      {/* HERO */}
      <DynamicZone data={data?.home?.content}/>
      {/* <Hero/> */}
      {/* STATS */}
     
      {/* ABOUT (light) */}
      
      {/* SERVICES */}
     
      {/* PRODUCTS */}
      
      {/* WHY ARVENTA (lime) */}
      
      {/* INDUSTRIES */}
     
      {/* GLOBAL NETWORK */}
     
      {/* HOW IT WORKS (grey) */}
      
      {/* TESTIMONIALS */}
      
      {/* FAQ */}
      
      {/* FINAL CTA */}
      
      {/* FOOTER */}
      <Footer/>
    </>
  );
}
