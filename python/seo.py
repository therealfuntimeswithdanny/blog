import requests
from bs4 import BeautifulSoup

def fetch_page_details(url):
    """
    Fetch the HTML content of the URL.
    """
    try:
        response = requests.get(url)
        if response.status_code != 200:
            print(f"Error: Unable to fetch page (Status code: {response.status_code}).")
            return None
        return response.text
    except Exception as e:
        print(f"Exception occurred: {e}")
        return None

def analyze_seo(html_content):
    """
    Analyze key SEO elements in the HTML content.
    """
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Initialize a dictionary for the analysis results.
    results = {}
    
    # Title Tag Analysis
    title_tag = soup.find('title')
    if title_tag:
        title_text = title_tag.get_text().strip()
        results['title'] = title_text
        results['title_length'] = len(title_text)
    else:
        results['title'] = None

    # Meta Description Analysis
    meta_desc = soup.find('meta', attrs={'name': 'description'})
    if meta_desc and meta_desc.get('content'):
        desc_text = meta_desc['content'].strip()
        results['meta_description'] = desc_text
        results['meta_description_length'] = len(desc_text)
    else:
        results['meta_description'] = None

    # Heading Analysis: Count H1 and H2 tags
    h1_tags = soup.find_all('h1')
    results['h1_count'] = len(h1_tags)
    
    h2_tags = soup.find_all('h2')
    results['h2_count'] = len(h2_tags)
    
    # Images Alt Tag Analysis: Count total images and how many are missing alt text
    images = soup.find_all('img')
    results['images_count'] = len(images)
    missing_alts = sum(1 for img in images if not img.get('alt'))
    results['images_missing_alt'] = missing_alts

    return results

def seo_recommendations(analysis):
    """
    Generate SEO improvement recommendations based on the analysis.
    """
    recommendations = []
    
    # Title check: ideal length is generally between 30 to 60 characters.
    title = analysis.get('title')
    title_length = analysis.get('title_length', 0)
    if not title:
        recommendations.append("Add a title tag to your page to help search engines understand its topic.")
    else:
        if title_length < 30:
            recommendations.append("Your title is too short; consider making it more descriptive to include relevant keywords.")
        elif title_length > 60:
            recommendations.append("Your title is too long; shorten it to 60 characters or fewer for optimal SEO.")

    # Meta Description check: best practice is to have a clear meta description between 50 and 160 characters.
    meta_desc = analysis.get('meta_description')
    if not meta_desc:
        recommendations.append("Include a meta description tag to summarize your content and improve CTR in search results.")
    else:
        meta_length = analysis.get('meta_description_length', 0)
        if meta_length < 50:
            recommendations.append("Your meta description is a bit short; consider elaborating to provide more context.")
        elif meta_length > 160:
            recommendations.append("Your meta description is too long; trim it to under 160 characters for better display.")

    # Heading tags: Ideally, a page should have one primary H1 for a clear structure.
    h1_count = analysis.get('h1_count', 0)
    if h1_count == 0:
        recommendations.append("Add an H1 tag to define the main topic of your page.")
    elif h1_count > 1:
        recommendations.append("Consider using only one H1 tag to maintain a clear content hierarchy.")

    # Images: Alt attributes improve accessibility and SEO.
    images_missing_alt = analysis.get('images_missing_alt', 0)
    if images_missing_alt > 0:
        recommendations.append(f"There are {images_missing_alt} images missing alt attributes; add descriptive alt text to enhance SEO and accessibility.")

    return recommendations

if __name__ == '__main__':
    print("SEO Optimization Analyzer")
    print("=========================\n")
    while True:
        url = input("Enter the URL of the page to analyze (or type 'exit' to quit): ").strip()
        if url.lower() == 'exit':
            print("Exiting SEO Optimization Analyzer. Goodbye!")
            break

        html_content = fetch_page_details(url)
        if html_content:
            analysis = analyze_seo(html_content)
            print("\n--- SEO Analysis Report ---")
            for key, value in analysis.items():
                print(f"{key}: {value}")
            
            print("\n--- Recommendations for Improvement ---")
            recommendations = seo_recommendations(analysis)
            if recommendations:
                for rec in recommendations:
                    print(f"- {rec}")
            else:
                print("Your page looks well-optimized!")
        else:
            print("Failed to retrieve the page content. Please check the URL and try again.")
        
        print("\n" + "="*40 + "\n")
