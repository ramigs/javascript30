# Notes

- Thee `SpeechRecognition` interface of the [Web Speech](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) API is the controller interface for the recognition service
- The API needs to run on a web server
- `recognition.setInterimResults = true;` to process speech on-the-fly and being able to print the results dynamically
- `SpeechRecognitionResultList` is a pretty nested object and needs to be parsed in order to fetch the recognition results
- Add `end` event listener to restart the recognition
