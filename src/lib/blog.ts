import { BlogPost } from '../types/blog';

const GOOGLE_SHEETS_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQDpjDyNn2SNI0sPky4icTSoww5vYOS2-H4Py1h_ZIOgKKhHGqul3LA6yaTCiFSIzfxat1g5dLKSlTk/pub?output=csv';

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(GOOGLE_SHEETS_URL);
    const data = await response.text();
    
    // Parse CSV data
    const rows = data.split('\n').slice(1); // Skip header row
    return rows.map(row => {
      const [id, title, slug, date, author, excerpt, content, imageUrl, tags] = row.split(',').map(cell => cell.trim());
      return {
        id,
        title,
        slug,
        date,
        author,
        excerpt,
        content,
        imageUrl,
        tags: tags.split(';').map(tag => tag.trim())
      };
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  const posts = await fetchBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}