let recognition = null;

if ('webkitSpeechRecognition' in self) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onresult = (event) => {
    let finalTranscript = '';
    let interimTranscript = '';

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        finalTranscript += event.results[i][0].transcript;
      } else {
        interimTranscript += event.results[i][0].transcript;
      }
    }

    self.postMessage(finalTranscript + ' ' + interimTranscript);
  };

  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
  };
}

self.onmessage = (e) => {
  if (!recognition) {
    self.postMessage('Speech recognition not supported');
    return;
  }

  switch (e.data.command) {
    case 'start':
      recognition.start();
      break;
    case 'stop':
      recognition.stop();
      break;
    case 'pause':
      recognition.stop();
      break;
    case 'resume':
      recognition.start();
      break;
  }
}; 