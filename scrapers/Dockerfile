FROM python:3.7

RUN mkdir -p /app
WORKDIR /app

COPY requirements.txt /app/
RUN pip install -r /app/requirements.txt

COPY ./ /app
