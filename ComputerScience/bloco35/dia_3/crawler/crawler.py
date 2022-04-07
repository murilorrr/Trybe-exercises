from parsel import Selector
import requests


response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
titulos = selector.css("h3 a::attr(title)").getall()
print(titulos)
