import { NAVIGATION_QUERY } from '@/src/graphql/navigation';
import { useQuery } from '@apollo/client/react';
import { PageSkeleton } from '@/src/components/Skeletons';

const Header = () => {
  const { data, loading, error } = useQuery(NAVIGATION_QUERY);
  if (loading) return <PageSkeleton />;
  if (error) return <p>Error</p>;

  if (!data?.navigation) return <PageSkeleton />;
  // console.log(data.navigation);
  return (
    <header>
      <div className="header-inner">
        <a href="#hero" className="wordmark">
          ARVENTA<span>.</span>
        </a>
        <nav className="primary" id="primaryNav">
          {data.navigation.navigation.map((item, index) => {
            if (item.linkType == 'Normal') {
              return (
                <a key={index} href={item.link}>
                  {item.text}
                </a>
              );
            } else {
              return (
                <a key={index} href={item.link} className="btn btn-fill">
                  {item.text}
                </a>
              );
            }
          })}

          <span className="nav-lang mono">
            <a href="#" className="active">
              EN
            </a>
            |<a href="#">DE</a>
          </span>
        </nav>
        <button className="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false">
          <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
};
export default Header;
