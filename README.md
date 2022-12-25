# Dokumentasi Splunk

Download Image Splunk untuk docker dengan cara membuka terminal lalu masukan

  ```sh
  $ docker pull splunk/splunk:latest
  ```
  
  lalu buat container menggunakan command
  
  
  ```sh
  $ docker run -d -p 8000:8000 -e "SPLUNK_START_ARGS=--accept-license" -e "SPLUNK_PASSWORD=<password>" --name splunk splunk/splunk:latest
  ```
  
  
