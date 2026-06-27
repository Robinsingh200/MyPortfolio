const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

dotenv.config();

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  await User.deleteMany({ email: 'admin@portfolio.com' });
  await User.create({ name: 'Admin', email: 'admin@portfolio.com', password: 'admin123' });
  console.log('✅ Admin user created: admin@portfolio.com / admin123');
  process.exit();
}

seed().catch(err => { console.error(err); process.exit(1); });
