import { Fragment } from 'react';
import AllPosts from '../../components/posts/all-posts';

import { getAllPosts } from '../../lib/posts-utils';

const AllPostsPage = ({ posts }) => {
  return (
    <Fragment>
      <AllPosts posts={posts} />
    </Fragment>
  );
};

export function getStaticProps() {
  const sortedPosts = getAllPosts();

  return {
    props: {
      posts: sortedPosts,
    },
    revalidate: 60,
  };
}

export default AllPostsPage;
