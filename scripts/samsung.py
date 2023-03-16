import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(ChromeDriverManager().install())
samsung_url = "https://www.mvideo.ru/brand/samsung-13/f/page="
samsung_search_params = "?categoryId=10"
samsung_rates = []
samsung_file = open('samsung_rates.txt', 'w')

try:
    for page in range(1, 171):
        driver.get(f'{samsung_url}{page}')
        time.sleep(5)
        rates = driver.find_elements(By.CLASS_NAME, 'fl-product-tile-rating__stars-value')
        for rate in rates:
            samsung_rates.append(float(rate.text))
    print('rates len - ', len(samsung_rates))
    print('samsung rates: ', samsung_rates, file=samsung_file)
except Exception as ex:
    print(ex)
finally:
    samsung_file.close()
    driver.close()
    driver.quit()