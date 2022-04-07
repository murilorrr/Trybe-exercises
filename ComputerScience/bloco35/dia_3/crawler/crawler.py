from parsel import Selector
import requests
import locale

locale.setlocale(locale.LC_MONETARY, "en_US.UTF-8")
response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
titulos = selector.css("h3 a::attr(title)").getall()
precos = selector.css(".product_price .price_color::text").getall()
preco = [locale.currency(float(n.split("£")[1])) for n in precos]
print(preco)
