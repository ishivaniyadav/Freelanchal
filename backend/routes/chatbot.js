import express from 'express';
const router = express.Router();

const mockData = {
  projects: [
    { name: 'E-commerce Website', status: 'active', deadline: '2025-07-15', freelancer: 'John Doe' },
    { name: 'Mobile App', status: 'in-progress', deadline: '2025-08-20', freelancer: 'Jane Smith' }
  ],
  freelancers: [
    { name: 'John Doe', skills: ['React', 'Node.js'], status: 'available', rating: 4.8 },
    { name: 'Jane Smith', skills: ['Flutter', 'Dart'], status: 'busy', rating: 4.7 }
  ],
  payments: [
    { project: 'E-commerce Website', amount: 2500, status: 'pending', dueDate: '2025-07-01' }
  ]
};

function identifyIntent(message = '') {
  const msg = message.toLowerCase();
  if (msg.includes('project') && msg.includes('active')) return 'show_projects';
  if (msg.includes('freelancer') && msg.includes('available')) return 'available_freelancers';
  if (msg.includes('payment')) return 'payment_status';
  if (msg.includes('deadline')) return 'project_deadlines';
  if (msg.includes('hello') || msg.includes('hi')) return 'greeting';
  if (msg.includes('help')) return 'help';
  return 'general';
}

function generateResponse(intent) {
  switch (intent) {
    case 'show_projects':
      return mockData.projects.map(p =>
        `📌 ${p.name}\nStatus: ${p.status}\nFreelancer: ${p.freelancer}\nDeadline: ${p.deadline}`
      ).join('\n\n');
    case 'available_freelancers':
      const available = mockData.freelancers.filter(f => f.status === 'available');
      return available.length > 0
        ? available.map(f =>
            `👤 ${f.name}\nSkills: ${f.skills.join(', ')}\nRating: ⭐ ${f.rating}/5`
          ).join('\n\n')
        : "⚠️ No freelancers currently available.";
    case 'payment_status':
      return mockData.payments.map(p =>
        `💳 ${p.project}\nAmount: ₹${p.amount}\nStatus: ${p.status}\nDue: ${p.dueDate}`
      ).join('\n\n');
    case 'project_deadlines':
      return mockData.projects.map(p =>
        `📅 ${p.name}\nDeadline: ${p.deadline}\nFreelancer: ${p.freelancer}`
      ).join('\n\n');
    case 'greeting':
      return "👋 Hello! Ask me about your projects, payments, freelancers, or deadlines.";
    case 'help':
      return `🛠 I can help you with:\n- Show active projects\n- View payments\n- Find available freelancers\n- Check deadlines`;
    default:
      return "❓ I'm not sure how to help with that. Try asking something like 'Show my active projects'.";
  }
}

router.post('/chatbot', (req, res) => {
  try {
    const { message } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ response: '⚠️ Please send a valid message.' });
    }
    const intent = identifyIntent(message);
    const response = generateResponse(intent);
    return res.json({ response });
  } catch (error) {
    console.error('Chatbot error:', error.message);
    return res.status(500).json({ response: '🚫 Something went wrong on the server.' });
  }
});

export default router;
