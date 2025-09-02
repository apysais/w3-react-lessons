Thanks! Based on the official WordPress REST API documentation:

✅ You can fetch categories from:
GET /wp-json/wp/v2/categories
✅ You can fetch tags from:
GET /wp-json/wp/v2/tags
Now, here's the updated full React example that:

Uses useContext for shared state
Uses createPortal to render components into separate DOM elements
Dynamically loads categories and tags into <select> dropdowns
Filters posts by selected category and tag
Applies search and date filtering
Supports pagination

index html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>WordPress React Portal App</title>
</head>
<body>
  <div id="root" style="display: none;"></div>

  <div id="search"><h3>Search</h3></div>
  <div id="filter"><h3>Filter</h3></div>
  <div id="paginate"><h3>Pagination</h3></div>
  <div id="list-data"><h3>Posts</h3></div>

  <script src="main.js"></script>
</body>
</html>


🧩 WPContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const WPContext = createContext();
export const useWP = () => useContext(WPContext);

export const WPProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [tag, setTag] = useState('');
  const [date, setDate] = useState('');
  const [page, setPage] = useState(1);

  const baseURL = 'https://your-site.com/wp-json/wp/v2';

  // Fetch categories and tags once
  useEffect(() => {
    axios.get(`${baseURL}/categories?per_page=100`).then(res => setCategories(res.data));
    axios.get(`${baseURL}/tags?per_page=100`).then(res => setTags(res.data));
  }, []);

  // Fetch posts when filters change
  useEffect(() => {
    const params = {
      search,
      categories: category || undefined,
      tags: tag || undefined,
      after: date || undefined,
      page,
      per_page: 5,
      _embed: true
    };

    axios.get(`${baseURL}/posts`, { params })
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, [search, category, tag, date, page]);

  return (
    <WPContext.Provider value={{
      posts, categories, tags,
      search, setSearch,
      category, setCategory,
      tag, setTag,
      date, setDate,
      page, setPage
    }}>
      {children}
    </WPContext.Provider>
  );
};

Components

Filter.js
import React from 'react';
import { useWP } from './WPContext';

function Filter() {
  const {
    categories, tags,
    category, setCategory,
    tag, setTag,
    date, setDate
  } = useWP();

  return (
    <div>
      <label>Category:</label>
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="">All</option>
        {categories.map(cat => (
          <option key={cat.id} value={cat.id}>{cat.name}</option>
        ))}
      </select>

      <label>Tag:</label>
      <select value={tag} onChange={e => setTag(e.target.value)}>
        <option value="">All</option>
        {tags.map(t => (
          <option key={t.id} value={t.id}>{t.name}</option>
        ))}
      </select>

      <label>Date:</label>
      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
    </div>
  );
}

export default Filter;

Search.js

import React from 'react';
import { useWP } from './WPContext';

function Search() {
  const { search, setSearch } = useWP();
  return (
    <input
      type="text"
      value={search}
      onChange={e => setSearch(e.target.value)}
      placeholder="Search by title..."
    />
  );
}

export default Search;

PostList.js

import React from 'react';
import { useWP } from './WPContext';

function PostList() {
  const { posts } = useWP();

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <h4 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        </li>
      ))}
    </ul>
  );
}

export default PostList;

Paginate.js
import React from 'react';
import { useWP } from './WPContext';

function Paginate() {
  const { page, setPage } = useWP();

  return (
    <div>
      <button onClick={() => setPage(p => Math.max(p - 1, 1))}>Previous</button>
      <span> Page {page} </span>
      <button onClick={() => setPage(p => p + 1)}>Next</button>
    </div>
  );
}

export default Paginate;

index.js (Main Entry)

import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import {createPortal} from "react-dom";
import { WPProvider } from './WPContext';
import Search from './Search';
import Filter from './Filter';
import Paginate from './Paginate';
import PostList from './PostList';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <WPProvider>
    <>
      {ReactDOM.createPortal(<Search />, document.getElementById('search'))}
      {ReactDOM.createPortal(<Filter />, document.getElementById('filter'))}
      {ReactDOM.createPortal(<Paginate />, document.getElementById('paginate'))}
      {ReactDOM.createPortal(<PostList />, document.getElementById('list-data'))}
    </>
  </WPProvider>
);

✅ Summary
Dynamically loads categories and tags from the WordPress REST API.
Filters posts using dropdowns.
All components share state via useContext.
Components are rendered into separate DOM elements using createPortal.