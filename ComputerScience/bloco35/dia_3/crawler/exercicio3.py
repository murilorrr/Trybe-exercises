import requests
URL = "https://scrapethissite.com/pages/advanced/?gotcha=headers"
headers = {
    'User-agent': "Mozilla/5.0",
    'From': 'murilorsv14@gmail.com'
}

response = requests.get(URL, headers=headers)
assert "bot detected" not in response.text
