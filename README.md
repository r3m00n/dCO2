<h1>dCO2</h1>

<h2>Installation</h2>

<h3>Backend auf Raspi</h3>

<code>sudo apt install python3 python3-pip</code> <br/>
<code>pip3 install flask flask_restful flask_cors</code> <br/>
<code>git clone https://github.com/r3m00n/dCO2.git ~/dCO2/</code> <br/>
<code>cd ~/dCO2/server/backend-api</code> <br/>
<code>python3 rest-api.py</code><br/>

<h3>Website</h3>
<p><strong>WICHTIG:</strong>IP Adresse von Raspi-Server in main.js eintragen </p>
<code>sudo apt install apache2</code> <br/>
<code>sudo rm /var/www/html/index.html</code> <br/>
<code>sudo cp ~/dCO2/server/website/* /var/www/html/</code> <br/>
<code>sudo chown www-data:www-data /var/www/html/*</code> <br/>
<code>service apache2 start</code> <br/>

ESP: https://www.amazon.de/AZDelivery-D1-Mini-NodeMcu-Parent/dp/B01N9RXGHY?th=1

Sensor: https://www.neoe.io/products/mq135-luftqualitats-sensor-fur-arduino-nodemcu?variant=32413256482909&currency=EUR&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gclid=EAIaIQobChMIzdq8s5f_6wIVRuR3Ch1VHAwaEAQYBSABEgLDlfD_BwE oder https://www.amazon.de/iHaospace-MH-Z19-Infrared-Sensor-Monitor/dp/B072C6M181
Temperatur, Luftfeuchtigkeit und Luftdruck https://www.amazon.de/AZDelivery-GY-BME280-Barometrischer-Temperatur-Luftfeuchtigkeit/dp/B07D8T4HP6/ref=pd_vtp_107_3/259-1043398-6623129?_encoding=UTF8&pd_rd_i=B07D8T4HP6&pd_rd_r=e79bcf5b-9eac-4d98-96f4-dfcbf4e3b167&pd_rd_w=Q6zAF&pd_rd_wg=Tosfe&pf_rd_p=80911889-e795-4970-aa72-4c8dbf7a55d0&pf_rd_r=FQ7B42TNX292FF1XV4EQ&psc=1&refRID=FQ7B42TNX292FF1XV4EQ

Netzteil: https://www.amazon.de/AmazonBasics-USB-Ladeadapter-Anschluss-Ampere-Schwarz/dp/B0773J952F/ref=sr_1_10?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=usb+netzteil&qid=1600861337&sr=8-10

Kabel: https://www.amazon.de/Ladekabel-Schnellladekabel-Datenkabel-Samsung-Motorola/dp/B089KDZBMP/ref=sr_1_5?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=16MG4361HC5RE&dchild=1&keywords=micro+usb+kabel&qid=1600861379&sprefix=micro+us%2Caps%2C217&sr=8-5

Raspi Netzteil: https://www.amazon.de/Raspberry-Pi-offizielles-Netzteil-Model/dp/B07TMPC9FG/ref=sr_1_3?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1X31DNP67FP7O&dchild=1&keywords=rasperi+pi+netzteil&qid=1600861286&sprefix=rasperi+pi+netzt%2Caps%2C197&sr=8-3

Raspi: https://www.amazon.de/Raspberry-Pi-ARM-Cortex-A72-Bluetooth-Micro-HDMI/dp/B07TC2BK1X/ref=sr_1_3?dchild=1&keywords=raspberry+pi+4&qid=1600861169&sr=8-3


<h2>Aufgaben</h2>

<h3>3D Druck und Hardware</h3>
  Julia
  
<h3>Arduino Programmierung</h3>
  Tilo
  Till
 
<h3>Server & Website Programmierung</h3>
  Merlin
  Klaas

