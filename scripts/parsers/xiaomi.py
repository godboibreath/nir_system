import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(ChromeDriverManager().install())
xiaomi_url = "https://www.mvideo.ru/brand/xiaomi-1083/f/page="
xiaomi_search_params = "?categoryId=10"
xiaomi_rates = []
xiaomi_file = open('xiaomi_rates.txt', 'w')

try:
    for page in range(1, 32):
        driver.get(f'{xiaomi_url}{page}')
        time.sleep(5)
        rates = driver.find_elements(By.CLASS_NAME, 'fl-product-tile-rating__stars-value')
        for rate in rates:
            xiaomi_rates.append(float(rate.text))
    print('rates len - ', len(xiaomi_rates))
    print('xiaomi rates: ', xiaomi_rates, file=xiaomi_file)
except Exception as ex:
    print(ex)
finally:
    xiaomi_file.close()
    driver.close()
    driver.quit()