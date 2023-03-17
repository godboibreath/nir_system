import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

from logger import log
from db import db

class Parser:
    def __init__(self):
        options = webdriver.ChromeOptions()
        options.add_argument("--disable-blink-features=AutomationControlled") 
        options.add_argument(f'user-agent=Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36')
        options.add_argument("start-maximized")
        options.add_experimental_option("excludeSwitches", ["enable-automation"])
        options.add_experimental_option('useAutomationExtension', False)
        self.driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    def parser(self):
        for company in db.companies.find():
            parser_options = company['parserOptions']
            rates = []
            log(f"Get company - {company['name']}")
            for options in parser_options:
                pages_count = int(options['pagesCount'])
                for page in range(1, pages_count + 1):
                    link = options['link']
                    selector = options['selector']
                    self.driver.get(str(link.replace('{pageValue}', str(page))))
                    log(f"Get link - {link.replace('{pageValue}', str(page))}")
                    time.sleep(10)
                    rates_products = self.driver.find_elements(By.CSS_SELECTOR, str(selector))
                    log(f"Rates for link {link.replace('{pageValue}', str(page))} - {list(map(lambda x: x.text, rates_products))}")
                    for rate in rates_products:
                        if (float(rate.text) > 0):
                            rates.append(float(rate.text))
            log(f"User rate company {company['name']} - {float(sum(rates)/len(rates))}")
            db.companies.update_one({'_id': company['_id']}, {'$set': {'userRate': float(sum(rates)/len(rates))}})
        self.driver.close()
        self.driver.quit()

parser = Parser()

parser.parser()