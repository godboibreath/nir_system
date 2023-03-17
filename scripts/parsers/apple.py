import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options
from fake_useragent import UserAgent

params_list = [
    {
        'category': 'smartfony-205',
        'page_count': 4,
    },
    {
        'category': 'apple-watch-2947',
        'page_count': 25,
    },
    {
        'category': 'zaryadnye-ustroistva-2587',
        'page_count': 1,
    },
    {
        'category': 'naushniki-3967',
        'page_count': 1,
    },
    {
        'category': 'noutbuki-118',
        'page_count': 2,
    },
]

options = Options()
ua = UserAgent()
userAgent = ua.random
options.add_argument(f'user-agent={userAgent}')

# driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
apple_url = "https://www.mvideo.ru/product-list-page?q=apple"
apple_rates = []
apple_file = open('apple_rates_13.12.2022.txt', 'w')

try:
    for params in params_list:
        url = f'{apple_url}&category={params["category"]}'
        for page in range(1, params['page_count'] + 1):
            driver.get(f'{url}&page={page}')
            time.sleep(10)
            rates = driver.find_elements(By.CSS_SELECTOR, '.value.ng-star-inserted')
            for rate in rates:
                apple_rates.append(float(rate.text))
    print('rates len - ', len(apple_rates))
    print('apple rates: ', apple_rates, file=apple_file)
except Exception as ex:
    print(ex)
finally:
    apple_file.close()
    driver.close()
    driver.quit()