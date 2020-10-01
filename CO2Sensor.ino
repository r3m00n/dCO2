#include <SoftwareSerial.h>
SoftwareSerial co2Serial(7, 6); // define MH-Z19 RX TX
unsigned long startTime = millis();
void setup() {
  Serial.begin(9600);
  co2Serial.begin(9600);
}

void loop() {
  int ppm_uart = readCO2UART();
  delay(5000);
}

int readCO2UART(){
  byte cmd[9] = {0xFF,0x01,0x86,0x00,0x00,0x00,0x00,0x00,0x79};
  byte response[9]; // for answer
  co2Serial.write(cmd, 9); //request PPM CO2
  memset(response, 0, 9);
   if (co2Serial.available() > 0) {
      co2Serial.readBytes(response, 9);
  }

  int ppm_uart = 256 * (int)response[2] + response[3];
  Serial.print("PPM UART: ");
  Serial.println(ppm_uart);

  return ppm_uart;
}
