import scrapy


class CourseItem(scrapy.Item):
    """
    Common attributes about course.
    """
    name = scrapy.Field()
    college = scrapy.Field()
    faculty = scrapy.Field()
    price = scrapy.Field()
    town = scrapy.Field()
    sds = scrapy.Field()
    form = scrapy.Field()
    url = scrapy.Field()
    conditions = scrapy.Field()
    term = scrapy.Field()
    notes = scrapy.Field()
    language = scrapy.Field()
    code = scrapy.Field()
    field = scrapy.Field()
    timestamp = scrapy.Field()
