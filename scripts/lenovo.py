import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(ChromeDriverManager().install())
lenovo_url = "https://www.mvideo.ru/brand/lenovo-1006/f/page="
lenovo_search_params = "?categoryId=10"
lenovo_rates = []
lenovo_file = open('lenovo_rates.txt', 'w')

try:
    for page in range(1, 34):
        driver.get(f'{lenovo_url}{page}')
        time.sleep(5)
        rates = driver.find_elements(By.CLASS_NAME, 'fl-product-tile-rating__stars-value')
        for rate in rates:
            lenovo_rates.append(float(rate.text))
    print('rates len - ', len(lenovo_rates))
    print('lenovo rates: ', lenovo_rates, file=lenovo_file)
except Exception as ex:
    print(ex)
finally:
    lenovo_file.close()
    driver.close()
    driver.quit()