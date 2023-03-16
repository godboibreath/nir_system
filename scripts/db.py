from pymongo import MongoClient

client = MongoClient('mongodb://127.0.0.1:27017')

db = client.testdb

for doc in db.cats.find():
    print(doc['name'])