from flask import Flask
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS
import csv, os, datetime, json

BASE_PATH = path = os.path.dirname(__file__)

app = Flask(__name__)
cors = CORS(app, resources = {r"/co2/*":{"origins": "*"}})
api = Api(app)

data_post_args = reqparse.RequestParser()
data_post_args.add_argument("value", type=int)

def check_if_id_exists(id):
    if os.path.exists(BASE_PATH + "/data/" + id + ".csv"):
        return
    else:
        create_id(id)
         

def create_id(id):
    with open(BASE_PATH + "/data/" + id + ".csv", mode='w+', newline='') as csv_file:
            writer = csv.writer(csv_file)
            writer.writerow(["time", "value"])

class MeasuredValue(Resource):
    def get(self, id):
        csv = ""
        with open(BASE_PATH + "/data/" + id + ".csv", mode='r', newline='') as csv_file:
            for line in csv_file:
                csv += line

    
        return {"csv": csv}


    def post(self,id):
        args = data_post_args.parse_args()
        check_if_id_exists(id)
        now = datetime.datetime.today().isoformat("T")
        with open(BASE_PATH + "/data/" + id + ".csv", mode='a', newline='') as csv_file:
            writer = csv.writer(csv_file)
            writer.writerow([now, args['value']])

        return '', 201
class AvaiableSensors(Resource):
    def get(self):
        f = []
        for (_, _, filenames) in os.walk(BASE_PATH+"/data/"):
            f.extend(filenames)
            break
        for i in range(0,len(f)):
            f[i] = f[i].split('.')[0]
        names_of_sensors = {"names":f}
        return names_of_sensors


api.add_resource(MeasuredValue, "/co2/<string:id>")
api.add_resource(AvaiableSensors, "/co2/overview")
if __name__ =="__main__":
    app.run(host='0.0.0.0', debug=True)




