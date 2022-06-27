export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  content: string;
}

const messages: Message[] = [
  {
    fromName: 'Matt Chorsey',
    subject: 'New event: Trip to Vegas',
    date: '9:32 AM',
    id: 0,
    content: 'test message'
  },
  {
    fromName: 'Lauren Ruthford',
    subject: 'Long time no chat',
    date: '6:12 AM',
    id: 1,
    content: 'test message'
  },
  {
    fromName: 'Jordan Firth',
    subject: 'Report Results',
    date: '4:55 AM',
    id: 2,
    content: 'test message'
  },
  {
    fromName: 'Bill Thomas',
    subject: 'The situation',
    date: 'Yesterday',
    id: 3,
    content: 'test message'
  },
  {
    fromName: 'Joanne Pollan',
    subject: 'Updated invitation: Swim lessons',
    date: 'Yesterday',
    id: 4,
    content: 'test message'
  },
  {
    fromName: 'Andrea Cornerston',
    subject: 'Last minute ask',
    date: 'Yesterday',
    id: 5,
    content: 'test message'
  },
  {
    fromName: 'Moe Chamont',
    subject: 'Family Calendar - Version 1',
    date: 'Last Week',
    id: 6,
    content: 'test message'
  },
  {
    fromName: 'Kelly Richardson',
    subject: 'Placeholder Headhots',
    date: 'Last Week',
    id: 7,
    content: 'test message'
  }
];

export const getMessages = () => messages;

export const getMessage = (id: number) => messages.find(m => m.id === id);