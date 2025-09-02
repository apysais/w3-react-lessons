import React, { useEffect, useState } from 'react';
import axios from 'axios';

function WPPostList() {
  const [posts, setPosts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://your-wordpress-site.com/wp-json/wp/v2/posts?_embed&per_page=5&page=${page}`)
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, [page]);

  // Filter by category
  const filteredByCategory = categoryFilter === 'All'
    ? posts
    : posts.filter(post => post.categories.includes(parseInt(categoryFilter)));

  // Filter by search term
  const filteredPosts = filteredByCategory.filter(post =>
    post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Total views (assuming custom field `meta.views`)
  const totalViews = filteredPosts.reduce((sum, post) => sum + (post.meta?.views || 0), 0);

  return (
    <div>
      <h2>WordPress Posts</h2>

      <div>
        <label>Search:</label>
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search post titles..."
        />
      </div>

      <div>
        <label>Filter by Category ID:</label>
        <select onChange={e => setCategoryFilter(e.target.value)} value={categoryFilter}>
          <option value="All">All</option>
          <option value="2">Category 2</option>
          <option value="3">Category 3</option>
        </select>
      </div>

      <ul>
        {filteredPosts.map(post => (
          <li key={post.id}>
            <h3>{post.title.rendered}</h3>
            {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
              <img
                src={post._embedded['wp:featuredmedia'][0].source_url}
                alt={post.title.rendered}
                style={{ width: '200px', height: 'auto' }}
              />
            )}
            <p><strong>Views:</strong> {post.meta?.views || 0}</p>
          </li>
        ))}
      </ul>

      <div>
        <button onClick={() => setPage(prev => Math.max(prev - 1, 1))}>Previous</button>
        <span> Page {page} </span>
        <button onClick={() => setPage(prev => prev + 1)}>Next</button>
      </div>

      <p><strong>Total Views:</strong> {totalViews}</p>
    </div>
  );
}

export default WPPostList;
