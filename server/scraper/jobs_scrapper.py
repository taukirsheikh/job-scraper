import requests
from bs4 import BeautifulSoup
from datetime import datetime

def scrape_jobs(position):
    def get_url(position):

        "generate a url based on the postion passed"
        template = 'https://merojob.com/search/?q={}'
        url=template.format(position)
        return url
    def get_record(card):

        """Extract the job data from a single record"""
        a_tag=card.h1.a
        
        job_title=a_tag.get('title') 
        # print(job_title)
        job_url='https://www.merojob.com'+a_tag.get('href')
        # print(job_url)
        a_tag2=card.h3.a
        h_tag=card.h3
        company=a_tag2.text.strip()
        # print(company)
        company_postings='https://merojob.com'+a_tag2.get('href')
        # print(company_postings)
        location_element = card.find('span',itemprop='addressLocality')
        job_location = location_element.text.strip()
        # print(job_location)
        skills=card.find('span',itemprop='skills').text
        skills=skills.replace('\n',' ')
        # print(skills)
        apply_before=card.find('span', class_='icon-time').next_sibling.next_sibling.text
        apply_before=apply_before.replace('\xa0',' ')
        today=datetime.today().strftime('%Y-%m-%d')
        # print(today)
        try:

            views=card.find('span', class_='icon').next_sibling.strip()
            # print(views)
        except AttributeError:
            views='0'
        record={"job_title":job_title,
                "company":company,
                "job_link":job_url,
                "More_jobs":company_postings,
                "location":job_location,
                "skills":skills,
                "deadline":apply_before,
                "scrp_date":today,
                "views":views}
        
            
        return record
    records = []
    url = get_url(position)
    
    while True:
        try:
            response = requests.get(url)
            soup = BeautifulSoup(response.text, 'html.parser')

            cards = soup.find_all('div', itemtype='http://schema.org/JobPosting')
            for card in cards:
                record = get_record(card)
                records.append(record)

            next_page_link = soup.find('a', {'class': 'pagination-next'})
            if next_page_link is None:
                break

            url = 'https://merojob.com' + next_page_link.get('href')

        except Exception as e:
            print(f"An error occurred: {e}")
            break
   

    return records


#cotiviti
def cotiviti(url_link):
  def get_record(card):
    job_title=card.find('h3').text
    a_tag=card.div.h3.a
    job_url='https://www.cotiviti.com.np'+a_tag.get('href')
    record={'job_title':job_title,
             "job_url":job_url}

    return record

    

  records=[]
  try:
    response=requests.get(url_link)
    soup=BeautifulSoup(response.text,'html.parser')
    cards=soup.find_all('div', class_='views-row')
    for card in cards:
      record=get_record(card)
      records.append(record)


  except Exception as e:
    print(e)
    
  return records

