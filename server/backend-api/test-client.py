import requests, random

BASE = "http://127.0.0.1:5000/co2/Raum3"

def randomData():
    value = random.randint(0, 1800)
    return {"value": value}


response = requests.post(BASE, data=randomData())
print(response)
