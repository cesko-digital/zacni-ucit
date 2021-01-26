Graphene-Django Tutorial
https://docs.graphene-python.org/projects/django/en/latest/tutorial-plain/



Pusteni Neo4J pres Docker
https://rtfm.co.ua/en/neo4j-graph-database-run-with-docker-and-cypher-ql-examples/


Project initial setup:

1) pip install -r requirements.txt
2) cp .env.sample .env
3) python manage.py load_sample_data

Visit this url and if everythings went as expected, you should be able to see sample data
http://127.0.0.1:8000/graphql/#query=%7BallSchoolLevels%7B%0A%20%20id%0A%20%20name%0A%20%20description%0A%7D%7D
