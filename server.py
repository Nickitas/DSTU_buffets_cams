from requests.auth import  HTTPBasicAuth
from flask import Flask, Response
from flask_cors import CORS, cross_origin
import cv2

class VideoCamera(object):
    def __init__(self):
        self.cap = cv2.VideoCapture(0) 
    
    def __del__(self):
        self.cap.release()
    
    def get_frame(self):
        success, image = self.cap.read()
        ret, jpeg = cv2.imencode('.jpg', image)
        return jpeg.tobytes()

def gen(camera):
    while True:
        frame = camera.get_frame()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/video_feed')
def video_feed():
    return Response(gen(VideoCamera()), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__=="__main__":
	app.run()