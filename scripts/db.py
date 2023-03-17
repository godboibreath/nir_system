from pymongo import MongoClient
import os
from dotenv import load_dotenv

from logger import log

load_dotenv()

client = MongoClient(os.environ['DB_PATH'])

db = client[os.environ['DB_NAME']]

db.companies.update_one({'name': 'Lenovo'}, {'$set': {'userRate': 5.1}})
