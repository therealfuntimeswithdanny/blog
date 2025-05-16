import feedparser
import re
import time

def get_cover_image(entry):
    """
    Extracts a cover image URL from an RSS entry.
    Checks for 'media_thumbnail', 'media_content', and an <img> tag in the summary/description.
    """
    # Check for media_thumbnail
    if 'media_thumbnail' in entry:
        thumbnails = entry.media_thumbnail
        if thumbnails and isinstance(thumbnails, list):
            return thumbnails[0].get('url')

    # Check for media_content
    if 'media_content' in entry:
        media_content = entry.media_content
        if media_content and isinstance(media_content, list):
            return media_content[0].get('url')
    
    # Attempt extraction from the summary or description HTML
    candidate = entry.get('summary', '') or entry.get('description', '')
    match = re.search(r'<img[^>]+src="([^">]+)"', candidate)
    if match:
        return match.group(1)
    
    return None

def generate_featured_article_html(entry):
    """
    Builds an HTML snippet for a featured article using the RSS entry data.
    """
    # Extract fields from the RSS entry.
    title = entry.get('title', 'No title provided')
    link = entry.get('link', '#')
    description = entry.get('summary', 'No description provided')
    
    # Get cover image URL or use a placeholder if not available.
    cover_image = get_cover_image(entry)
    if not cover_image:
        cover_image = "https://via.placeholder.com/800x400?text=No+Image+Available"
    
    # Process the published date. Check if published_parsed is valid.
    pub_time = entry.get('published_parsed', None)
    if pub_time and isinstance(pub_time, (tuple, time.struct_time)):
        datetime_attr = time.strftime("%Y-%m-%d", pub_time)  # e.g., "2025-05-12"
        visible_date = time.strftime("%B %d, %Y", pub_time)    # e.g., "May 12, 2025"
    else:
        # Fallback: use the raw published string if available.
        datetime_attr = entry.get('published', 'unknown')
        visible_date = datetime_attr
    
    # Build the HTML snippet using the desired layout.
    html_output = f'''
<section class="__article-featured-section">
    <article class="_article _article-featured">
        <h1>Top Post</h1>
        <img class="article-thumbnail_ article-featured-thumbnail_" src="{cover_image}" loading="lazy" width="800" height="400" alt="Featured article thumbnail.">
        <h2 class="article-title_">{title}</h2>
        <p class="article-description_">{description}<br><feedback-counter blog-id="blog-14" endpoint="https://likecounter-young-mouse-f484.madebydannyuk.workers.dev"></feedback-counter></p>
        <time class="article-date_" datetime="{datetime_attr}"><i>{visible_date}</i></time>
        <a class="article-read-more_" href="{link}">READ MORE</a>
    </article>
</section>
'''
    return html_output

def fetch_newest_post(feed_url):
    """
    Downloads and parses the RSS feed, returning the newest entry.
    """
    feed = feedparser.parse(feed_url)
    
    if feed.bozo:
        print("Error parsing the feed.")
        return None
    
    if not feed.entries:
        print("No entries found in the feed.")
        return None
    
    # Assume the first entry is the newest post.
    return feed.entries[0]

if __name__ == "__main__":
    feed_url = "https://rss.madebydannyuk.workers.dev"
    newest_entry = fetch_newest_post(feed_url)
    
    if newest_entry:
        html_snippet = generate_featured_article_html(newest_entry)
        print(html_snippet)
    else:
        print("Could not retrieve the newest post.")
