// pages/404.js
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <>
      <div>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, there is nothing to see here</p>
        <p>
          Use the search box or the links below to explore our amazing
          application
        </p>
        <input
          type='search'
          placeholder='Search not yet enabled, please use homepage link below...'
        />
        <div>
          <Link href='/'>
            Homepage
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
