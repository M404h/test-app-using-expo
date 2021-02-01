# test-app-using-expo



## intro 
this is a weather application using expo, which will view the weather of your city 

## Technologies
Project is created with:
* Expo (ReactNative)
* weather API (openweather) -> work based on lon and lan
* Ionicons for icons
* geolocation to find city (openweather) ->from lon and lan
* expo-location -> to get lon and lan

## Setup
To run this project, install it locally using npm:
### Expo 
* install 
```
 npm install expo-cli --global
```
* add to system envoirment 
```
 C:\Users\(your user)\AppData\Roaming\npm
```
* create project 
```
expo init weather-app
cd weather-app
expo start 
```

* Icons mapped through JSON file from Ionicons
```
icons.json
```
![app](https://user-images.githubusercontent.com/67692329/106445788-80913400-6490-11eb-818c-3a4ef9dc0df9.gif)


## Errors and fix 
in case of error when creating expo project or starting it  
```
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```
