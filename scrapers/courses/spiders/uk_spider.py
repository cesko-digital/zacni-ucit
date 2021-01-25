import scrapy
import time
from urllib.parse import urljoin
from scrapy.loader import ItemLoader

from ..items import CourseItem


class UKCoursesSpider(scrapy.Spider):
    name = "uk_courses"
    start_urls = [
        # TODO: tohle je jen pajdak, nic jineho
        "https://is.cuni.cz/studium/prijimacky/index.php?do=kurzy&zobraz=1&ffak=11410&fkod=&fkeywords=#vysledky"
    ]

    def parse(self, response):
        # find URLs to course detail page
        hrefs = response.xpath('//table/tr[@class!="head1"]/td[1]/a/@href').getall()
        for url in [urljoin(response.request.url, i) for i in hrefs]:
            yield scrapy.Request(url, callback=self.parse_detail)

        # find URL to next list page
        next_page = response.xpath(f'/html/body/div[2]/div[6]/div[5]/div[2]/a[text()="další"]/@href').get()
        if next_page:
            url = urljoin(response.request.url, next_page)
            yield scrapy.Request(url, callback=self.parse)

    detail_labels = {
        "name": "Název:",
        "faculty": "Uskutečňovatel:",
        "price": "Výše úplaty:",
        "town": "Místo konání:",
        "sds": "Délka programu (v semestrech/krátkodobý):",
        "form": "Způsob výuky programu:",
        "conditions": "Podmínky přijímání zájemců:",
        "term": ("Otevírán v akad. roce:", "Zahájení:"),
        "notes": "Podmínky absolvování programu:",
        "language": "Jazyk, v němž je program uskutečňován:",
        "code": "Číslo akreditace udělené univerzitě/fakultě:",
        "field": "Studijní obor:",
    }

    def parse_detail(self, response):
        loader = ItemLoader(item=CourseItem(), response=response)
        loader.add_value("url", response.request.url)
        loader.add_value("college", "UK")
        loader.add_value("timestamp", time.time())
        for name, labels in self.detail_labels.items():
            if isinstance(labels, str):
                labels = [labels]
            for label in labels:
                loader.add_xpath(name, f'//table//th/label[text()="{label}"]/../following-sibling::td/text()')
        return loader.load_item()
