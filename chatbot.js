class Chatbot {
  constructor() {
    this.responses = {
      'Hallo': 'Hallo! Wie kann ich Ihnen helfen?',
      'Wie geht es Ihnen?': 'Mir geht es gut, danke der Nachfrage!'
    };
  }

  getResponse(message) {
    return this.responses[message] || 'Es tut mir leid, ich verstehe nicht.';
  }
}

module.exports = { Chatbot };