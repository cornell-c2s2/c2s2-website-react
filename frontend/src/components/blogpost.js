// BlogPost.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// This component will render a single blog post
function BlogPost() {
  const { postId } = useParams();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        setLoading(true);
        // Fetch the blog post HTML file
        const response = await fetch(`/blog-posts/${postId}.html`);

        if (!response.ok) {
          throw new Error(`Failed to fetch blog post: ${response.status}`);
        }

        const html = await response.text();

        // Extract content between <main> tags using regex
        const mainContentRegex = /<main id="main">([\s\S]*?)<\/main>/;
        const match = html.match(mainContentRegex);

        if (match && match[1]) {
          setContent(match[1]);
        } else {
          throw new Error("Could not extract main content from HTML");
        }
      } catch (err) {
        console.error("Error loading blog post:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [postId]);

  // Handle loading state
  if (loading) {
    return <div className="blog-loading">Loading post...</div>;
  }

  // Handle error state
  if (error) {
    return (
      <div className="blog-error">
        <h2>Error loading blog post</h2>
        <p>{error}</p>
        <Link to="/blog">Return to Blog List</Link>
      </div>
    );
  }

  return (
    <div className="blog-container">
      {/* Render the extracted HTML content safely */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default BlogPost;
