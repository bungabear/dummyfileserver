# DummyFileServer

요청한 크기 만큼의 더미 파일을 응답해주는 서버.  
Heroku에 호스팅하여
[DataBurner](https://github.com/bungabear/DataBurner)에서 사용  

https://dummyfileserver.herokuapp.com/

# Rest API

## GET /dummy
   **query**  
   - size : byte 단위로  최대 2GB까지 허용
   
[sample](https://dummyfileserver.herokuapp.com/dummy?size=1000000)
