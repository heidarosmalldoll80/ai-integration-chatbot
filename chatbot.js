class Chatbot {
  constructor() {
    this.responses = {
      'Hallo': 'Hallo! Wie kann ich Ihnen helfen?',
      'Wie geht es Ihnen?': 'Mir geht es gut, danke der Nachfrage!',
      'Guten Morgen': 'Guten Morgen! Schön, Sie zu sehen!',
      'Guten Abend': 'Guten Abend! Wie kann ich Ihnen behilflich sein?',
      'Guten Nacht': 'Guten Nacht! Schlafen Sie gut!'
    };
  }

  getResponse(message) {
    return this.responses[message] || 'Es tut mir leid, ich verstehe nicht.';
  }
}

module.exports = { Chatbot };