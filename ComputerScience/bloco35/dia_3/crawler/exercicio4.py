# Raspar título, preço, descrição e url contendo a imagem de capa do livro.
# http://books.toscrape.com/catalogue/the-grand-design_405/index.html
import requests
from parsel import Selector

price_selector = '.product_main .price_color::text'
base_url = "http://books.toscrape.com/catalogue/"\
    "the-grand-design_405/index.html"

response = requests.get(base_url)
selector = Selector(response.text)
title = selector.css('h1::text').get()
price = selector.css(price_selector).get().replace("Â£", "R$")
url_img = selector.css('.row img::attr(src)').get().split("/")[2:]
url_img = base_url + "/" + "/".join([item for item in url_img])
print(title)
print(price)
print(url_img)
