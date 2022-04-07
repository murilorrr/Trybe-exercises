from parsel import Selector
import requests


response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
titulos = selector.css("h3 a::attr(title)").getall()
precos = selector.css(".product_price .price_color::text").getall()
print(titulos)
